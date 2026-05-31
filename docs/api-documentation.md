# Wild Rescue - API Documentation

## 🔑 Authentication

All API endpoints require JWT token in Authorization header:

```
Authorization: Bearer <jwt_token>
```

## 📚 API Endpoints

### Auth Endpoints

#### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "phone": "+84912345678",
  "password": "SecurePass123!",
  "fullName": "John Doe"
}

Response: 201 Created
{
  "id": "user_id",
  "email": "user@example.com",
  "token": "jwt_token"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

Response: 200 OK
{
  "token": "jwt_token",
  "user": { /* user object */ }
}
```

### Reports Endpoints

#### Create Report
```
POST /api/reports
Content-Type: multipart/form-data

{
  "title": "Injured dog on Main Street",
  "description": "Found a brown dog with injured leg",
  "animalType": "dog",
  "species": "mixed",
  "condition": "INJURED",
  "latitude": 10.7769,
  "longitude": 106.7009,
  "address": "Main Street, HCMC",
  "images": [/* file uploads */]
}

Response: 201 Created
{
  "id": "report_id",
  "title": "...",
  "status": "PENDING",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### Get Reports
```
GET /api/reports?status=PENDING&limit=20&offset=0

Response: 200 OK
{
  "data": [ /* report objects */ ],
  "total": 100,
  "limit": 20,
  "offset": 0
}
```

#### Get Report Details
```
GET /api/reports/:reportId

Response: 200 OK
{
  "id": "report_id",
  "title": "...",
  "status": "...",
  "rescue": { /* rescue object */ }
}
```

### Hospitals Endpoints

#### Get Hospitals
```
GET /api/hospitals?latitude=10.7769&longitude=106.7009&radius=5

Response: 200 OK
{
  "data": [
    {
      "id": "hospital_id",
      "name": "Pet Hospital ABC",
      "phone": "0912345678",
      "address": "...",
      "distance": 1.2
    }
  ]
}
```

#### Get Hospital Details
```
GET /api/hospitals/:hospitalId

Response: 200 OK
{
  "id": "hospital_id",
  "name": "...",
  "description": "...",
  "services": ["checkup", "surgery", "vaccination"],
  "operatingHours": "08:00-20:00"
}
```

### Rescues Endpoints

#### Create Rescue
```
POST /api/rescues
Content-Type: application/json

{
  "reportId": "report_id",
  "volunteerId": "volunteer_id",
  "hospitalId": "hospital_id"
}

Response: 201 Created
{
  "id": "rescue_id",
  "reportId": "report_id",
  "status": "PENDING"
}
```

#### Update Rescue Status
```
PATCH /api/rescues/:rescueId
Content-Type: application/json

{
  "status": "IN_PROGRESS",
  "notes": "Animal at clinic now"
}

Response: 200 OK
{
  "id": "rescue_id",
  "status": "IN_PROGRESS"
}
```

## 🔄 Error Responses

```json
{
  "statusCode": 400,
  "message": "Invalid input",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

## 📊 Rate Limiting

- 100 requests per minute per user
- 1000 requests per hour per API key

## 🔄 Pagination

Use `limit` and `offset` for pagination:
- Default limit: 20
- Max limit: 100
- Default offset: 0
