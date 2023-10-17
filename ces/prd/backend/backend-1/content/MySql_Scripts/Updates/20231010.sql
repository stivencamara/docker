USE `CES.API.Database`;

ALTER TABLE organization_related ADD COLUMN FK_Organization_Related_Id      INT NOT NULL;
ALTER TABLE organization_related ADD COLUMN FK_Organization_Related_Version INT NOT NULL;
ALTER TABLE organization_related
    ADD CONSTRAINT FK_Organization_Related_Organizations_Related FOREIGN KEY (FK_Organization_Related_Id, FK_Organization_Related_Version) 
    REFERENCES organizations (PK_Organization_Id, PK_Organization_Version);
