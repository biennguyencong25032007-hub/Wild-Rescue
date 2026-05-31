#!/bin/bash
# Cleanup Script - Remove temporary files and containers

set -e

echo "Starting cleanup..."

# Remove Docker containers
echo "Stopping and removing Docker containers..."
docker-compose down

# Remove temporary files
echo "Removing temporary files..."
rm -rf ./backend/dist
rm -rf ./backend/node_modules/.cache
rm -rf ./frontend/mobile-app/.dart_tool
rm -rf ./frontend/mobile-app/build
rm -rf ./frontend/website/.next
rm -rf ./admin-dashboard/.next

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Remove log files
echo "Removing log files..."
rm -rf ./logs/*

echo "Cleanup completed!"
