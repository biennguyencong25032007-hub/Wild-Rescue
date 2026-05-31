-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Create tables
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  avatar VARCHAR(500),
  bio TEXT,
  role VARCHAR(50) DEFAULT 'USER',
  status VARCHAR(50) DEFAULT 'ACTIVE',
  latitude FLOAT,
  longitude FLOAT,
  address VARCHAR(500),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  deletedAt TIMESTAMP
);

CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  animalType VARCHAR(100) NOT NULL,
  species VARCHAR(100),
  condition VARCHAR(50) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  address VARCHAR(500) NOT NULL,
  images JSONB,
  status VARCHAR(50) DEFAULT 'PENDING',
  priority VARCHAR(50) DEFAULT 'MEDIUM',
  userId UUID NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE INDEX idx_reports_userId ON reports(userId);
CREATE INDEX idx_reports_status ON reports(status);
