# Wild Rescue - Requirements

## 📋 Functional Requirements

### 1. User Management
- [x] User registration (email, phone)
- [x] User login with JWT
- [x] Profile management
- [x] User roles (Admin, Hospital Staff, Volunteer, Regular User)
- [x] Two-factor authentication (future)

### 2. Animal Reporting
- [x] Create rescue report
- [x] Add photos/videos of animal
- [x] Specify animal type and condition
- [x] GPS location tracking
- [x] Emergency priority levels
- [ ] Live streaming capability (future)

### 3. Map & Location
- [x] Real-time map display
- [x] Filter reports by distance
- [x] Hospital location display
- [x] Volunteer location tracking
- [x] Route optimization

### 4. Rescue Coordination
- [x] Assign volunteers to rescues
- [x] Hospital coordination
- [x] Progress tracking
- [x] Status updates
- [x] Completion verification

### 5. Hospital Management
- [x] Hospital profile
- [x] Availability status
- [x] Service offerings
- [x] Staff management
- [x] Case history

### 6. Notifications
- [x] Push notifications
- [x] Email alerts
- [x] In-app messaging
- [x] Real-time updates
- [x] Priority routing

### 7. Admin Dashboard
- [x] User management
- [x] Report analytics
- [x] Hospital management
- [x] Volunteer verification
- [x] System metrics

## 🔧 Non-Functional Requirements

### Performance
- API response time: < 200ms (p95)
- Database queries: < 100ms (p95)
- Mobile app startup: < 3 seconds
- Concurrent users: 10,000+

### Security
- SSL/TLS encryption
- JWT token authentication
- Password hashing (bcrypt)
- SQL injection prevention
- CORS protection
- Rate limiting

### Scalability
- Horizontal scaling support
- Database replication
- CDN integration
- Cache layer (Redis)
- Message queue support

### Reliability
- 99.9% uptime SLA
- Automated backups
- Disaster recovery plan
- Health monitoring
- Auto-scaling policies

## 📱 Platform Specifications

### Mobile App (Flutter)
- **Min SDK**: Android 8.0, iOS 12.0
- **Target SDK**: Android 14, iOS 17
- **App Size**: < 100MB
- **Languages**: Vietnamese, English, Thai (Phase 1)

### Web Admin (Next.js)
- **Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Responsive**: Mobile, Tablet, Desktop
- **Performance**: Lighthouse score > 90

### Backend (NestJS)
- **Database**: PostgreSQL 15+
- **Cache**: Redis 7+
- **Message Queue**: RabbitMQ (optional)
- **Storage**: AWS S3 or local filesystem

## 🔐 Security Requirements

- End-to-end encryption for sensitive data
- Two-factor authentication for staff
- Audit logging
- GDPR compliance
- Data retention policies
- Secure password policies

## 📈 Analytics & Monitoring

- User engagement metrics
- Rescue success rates
- Response time metrics
- Error tracking
- Custom dashboards
