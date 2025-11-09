-- Create the payrolldb database
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'payrolldb')
BEGIN
    CREATE DATABASE payrolldb;
    PRINT 'Database payrolldb created successfully';
END
ELSE
BEGIN
    PRINT 'Database payrolldb already exists';
END
GO

-- Switch to the payrolldb database
USE payrolldb;
GO

-- Create the Employee table
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Employee' AND xtype='U')
BEGIN
    CREATE TABLE Employee (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        role NVARCHAR(255) NOT NULL
    );
    PRINT 'Employee table created successfully';
END
ELSE
BEGIN
    PRINT 'Employee table already exists';
END
GO

-- Insert sample data
IF NOT EXISTS (SELECT 1 FROM Employee WHERE name = 'Bilbo Baggins')
BEGIN
    INSERT INTO Employee (name, role) VALUES ('Bilbo Baggins', 'burglar');
    PRINT 'Sample employee Bilbo Baggins inserted';
END
ELSE
BEGIN
    PRINT 'Bilbo Baggins already exists in Employee table';
END
GO

IF NOT EXISTS (SELECT 1 FROM Employee WHERE name = 'Frodo Baggins')
BEGIN
    INSERT INTO Employee (name, role) VALUES ('Frodo Baggins', 'thief');
    PRINT 'Sample employee Frodo Baggins inserted';
END
ELSE
BEGIN
    PRINT 'Frodo Baggins already exists in Employee table';
END
GO

-- Verify the setup
SELECT 'Database setup completed. Employee records:' as Status;
SELECT * FROM Employee;
GO