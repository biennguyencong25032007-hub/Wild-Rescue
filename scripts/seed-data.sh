#!/bin/bash
# Seed Database with Initial Data

set -e

echo "Seeding database with initial data..."

# Check if .env file exists
if [ ! -f .env ]; then
  echo "Error: .env file not found"
  exit 1
fi

# Run seed script
cd backend
npm run prisma:seed

echo "Database seeding completed!"
