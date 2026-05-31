-- Database Views for Analytics

-- View: Active Rescues
CREATE OR REPLACE VIEW active_rescues AS
SELECT 
  r.id,
  r.report_id,
  r.volunteer_id,
  r.hospital_id,
  r.status,
  rep.title as report_title,
  rep.animal_type,
  rep.condition,
  CASE 
    WHEN r.status = 'PENDING' THEN 'Chờ xử lý'
    WHEN r.status = 'IN_PROGRESS' THEN 'Đang giải cứu'
    WHEN r.status = 'COMPLETED' THEN 'Hoàn thành'
    ELSE 'Đã hủy'
  END as status_label,
  r.created_at,
  EXTRACT(HOUR FROM NOW() - r.created_at) as hours_elapsed
FROM rescues r
JOIN reports rep ON r.report_id = rep.id
WHERE r.status IN ('PENDING', 'IN_PROGRESS')
ORDER BY r.created_at DESC;

-- View: Hospital Statistics
CREATE OR REPLACE VIEW hospital_stats AS
SELECT 
  h.id,
  h.name,
  COUNT(r.id) FILTER (WHERE r.status = 'COMPLETED') as total_rescues,
  COUNT(r.id) FILTER (WHERE r.status = 'IN_PROGRESS') as active_rescues,
  AVG(EXTRACT(HOUR FROM r.completed_at - r.started_at)) 
    FILTER (WHERE r.status = 'COMPLETED') as avg_rescue_hours,
  h.created_at
FROM hospitals h
LEFT JOIN rescues r ON h.id = r.hospital_id
GROUP BY h.id, h.name, h.created_at;

-- View: Volunteer Performance
CREATE OR REPLACE VIEW volunteer_performance AS
SELECT 
  v.id,
  u.full_name,
  COUNT(r.id) as total_rescues,
  COUNT(r.id) FILTER (WHERE r.status = 'COMPLETED') as completed_rescues,
  ROUND(
    COUNT(r.id) FILTER (WHERE r.status = 'COMPLETED')::NUMERIC / 
    NULLIF(COUNT(r.id), 0) * 100, 2
  ) as success_rate,
  v.rating,
  v.verified
FROM volunteers v
JOIN users u ON v.user_id = u.id
LEFT JOIN rescues r ON v.id = r.volunteer_id
GROUP BY v.id, u.full_name, v.rating, v.verified;

-- View: Daily Reports
CREATE OR REPLACE VIEW daily_reports AS
SELECT 
  DATE(created_at) as report_date,
  COUNT(*) as total_reports,
  COUNT(*) FILTER (WHERE status = 'PENDING') as pending_reports,
  COUNT(*) FILTER (WHERE status = 'COMPLETED') as completed_reports,
  COUNT(DISTINCT user_id) as unique_reporters
FROM reports
GROUP BY DATE(created_at)
ORDER BY report_date DESC;
