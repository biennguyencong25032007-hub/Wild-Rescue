#!/bin/bash
# Deployment Script

set -e

ENVIRONMENT=${1:-development}
VERSION=${2:-latest}

echo "Deploying Wild Rescue to $ENVIRONMENT environment..."

# Build Docker images
echo "Building Docker images..."
docker-compose build

if [ "$ENVIRONMENT" = "production" ]; then
  echo "Starting production deployment..."
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
  
  # Run database migrations
  echo "Running database migrations..."
  docker-compose exec backend npm run prisma:migrate
  
  echo "Production deployment completed!"
else
  echo "Starting development environment..."
  docker-compose up -d
  
  echo "Development environment started!"
fi

echo "Deployment completed successfully!"
