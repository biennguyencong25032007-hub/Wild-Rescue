# Wild Rescue - Deployment Guide

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] All tests passing
- [ ] Code review completed
- [ ] Security scan passed
- [ ] Database migrations tested
- [ ] Environment variables configured
- [ ] SSL certificates obtained
- [ ] Backup strategy in place

## 🐳 Docker Deployment

### Build Images

```bash
# Backend
docker build -t wild-rescue-backend:1.0.0 ./backend

# Web Admin
docker build -t wild-rescue-web-admin:1.0.0 ./web-admin

# Tag for registry
docker tag wild-rescue-backend:1.0.0 your-registry/wild-rescue-backend:1.0.0
docker tag wild-rescue-web-admin:1.0.0 your-registry/wild-rescue-web-admin:1.0.0
```

### Push to Registry

```bash
docker push your-registry/wild-rescue-backend:1.0.0
docker push your-registry/wild-rescue-web-admin:1.0.0
```

### Run with Docker Compose

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## ☁️ AWS Deployment

### ECS Deployment

1. Create ECR repositories
2. Push images to ECR
3. Create ECS task definitions
4. Deploy services
5. Configure load balancer
6. Set up auto-scaling

### RDS Setup

```bash
# Create RDS instance
aws rds create-db-instance \
  --db-instance-identifier wild-rescue-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --allocated-storage 20 \
  --master-username admin \
  --master-user-password <password>
```

### ElastiCache for Redis

```bash
aws elasticache create-cache-cluster \
  --cache-cluster-id wild-rescue-cache \
  --engine redis \
  --cache-node-type cache.t3.micro \
  --num-cache-nodes 1
```

## 🔧 Nginx Configuration

```nginx
upstream backend {
    server backend:3000;
}

upstream web-admin {
    server web-admin:3000;
}

server {
    listen 80;
    server_name api.wildrescue.app;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

server {
    listen 80;
    server_name admin.wildrescue.app;
    
    location / {
        proxy_pass http://web-admin;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔒 SSL/TLS Setup

```bash
# Using Let's Encrypt with Certbot
certbot certonly --webroot \
  -w /var/www/html \
  -d api.wildrescue.app \
  -d admin.wildrescue.app
```

## 📊 Monitoring Setup

### Prometheus Metrics

Add to docker-compose.yml:
```yaml
prometheus:
  image: prom/prometheus:latest
  volumes:
    - ./deployment/prometheus.yml:/etc/prometheus/prometheus.yml
  ports:
    - "9090:9090"
```

### Grafana Dashboards

```yaml
grafana:
  image: grafana/grafana:latest
  ports:
    - "3000:3000"
  environment:
    - GF_SECURITY_ADMIN_PASSWORD=admin
```

## 🔄 CI/CD Pipeline

### GitHub Actions

See `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build and Push Docker Images
        run: ./scripts/deploy.sh
      - name: Deploy to AWS
        run: ./scripts/aws-deploy.sh
```

## 📱 Mobile App Distribution

### Android

1. Build signed APK
2. Upload to Google Play Console
3. Configure rollout percentage
4. Monitor crashes and ratings

### iOS

1. Build and archive
2. Upload to App Store Connect
3. Set up beta testing (TestFlight)
4. Submit for review

## 🛠️ Post-Deployment

- [ ] Verify all services running
- [ ] Run smoke tests
- [ ] Check monitoring dashboards
- [ ] Enable logging aggregation
- [ ] Set up alerting rules
- [ ] Document deployment
- [ ] Plan rollback procedure

## 🔄 Rollback Procedure

```bash
# Rollback to previous version
docker-compose down
git checkout previous-tag
docker-compose up -d
```

## 📈 Scaling Guidelines

- **Horizontal**: Add more container replicas
- **Vertical**: Increase resource allocation
- **Database**: Enable read replicas, implement connection pooling
- **Cache**: Increase Redis memory, add cache nodes
