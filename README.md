# Wild Rescue - Animal Rescue Application

Wild Rescue is a comprehensive platform that connects people who encounter animals in need of help with veterinary hospitals and pet shops for treatment and support.

## 🎯 Features

- **Report Wildlife**: Users can report injured or distressed animals
- **Map Integration**: Real-time map showing reported animal locations
- **Hospital Directory**: Find nearby veterinary hospitals
- **Volunteer Network**: Coordinate with volunteers for animal rescue
- **Notifications**: Real-time updates on rescue operations
- **Admin Dashboard**: Manage reports, hospitals, and volunteers
- **AI-Powered**: Animal detection and classification using computer vision

## 📱 Platforms

- **Mobile App**: Flutter (iOS & Android)
- **Web Admin**: Next.js
- **Backend API**: NestJS + PostgreSQL

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Flutter SDK
- PostgreSQL 15+
- Docker (optional)

### Setup

1. **Clone Repository**
```bash
git clone https://github.com/yourusername/wild-rescue.git
cd wild-rescue
```

2. **Backend Setup**
```bash
cd backend
npm install
npm run prisma:migrate
npm run start:dev
```

3. **Mobile Setup**
```bash
cd mobile
flutter pub get
flutter run
```

4. **Web Admin Setup**
```bash
cd web-admin
npm install
npm run dev
```

### Using Docker

```bash
docker-compose up -d
```

## 📁 Project Structure

```
wildrescue/
├── backend/        - NestJS API server
├── mobile/         - Flutter mobile app
├── web-admin/      - Next.js admin dashboard
├── database/       - Database schema and migrations
├── ai/             - AI/ML models for animal detection
├── docs/           - Documentation
└── deployment/     - Deployment configurations
```

## 🔧 Development

### Environment Variables
Copy `.env.example` to `.env` and update with your configuration.

### Database Migrations
```bash
cd backend
npm run prisma:migrate
```

### Running Tests
```bash
# Backend
cd backend && npm run test

# Mobile
cd mobile && flutter test

# Web Admin
cd web-admin && npm run test
```

## 📚 Documentation

- [Business Plan](./docs/business-plan.md)
- [Requirements](./docs/requirements.md)
- [API Documentation](./docs/api-documentation.md)
- [Database Design](./docs/database-design.md)
- [Deployment Guide](./docs/deployment-guide.md)
- [App Store Checklist](./docs/appstore-checklist.md)

## 🤝 Contributing

We welcome contributions! Please read our CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@wildrescue.app or open an issue on GitHub.

## 🙏 Acknowledgments

- Contributors and volunteers
- Partner organizations and veterinary hospitals
- Open source community

---

**Last Updated**: June 2026
