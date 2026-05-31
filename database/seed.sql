-- Initial Database Seed Data

-- Seed Users
INSERT INTO users (id, email, phone, password, full_name, role, status, created_at)
VALUES 
  ('admin-001', 'admin@wildrescue.app', '+84901234567', '$2a$10$...', 'Admin User', 'ADMIN', 'ACTIVE', NOW()),
  ('hospital-001', 'hospital@example.com', '+84912345678', '$2a$10$...', 'Pet Hospital', 'HOSPITAL_STAFF', 'ACTIVE', NOW()),
  ('volunteer-001', 'volunteer@example.com', '+84913345678', '$2a$10$...', 'John Volunteer', 'VOLUNTEER', 'ACTIVE', NOW()),
  ('user-001', 'user@example.com', '+84914345678', '$2a$10$...', 'Regular User', 'USER', 'ACTIVE', NOW())
ON CONFLICT DO NOTHING;

-- Seed Hospitals
INSERT INTO hospitals (id, name, email, phone, website, latitude, longitude, address, city, description, verified, manager_id, created_at)
VALUES 
  ('hospital-uuid-1', 'Pet Hospital ABC', 'hospital@example.com', '+84912345678', 'www.pethospital.com', 10.7769, 106.7009, '123 Main St', 'HCMC', 'Best veterinary hospital', true, 'hospital-001', NOW()),
  ('hospital-uuid-2', 'Animal Care Center', 'care@example.com', '+84912345679', 'www.animalcare.com', 10.8104, 106.6589, '456 Oak St', 'HCMC', 'Emergency animal care', true, 'hospital-001', NOW())
ON CONFLICT DO NOTHING;

-- Seed Volunteers
INSERT INTO volunteers (id, user_id, bio, verified, rating, reviews, created_at)
VALUES 
  ('volunteer-uuid-1', 'volunteer-001', 'Experienced animal rescuer', true, 4.8, 25, NOW())
ON CONFLICT DO NOTHING;

-- Seed Sample Reports (last 7 days)
INSERT INTO reports (id, title, description, animal_type, species, condition, latitude, longitude, address, status, priority, user_id, created_at)
VALUES 
  ('report-001', 'Injured dog on Main Street', 'Brown dog with injured leg', 'dog', 'mixed', 'INJURED', 10.7769, 106.7009, 'Main Street, HCMC', 'COMPLETED', 'HIGH', 'user-001', NOW() - INTERVAL '5 days'),
  ('report-002', 'Lost cat in District 1', 'Orange tabby cat missing for 2 days', 'cat', 'domestic', 'LOST', 10.8104, 106.6589, 'District 1, HCMC', 'IN_PROGRESS', 'MEDIUM', 'user-001', NOW() - INTERVAL '2 days')
ON CONFLICT DO NOTHING;

-- Refresh sequences
SELECT setval('users_id_seq', (SELECT MAX(id) FROM users), true);
SELECT setval('reports_id_seq', (SELECT MAX(id) FROM reports), true);
