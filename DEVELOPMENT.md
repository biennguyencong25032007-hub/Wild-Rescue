# Development Setup

## Prerequisites

- Node.js 18+
- Flutter SDK 3.13+
- PostgreSQL 15+
- Docker & Docker Compose (optional)

## Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Run migrations
npm run prisma:migrate

# Seed database (optional)
npm run prisma:seed

# Start development server
npm run start:dev
```

## Mobile App Setup

```bash
cd mobile

# Get Flutter dependencies
flutter pub get

# Run on emulator
flutter run

# Build APK
flutter build apk --release
```

## Web Admin Setup

```bash
cd web-admin

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## Docker Setup

```bash
# Using Docker Compose
docker-compose up -d

# Check logs
docker-compose logs -f backend

# Stop services
docker-compose down
```

## Testing

```bash
# Backend
cd backend && npm run test

# Mobile
cd mobile && flutter test

# Web Admin
cd web-admin && npm run test
```

## Linting & Formatting

```bash
# Backend
cd backend && npm run lint

# Web Admin
cd web-admin && npm run lint

# Format code
npm run format
```

## Troubleshooting

### Database Connection Issues
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Run migrations: `npm run prisma:migrate`

### Flutter Issues
- Run `flutter clean`
- Run `flutter pub get`
- Check Flutter version: `flutter --version`

### Port Already in Use
- Backend: Change PORT in .env
- Web Admin: Change port in package.json

## Additional Resources

- [Backend Documentation](./docs/api-documentation.md)
- [Database Design](./docs/database-design.md)
- [Deployment Guide](./docs/deployment-guide.md)
