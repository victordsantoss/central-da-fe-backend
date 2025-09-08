-- Clear all data from all tables
-- ⚠️ WARNING: This will delete ALL data but keep the database structure!

-- Clear tables in reverse dependency order to avoid foreign key constraints
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

-- Reset sequences (if using auto-increment IDs)
-- Note: This project uses CUID, so sequences are not needed

