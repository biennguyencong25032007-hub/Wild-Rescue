-- Database Functions

-- Function: Calculate distance between two coordinates (in km)
CREATE OR REPLACE FUNCTION calculate_distance(
  lat1 FLOAT, lon1 FLOAT,
  lat2 FLOAT, lon2 FLOAT
) RETURNS FLOAT AS $$
BEGIN
  RETURN 6371 * 2 * ASIN(SQRT(
    POWER(SIN(RADIANS(lat2 - lat1) / 2), 2) +
    COS(RADIANS(lat1)) * COS(RADIANS(lat2)) * 
    POWER(SIN(RADIANS(lon2 - lon1) / 2), 2)
  ));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Function: Find nearest hospitals to a location
CREATE OR REPLACE FUNCTION find_nearest_hospitals(
  user_lat FLOAT,
  user_lon FLOAT,
  max_distance FLOAT DEFAULT 50
)
RETURNS TABLE (
  hospital_id UUID,
  hospital_name VARCHAR,
  distance FLOAT,
  address VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    h.id,
    h.name,
    calculate_distance(user_lat, user_lon, h.latitude, h.longitude) as dist,
    h.address
  FROM hospitals h
  WHERE calculate_distance(user_lat, user_lon, h.latitude, h.longitude) <= max_distance
    AND h.verified = TRUE
  ORDER BY dist ASC;
END;
$$ LANGUAGE plpgsql;

-- Function: Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function: Create audit log entry
CREATE OR REPLACE FUNCTION create_audit_log()
RETURNS TRIGGER AS $$
BEGIN
  -- Log logic here
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
