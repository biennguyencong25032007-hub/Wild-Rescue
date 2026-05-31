# Wild Rescue - Database Design

## 📊 Database Schema

### Overview

The database uses PostgreSQL with Prisma ORM for type safety and migrations.

## 🗂️ Tables

### users
```sql
id          SERIAL PRIMARY KEY
email       VARCHAR(255) UNIQUE NOT NULL
phone       VARCHAR(20) UNIQUE
password    VARCHAR(255) NOT NULL
fullName    VARCHAR(255) NOT NULL
avatar      VARCHAR(500)
bio         TEXT
role        ENUM(ADMIN, HOSPITAL_STAFF, VOLUNTEER, USER) DEFAULT 'USER'
status      ENUM(ACTIVE, INACTIVE, SUSPENDED, DELETED) DEFAULT 'ACTIVE'
latitude    FLOAT
longitude   FLOAT
address     VARCHAR(500)
createdAt   TIMESTAMP DEFAULT NOW()
updatedAt   TIMESTAMP DEFAULT NOW()
deletedAt   TIMESTAMP NULL
```

### reports
```sql
id              SERIAL PRIMARY KEY
title           VARCHAR(255) NOT NULL
description     TEXT NOT NULL
animalType      VARCHAR(100) NOT NULL
species         VARCHAR(100)
condition       ENUM(CRITICAL, INJURED, SICK, LOST, ABANDONED) NOT NULL
latitude        FLOAT NOT NULL
longitude       FLOAT NOT NULL
address         VARCHAR(500) NOT NULL
images          JSON (array of URLs)
status          ENUM(PENDING, ASSIGNED, IN_PROGRESS, COMPLETED, CANCELLED) DEFAULT 'PENDING'
priority        ENUM(LOW, MEDIUM, HIGH, CRITICAL) DEFAULT 'MEDIUM'
userId          INT NOT NULL (FK users.id)
createdAt       TIMESTAMP DEFAULT NOW()
updatedAt       TIMESTAMP DEFAULT NOW()
INDEX(userId, status)
```

### rescues
```sql
id              SERIAL PRIMARY KEY
reportId        INT UNIQUE NOT NULL (FK reports.id)
volunteerId     INT (FK volunteers.id)
hospitalId      INT (FK hospitals.id)
status          ENUM(PENDING, IN_PROGRESS, COMPLETED, CANCELLED) DEFAULT 'PENDING'
startedAt       TIMESTAMP NULL
completedAt     TIMESTAMP NULL
notes           TEXT
createdAt       TIMESTAMP DEFAULT NOW()
updatedAt       TIMESTAMP DEFAULT NOW()
INDEX(volunteerId, hospitalId)
```

### hospitals
```sql
id              SERIAL PRIMARY KEY
name            VARCHAR(255) NOT NULL
email           VARCHAR(255) UNIQUE NOT NULL
phone           VARCHAR(20) UNIQUE NOT NULL
website         VARCHAR(500)
latitude        FLOAT NOT NULL
longitude       FLOAT NOT NULL
address         VARCHAR(500) NOT NULL
city            VARCHAR(100) NOT NULL
description     TEXT
logo            VARCHAR(500)
verified        BOOLEAN DEFAULT FALSE
operatingHours  JSON (HH:MM format)
services        JSON (array of services)
managerId       INT NOT NULL (FK users.id)
createdAt       TIMESTAMP DEFAULT NOW()
updatedAt       TIMESTAMP DEFAULT NOW()
INDEX(managerId)
```

### volunteers
```sql
id              SERIAL PRIMARY KEY
userId          INT UNIQUE NOT NULL (FK users.id)
bio             TEXT
expertise       JSON (array of expertise areas)
avatar          VARCHAR(500)
rating          FLOAT DEFAULT 5.0
reviews         INT DEFAULT 0
verified        BOOLEAN DEFAULT FALSE
certifications  JSON (array of certification URLs)
createdAt       TIMESTAMP DEFAULT NOW()
updatedAt       TIMESTAMP DEFAULT NOW()
INDEX(userId)
```

### notifications
```sql
id              SERIAL PRIMARY KEY
userId          INT NOT NULL
type            ENUM(REPORT_CREATED, RESCUE_ASSIGNED, RESCUE_UPDATED, RESCUE_COMPLETED, URGENT_ALERT, SYSTEM_ALERT)
title           VARCHAR(255) NOT NULL
message         TEXT NOT NULL
data            JSON (flexible data structure)
read            BOOLEAN DEFAULT FALSE
readAt          TIMESTAMP NULL
createdAt       TIMESTAMP DEFAULT NOW()
```

## 🔗 Relationships

```
User (1) -----> (Many) Report
User (1) -----> (Many) Rescue
User (1) -----> (1) Volunteer
User (1) -----> (1) Hospital

Report (1) -----> (1) Rescue
Rescue (Many) -----> (1) Volunteer
Rescue (Many) -----> (1) Hospital
```

## 📈 Indexes

Key indexes for performance:
- `reports(userId, status)`
- `reports(latitude, longitude)` - For geospatial queries
- `hospitals(managerId)`
- `rescues(volunteerId, hospitalId)`
- `volunteers(userId)`

## 🔐 Security

- Foreign key constraints enabled
- Soft deletes for audit trail
- User status tracking
- Role-based access control in application layer
