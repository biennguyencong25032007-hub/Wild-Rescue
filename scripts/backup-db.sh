#!/bin/bash
# Backup Database Script

set -e

BACKUP_DIR="./backups"
DB_NAME="wild_rescue"
DB_USER="postgres"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_backup_${TIMESTAMP}.sql"

# Create backup directory if not exists
mkdir -p $BACKUP_DIR

echo "Starting database backup..."

# Backup PostgreSQL database
pg_dump -U $DB_USER $DB_NAME > $BACKUP_FILE

echo "Backup completed: $BACKUP_FILE"

# Keep only last 7 backups
find $BACKUP_DIR -name "${DB_NAME}_backup_*.sql" -mtime +7 -delete

echo "Old backups cleaned up"
