<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Develop env

```bash
# Add in migratio.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Database Commands

### 🚀 Adding New Columns or Tables (Recommended Process)

When you need to add new columns or tables to the database, follow this step-by-step process:

#### 1. **Modify the schema.prisma file**
```prisma
model Event {
  // ... existing fields
  novaColuna String? @db.VarChar(255) // New column (prefer optional)
  isPublic   Boolean  @default(true)   // New column with default value
}
```

#### 2. **Generate and apply migration (Development)**
```bash
# Create migration and apply it automatically
$ npx prisma migrate dev --name add-nova-coluna --schema=src/database/schema.prisma
```

#### 3. **Verify migration status**
```bash
# Check if database is in sync
$ npx prisma migrate status --schema=src/database/schema.prisma
```

#### 4. **Deploy to production**
```bash
# Apply migrations to production (without data loss)
$ npx prisma migrate deploy --schema=src/database/schema.prisma
```

### 📋 Migration Commands Reference

| Command | Environment | Purpose | Data Loss |
|---------|-------------|---------|-----------|
| `migrate dev` | Development | Create + Apply + Generate Client | ❌ No |
| `migrate deploy` | Production | Apply existing migrations | ❌ No |
| `migrate reset` | Development | ⚠️ **DROPS** database and recreates | ✅ **YES** |

### 🔧 Basic Prisma Commands

```bash
# Generate Prisma Client
$ npm run generate

# Create a new migration (development only)
$ npm run prisma:migrate

# Deploy migrations to production
$ npm run prisma:deploy

# Pull database schema
$ npm run db:pull
```

### 🌱 Database Seeding

```bash
# Seed all initial data
$ npm run seed:all

# Seed roles only
$ npm run seed:roles
```

### 🗑️ Clearing Database Data

#### Option 1: Complete Database Reset (Development Only)
**⚠️ WARNING: This will delete ALL data and recreate the database!**

```bash
# Reset database and apply migrations (DEVELOPMENT ONLY)
$ npx prisma migrate reset --schema=src/database/schema.prisma --force

# Then seed initial data
$ npm run seed:all
```

#### Option 2: Clear All Data (Keep Structure)
**⚠️ WARNING: This will delete ALL data but keep the database structure!**

```bash
# Clear all data from all tables
$ npx prisma db execute --file clear-database.sql --schema=src/database/schema.prisma
```

Create a `clear-database.sql` file with:
```sql
-- Clear all data from all tables
TRUNCATE TABLE "Order" CASCADE;
TRUNCATE TABLE "Ticket" CASCADE;
TRUNCATE TABLE "Event" CASCADE;
TRUNCATE TABLE "UserPosition" CASCADE;
TRUNCATE TABLE "UserAddress" CASCADE;
TRUNCATE TABLE "UserPhone" CASCADE;
TRUNCATE TABLE "User" CASCADE;
TRUNCATE TABLE "Session" CASCADE;
TRUNCATE TABLE "ChurchAddress" CASCADE;
TRUNCATE TABLE "ChurchPhone" CASCADE;
TRUNCATE TABLE "Church" CASCADE;
TRUNCATE TABLE "Address" CASCADE;
TRUNCATE TABLE "Phone" CASCADE;
TRUNCATE TABLE "Position" CASCADE;
TRUNCATE TABLE "Role" CASCADE;
```

#### Option 3: Clear Specific Table Data
```bash
# Clear specific table (example: clear all events)
$ npx prisma db execute --stdin --schema=src/database/schema.prisma
# Then type: DELETE FROM "Event";
```

#### Option 4: Using Prisma Studio (Interactive)
```bash
# Open Prisma Studio to manually delete data
$ npx prisma studio --schema=src/database/schema.prisma
```

### 💡 Best Practices

- **Always use `migrate dev`** for adding new features
- **Never use `migrate reset`** in production
- **Prefer optional columns** (`String?`) for safer migrations
- **Use default values** for required columns (`@default()`)
- **Test migrations** in development before production
- **Backup production data** before major changes

### 🔄 Updating Database with New Connection String

When you change the database connection string:

```bash
# 1. Generate updated Prisma Client
$ npm run generate

# 2. Reset database and apply migrations (⚠️ WARNING: This will delete all data)
$ npx prisma migrate reset --schema=src/database/schema.prisma --force

# 3. Seed initial data
$ npm run seed:all

# 4. Pull and sync schema (optional)
$ npx prisma db pull --schema=src/database/schema.prisma

# 5. Generate final Prisma Client
$ npm run generate
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
