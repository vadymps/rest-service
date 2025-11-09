# SQL Server Database Setup

This folder contains the Docker Compose configuration for SQL Server 2019 with automatic database provisioning.

## Files

- `docker-compose.yml` - Docker Compose configuration for SQL Server 2019
- `provision.sql` - SQL script that creates the database, table, and sample data

## Usage

1. **Start the database:**
   ```bash
   cd database
   docker-compose up -d
   ```

2. **Check logs:**
   ```bash
   docker-compose logs -f mssql
   ```

3. **Connect to the database:**
   ```bash
   docker-compose exec mssql /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P 'YourStrong@Password123' -C
   ```

4. **Stop the database:**
   ```bash
   docker-compose down
   ```

5. **Remove data volume (reset database):**
   ```bash
   docker-compose down -v
   ```

## What gets created

- Database: `payrolldb`
- Table: `Employee` with columns:
  - `id` (BIGINT IDENTITY PRIMARY KEY)
  - `name` (NVARCHAR(255))
  - `role` (NVARCHAR(255))
- Sample records:
  - Bilbo Baggins, burglar
  - Frodo Baggins, thief

## Connection Details

- **Host:** localhost
- **Port:** 1433
- **Username:** sa
- **Password:** YourStrong@Password123
- **Database:** payrolldb

## Spring Boot Configuration

Update your `application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:sqlserver://localhost:1433;databaseName=payrolldb;encrypt=true;trustServerCertificate=true
    username: sa
    password: YourStrong@Password123
    driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
  
  jpa:
    hibernate:
      ddl-auto: validate  # Use validate since table is pre-created
```

**Note:** Since the table is created by the provision script, you can set `ddl-auto: validate` instead of `update` to ensure Hibernate validates the existing schema rather than trying to create/modify it.