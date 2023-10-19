USE `CES.API.Database`;

ALTER TABLE organizations ADD COLUMN Import_Id      INT NULL;
ALTER TABLE locations ADD COLUMN Import_Id      INT NULL;
ALTER TABLE services ADD COLUMN Import_Id      INT NULL;
ALTER TABLE points_of_care ADD COLUMN Import_Id      INT NULL;
ALTER TABLE documents ADD COLUMN Import_Id      INT NULL;
