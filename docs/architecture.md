# Wild Rescue - System Architecture

## 🏗️ Architecture Overview

Wild Rescue uses a microservices architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                         │
├──────────────────┬──────────────────┬───────────────────┤
│  Mobile App      │    Website       │  Admin Dashboard  │
│  (Flutter)       │  (Next.js)       │   (React)         │
└────────┬─────────┴────────┬─────────┴─────────┬─────────┘
         │                  │                   │
         └──────────────────┼───────────────────┘
                            │ (HTTPS/REST API)
┌───────────────────────────┴───────────────────────────────┐
│                     API Gateway                            │
│                    (Rate Limiter)                          │
└───────────────────────────┬───────────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
┌────────▼──────┐  ┌────────▼──────┐  ┌──────▼──────────┐
│  Backend API  │  │  AI Services  │  │  File Storage  │
│  (NestJS)     │  │  (Python/ML)  │  │  (S3/Firebase) │
└────────┬──────┘  └────────┬──────┘  └────────────────┘
         │                  │
     ┌───┴──────────────────┴────┐
     │   Data & Notification     │
     ├──────────────┬────────────┤
     │  PostgreSQL  │   Redis    │
     └──────────────┴────────────┘
```

## 🔌 Core Components

### 1. Frontend Layer

#### Mobile App (Flutter)
- Cross-platform: iOS, Android, Web
- State management: Provider + Riverpod
- Local caching: Hive
- Offline support for critical features

#### Website (Next.js)
- Public-facing landing page
- Information portal
- Hospital & volunteer directory
- Blog & FAQ
- Donation portal

#### Admin Dashboard (React)
- Administrative interface
- User management
- Report management
- Analytics & reporting
- System monitoring

### 2. Backend API (NestJS)

**Authentication Module**
- JWT-based authentication
- Two-factor authentication (optional)
- Social login (Google, Facebook)
- Email verification

**Core Modules**
- Users: User management & profiles
- Reports: Animal incident reporting
- Rescues: Rescue coordination
- Hospitals: Veterinary hospital management
- Volunteers: Volunteer coordination
- Notifications: Real-time notifications
- Analytics: System metrics & reporting
- AI: Machine learning integration

**Infrastructure**
- Prisma ORM: Database abstraction
- Redis: Caching & sessions
- Bull: Job queue
- Swagger: API documentation

### 3. AI Services (Python)

Separate microservices for ML operations:
- **Animal Classifier**: Identify animal species
- **Species Detection**: Detect multiple species in images
- **Image Analysis**: Assess animal condition
- **Emergency Priority**: Determine urgency level
- **Recommendation Engine**: Suggest nearest hospital

### 4. Data Layer

**PostgreSQL Database**
- User accounts
- Reports & rescues
- Hospital information
- Volunteer profiles
- Notifications
- Analytics data

**Redis Cache**
- Session management
- Real-time notifications
- Rate limiting
- Hot data caching

### 5. File Storage

- **Local**: Development environment
- **AWS S3**: Production uploads
- **Firebase**: Mobile analytics & messaging

## 🔐 Security Architecture

```
Client Request
    ↓
[SSL/TLS Encryption]
    ↓
[Rate Limiter]
    ↓
[JWT Validation]
    ↓
[Role-Based Access Control]
    ↓
[Input Validation & Sanitization]
    ↓
Authenticated Request
```

## 📊 Data Flow

### Report Creation
```
1. User takes photo of animal
2. Mobile app compresses image
3. Send report + image to backend
4. Backend stores in DB + file storage
5. Triggers AI analysis (async)
6. AI returns analysis results
7. Backend creates rescue record
8. Notification sent to volunteers
9. Volunteers can accept rescue
10. Status updated in real-time
```

### Rescue Coordination
```
1. Report matched with nearby volunteers
2. Push notification sent
3. Volunteer accepts/declines
4. Hospital suggested based on location
5. Hospital staff notified
6. Progress tracking begins
7. Status updates push to all parties
8. Completion & follow-up
```

## 🔄 Integration Points

**Mobile App ↔ Backend**
- REST API with JSON
- WebSocket for real-time updates
- Image upload multipart/form-data

**Backend ↔ AI Services**
- Message queue (RabbitMQ/Bull)
- Image upload to shared storage
- Result callback HTTP endpoint

**Backend ↔ External Services**
- Google Maps API: Geolocation
- Firebase: Push notifications
- Email Service: Transactional emails
- AWS S3: File storage

## 🚀 Deployment Architecture

```
                    ┌─────────────┐
                    │   Nginx     │
                    │  (Reverse   │
                    │  Proxy)     │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    ┌───▼────┐         ┌──▼────┐      ┌─────▼───┐
    │Backend1 │◄──────►│Redis  │      │ Backend2│
    └────────┘         └───────┘      └────────┘
        │                  │                │
        └──────────────────┼────────────────┘
                           │
                    ┌──────▼──────┐
                    │ PostgreSQL  │
                    │  (Primary)  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │PostgreSQL   │
                    │(Replica)    │
                    └─────────────┘
```

## 📈 Scalability Considerations

1. **Horizontal Scaling**: Multiple backend instances behind load balancer
2. **Database**: Read replicas for scaling reads
3. **Caching**: Redis for frequently accessed data
4. **CDN**: CloudFront for static assets
5. **Message Queue**: Async processing of heavy operations
6. **Microservices**: AI services scaled independently

## 🔍 Monitoring & Logging

- **Application Logs**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Performance Metrics**: Prometheus + Grafana
- **Error Tracking**: Sentry
- **User Analytics**: Firebase Analytics
- **Health Checks**: Regular endpoint monitoring
