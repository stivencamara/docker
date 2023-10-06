-- CREATE DB

-- CREATE DATABASE IF NOT EXISTS `CES.API.Database`;
-- CREATE DATABASE IF NOT EXISTS `CES.API.Log`;

USE `CES.API.Database`;

-- CREATE USER IF NOT EXISTS 'CESUser'@'%' IDENTIFIED BY 'P@ssw0rd';
-- GRANT ALL PRIVILEGES ON `CES.API.Database`.* TO 'CESUser'@'%';
-- GRANT ALL PRIVILEGES ON `CES.API.Log`.* TO 'CESUser'@'%';

-- CREATE TABLES

CREATE TABLE Legislations (
    PK_Legislation_Id         INT            AUTO_INCREMENT NOT NULL,
    Code                      NVARCHAR (64)  NOT NULL,
    Name                      NVARCHAR (255) NOT NULL,
    Url                       NVARCHAR (128) NULL,
    FK_Document_Attachment_Id INT            NULL,
    Created                   DATETIME       NOT NULL,
    Created_By                NVARCHAR (128) NOT NULL,
    Updated                   DATETIME       NULL,
    Updated_By                NVARCHAR (128) NULL,
    Active                    BIT            NOT NULL,
    Deleted                   BIT            NOT NULL,
    CONSTRAINT PK_Legislations PRIMARY KEY CLUSTERED (PK_Legislation_Id ASC)
);


CREATE TABLE Holidays (
    PK_Holiday_Id INT             AUTO_INCREMENT NOT NULL,
    Holiday       DATETIME        NULL,
    Holiday_Text  NVARCHAR (1024) NULL,
    Created       DATETIME        NOT NULL,
    Created_By    NVARCHAR (128)  NOT NULL,
    Updated       DATETIME        NULL,
    Updated_By    NVARCHAR (128)  NULL,
    Active        BIT             NOT NULL,
    Deleted       BIT             NOT NULL,
    CONSTRAINT PK_Holidays PRIMARY KEY CLUSTERED (PK_Holiday_Id ASC)
);

CREATE TABLE Economic_Activities (
    PK_Economic_Activity_Id INT            AUTO_INCREMENT NOT NULL,
    CAE_Section             NVARCHAR (2)   NOT NULL,
    CAE_Division            INT            NULL,
    CAE_Group               INT            NULL,
    CAE_Class               INT            NULL,
    CAE_Subclass            INT            NULL,
    CAE_Designation         NVARCHAR (512) NOT NULL,
    Created                 DATETIME       NOT NULL,
    Created_By              NVARCHAR (128) NOT NULL,
    Updated                 DATETIME       NULL,
    Updated_By              NVARCHAR (128) NULL,
    Active                  BIT            NOT NULL,
    Deleted                 BIT            NOT NULL,
    CONSTRAINT PK_Economic_Activities PRIMARY KEY CLUSTERED (PK_Economic_Activity_Id ASC)
);

CREATE TABLE Documents (
    PK_Document_Id                 INT            NOT NULL,
    PK_Document_Version            INT            NOT NULL,
    Code                           NVARCHAR (64)  NOT NULL,
    Name                           NVARCHAR (128) NULL,
    Fk_Document_Parent_Id          INT            NULL,
    Fk_Document_Parent_Version     INT            NULL,
    Fk_Organization_Parent_Id      INT            NULL,
    Fk_Organization_Parent_Version INT            NULL,
    Fk_Service_Parent_Id           INT            NULL,
    Fk_Service_Parent_Version      INT            NULL,
    FK_Document_Type_Id            INT            NULL,
    FK_Legislation_Id              INT            NULL,
    FK_Attachment_Id               INT            NULL,
    Start_Date                     DATE           NULL,
    End_Date                       DATE           NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    Document_Active                BIT            NOT NULL,
    Created                        DATETIME       NOT NULL,
    Created_By                     NVARCHAR (128) NOT NULL,
    Updated                        DATETIME       NULL,
    Updated_By                     NVARCHAR (128) NULL,
    Approved                       DATETIME       NULL,
    FK_Approved_By                 INT            NULL,
    Approved_Version               INT            NULL,
    Active                         BIT            NOT NULL,
    Deleted                        BIT            NOT NULL,
    In_History                     BIT            NOT NULL,
    Generic_1                      MEDIUMTEXT NULL,
    Generic_2                      MEDIUMTEXT NULL,
    Generic_3                      MEDIUMTEXT NULL,
    CONSTRAINT PK_Documents PRIMARY KEY CLUSTERED (PK_Document_Id ASC, PK_Document_Version ASC)
);

CREATE TABLE Document_Types (
    PK_Document_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                NVARCHAR (255) NOT NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Document_Types PRIMARY KEY CLUSTERED (PK_Document_Type_Id ASC)
);

CREATE TABLE Document_Texts (
    PK_Document_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Document_Id      INT            NOT NULL,
    FK_Document_Version INT            NOT NULL,
    Language            NVARCHAR (2)   NOT NULL,
    Name                NVARCHAR (128) NULL,
    Description         MEDIUMTEXT NULL,
    Abreviation         NVARCHAR (16)  NULL,
    Legislation         MEDIUMTEXT NULL,
    Keywords            MEDIUMTEXT NULL,
    Version_Comments    MEDIUMTEXT NULL,
    CONSTRAINT PK_Document_Texts PRIMARY KEY CLUSTERED (PK_Document_Text_Id ASC)
);

CREATE TABLE Document_External_Systems (
    FK_Document_Id          INT            NOT NULL,
    FK_Document_Version     INT            NOT NULL,
    PK_Document_External_Id INT            NOT NULL,
    External_System_Name    NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Document_External_Systems PRIMARY KEY CLUSTERED (FK_Document_Id ASC, FK_Document_Version ASC, PK_Document_External_Id ASC)
);

CREATE TABLE Divisions (
    PK_Division_Id      INT            AUTO_INCREMENT NOT NULL,
    Name                NVARCHAR (128) NOT NULL,
    Description         MEDIUMTEXT NULL,
    FK_Division_Type_Id INT            NOT NULL,
    FK_Division_Id      INT            NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Divisions PRIMARY KEY CLUSTERED (PK_Division_Id ASC)
);

CREATE TABLE Division_Types (
    PK_Division_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                NVARCHAR (255) NOT NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Division_Types PRIMARY KEY CLUSTERED (PK_Division_Type_Id ASC)
);

CREATE TABLE Days (
    PK_Day_Id   INT            AUTO_INCREMENT NOT NULL,
    Name        NVARCHAR (128) NOT NULL,
    Description MEDIUMTEXT NULL,
    Created     DATETIME       NOT NULL,
    Created_By  NVARCHAR (128) NOT NULL,
    Updated     DATETIME       NULL,
    Updated_By  NVARCHAR (128) NULL,
    Active      BIT            NOT NULL,
    Deleted     BIT            NOT NULL,
    CONSTRAINT PK_Days PRIMARY KEY CLUSTERED (PK_Day_Id ASC)
);

CREATE TABLE Costs (
    PK_Cost_Id       INT            AUTO_INCREMENT NOT NULL,
    Name             NVARCHAR (128) NOT NULL,
    Description      MEDIUMTEXT NULL,
    Tax              INT            NOT NULL,
    `Condition`        NVARCHAR (128) NOT NULL,
    Formula          NVARCHAR (128) NOT NULL,
    FK_Round_Type_Id INT            NOT NULL,
    Round_Decimal    TINYINT        NOT NULL,
    Created          DATETIME       NOT NULL,
    Created_By       NVARCHAR (128) NOT NULL,
    Updated          DATETIME       NULL,
    Updated_By       NVARCHAR (128) NULL,
    Active           BIT            NOT NULL,
    Deleted          BIT            NOT NULL,
    CONSTRAINT PK_Costs PRIMARY KEY CLUSTERED (PK_Cost_Id ASC)
);

CREATE TABLE Contacts (
    PK_Contact_Id            INT            AUTO_INCREMENT NOT NULL,
    FK_Contact_Scope_Id      INT            NOT NULL,
    FK_Contact_Type_Id       INT            NOT NULL,
    Contact_Value            NVARCHAR (255) NOT NULL,
    FK_Organization_Id       INT            NULL,
    FK_Organization_Version  INT            NULL,
    FK_Point_Of_Care_Id      INT            NULL,
    FK_Point_Of_Care_Version INT            NULL,
    Created                  DATETIME       NOT NULL,
    Created_By               NVARCHAR (128) NOT NULL,
    Updated                  DATETIME       NULL,
    Updated_By               NVARCHAR (128) NULL,
    Active                   BIT            NOT NULL,
    Deleted                  BIT            NOT NULL,
    CONSTRAINT PK_Contacts PRIMARY KEY CLUSTERED (PK_Contact_Id ASC)
);

CREATE TABLE Contact_Types (
    PK_Contact_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name               NVARCHAR (255) NOT NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Contact_Types PRIMARY KEY CLUSTERED (PK_Contact_Type_Id ASC)
);

CREATE TABLE Contact_Scopes (
    PK_Contact_Scope_Id INT            AUTO_INCREMENT NOT NULL,
    Name                NVARCHAR (255) NOT NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Contact_Scopes PRIMARY KEY CLUSTERED (PK_Contact_Scope_Id ASC)
);

CREATE TABLE Channels_Schedules_Days (
    FK_Channel_Id  INT            NOT NULL,
    FK_Schedule_Id INT            NOT NULL,
    FK_Day_Id      INT            NOT NULL,
    Observations   MEDIUMTEXT NULL,
    CONSTRAINT PK_Channels_Schedules_Days PRIMARY KEY CLUSTERED (FK_Channel_Id ASC, FK_Schedule_Id ASC, FK_Day_Id ASC)
);

CREATE TABLE Channels (
    PK_Channel_Id      INT            AUTO_INCREMENT NOT NULL,
    FK_Channel_Type_Id INT            NULL,
    FK_Address_Id      INT            NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Channels PRIMARY KEY CLUSTERED (PK_Channel_Id ASC)
);

CREATE TABLE Channel_Types (
    PK_Channel_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name               NVARCHAR (255) NOT NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Channel_Types PRIMARY KEY CLUSTERED (PK_Channel_Type_Id ASC)
);

CREATE TABLE Business_Events (
    PK_Business_Event_Id   INT             AUTO_INCREMENT NOT NULL,
    Business_Event_Level_1 NVARCHAR (1024) NOT NULL,
    Created                DATETIME        NOT NULL,
    Created_By             NVARCHAR (128)  NOT NULL,
    Updated                DATETIME        NULL,
    Updated_By             NVARCHAR (128)  NULL,
    Active                 BIT             NOT NULL,
    Deleted                BIT             NOT NULL,
    CONSTRAINT PK_Business_Events PRIMARY KEY CLUSTERED (PK_Business_Event_Id ASC)
);

CREATE TABLE Attachments (
    PK_Attachment_Id INT             AUTO_INCREMENT NOT NULL,
    Name             NVARCHAR (128)  NOT NULL,
    Description      MEDIUMTEXT  NULL,
    Mime             NVARCHAR (128)  NOT NULL,
    Size             INT             NOT NULL,
    Data             MEDIUMBLOB NOT NULL,
    Created          DATETIME        NOT NULL,
    Created_By       NVARCHAR (128)  NOT NULL,
    Updated          DATETIME        NULL,
    Updated_By       NVARCHAR (128)  NULL,
    Active           BIT             NOT NULL,
    Deleted          BIT             NOT NULL,
    CONSTRAINT PK_Attachments PRIMARY KEY CLUSTERED (PK_Attachment_Id ASC)
);

CREATE TABLE Users (
    PK_User_Id          INT            AUTO_INCREMENT NOT NULL,
    Username            NVARCHAR (128) NOT NULL UNIQUE,
    Email               NVARCHAR (128) NOT NULL UNIQUE,
    Name                NVARCHAR (128) NOT NULL,
    Display_Name        NVARCHAR (128) NULL,
    Password            NVARCHAR (255)  NULL,
    Is_GRA_User         BIT            NOT NULL,
    Wrong_Tries         INT            NOT NULL,
    Blocked             BIT            NOT NULL,
    Language            NVARCHAR (2)   NOT NULL,
    Notification_System BIT            NOT NULL,
    Notification_Email  BIT            NOT NULL,
    Last_Login          DATETIME       NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Users PRIMARY KEY CLUSTERED (PK_User_Id ASC)
);

CREATE TABLE Addresses (
    PK_Address_Id       INT            AUTO_INCREMENT NOT NULL,
    FK_Location_Id      INT            NULL,
    FK_Location_Version INT            NULL,
    FK_Division_Id      INT            NULL,
    Zip_Code            NVARCHAR (8)   NULL,
    FK_Island_Id        INT            NULL,
    FK_County_Id        INT            NULL,
    FK_Parish_Id        INT            NULL,
    Locality            NVARCHAR (128) NULL,
    Address             NVARCHAR (255) NULL,
    Latitude            NVARCHAR (64)  NULL,
    Longitude           NVARCHAR (64)  NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Addresses PRIMARY KEY CLUSTERED (PK_Address_Id ASC)
);

CREATE TABLE Recipient_Types (
    PK_Recipient_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                 NVARCHAR (255) NULL,
    Created              DATETIME       NOT NULL,
    Created_By           NVARCHAR (128) NOT NULL,
    Updated              DATETIME       NULL,
    Updated_By           NVARCHAR (128) NULL,
    Active               BIT            NOT NULL,
    Deleted              BIT            NOT NULL,
    CONSTRAINT PK_Recipient_Types PRIMARY KEY CLUSTERED (PK_Recipient_Type_Id ASC)
);

CREATE TABLE Profiles_Permissions (
    FK_Profile_Id    INT            NOT NULL,
    FK_Permission_Id INT            NOT NULL,
    Observations     MEDIUMTEXT NULL,
    Created          DATETIME       NOT NULL,
    Created_By       NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Profiles_Permissions PRIMARY KEY CLUSTERED (FK_Profile_Id ASC, FK_Permission_Id ASC)
);

CREATE TABLE Profiles (
    PK_Profile_Id INT            AUTO_INCREMENT NOT NULL,
    Name          NVARCHAR (128) NOT NULL,
    Description   MEDIUMTEXT NULL,
    Created       DATETIME       NOT NULL,
    Created_By    NVARCHAR (128) NOT NULL,
    Updated       DATETIME       NULL,
    Updated_By    NVARCHAR (128) NULL,
    Active        BIT            NOT NULL,
    Deleted       BIT            NOT NULL,
    CONSTRAINT PK_Profiles PRIMARY KEY CLUSTERED (PK_Profile_Id ASC)
);

CREATE TABLE Points_Of_Care (
    PK_Point_Of_Care_Id            INT            NOT NULL,
    PK_Point_Of_Care_Version       INT            NOT NULL,
    Code                           NVARCHAR (64)  NOT NULL,
    Name                           NVARCHAR (255) NULL,
    Fk_Organization_Parent_Id      INT            NULL,
    Fk_Organization_Parent_Version INT            NULL,
    FK_Channel_Id                  INT            NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Address_Id                  INT            NULL,
    Start_Date                     DATE           NULL,
    End_Date                       DATE           NULL,
    Point_Of_Care_Active           BIT            NOT NULL,
    Created                        DATETIME       NOT NULL,
    Created_By                     NVARCHAR (128) NOT NULL,
    Updated                        DATETIME       NULL,
    Updated_By                     NVARCHAR (128) NULL,
    Approved                       DATETIME       NULL,
    FK_Approved_By                 INT            NULL,
    Approved_Version               INT            NULL,
    Active                         BIT            NOT NULL,
    Deleted                        BIT            NOT NULL,
    In_History                     BIT            NOT NULL,
    Generic_1                      MEDIUMTEXT NULL,
    Generic_2                      MEDIUMTEXT NULL,
    Generic_3                      MEDIUMTEXT NULL,
    CONSTRAINT PK_Points_Of_Care PRIMARY KEY CLUSTERED (PK_Point_Of_Care_Id ASC, PK_Point_Of_Care_Version ASC)
);

CREATE TABLE Point_Of_Care_Texts (
    PK_Point_Of_Care_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Point_Of_Care_Id      INT            NOT NULL,
    FK_Point_Of_Care_Version INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    Abreviation              NVARCHAR (64)  NULL,
    Version_Comments         MEDIUMTEXT NULL,
    Keywords                 MEDIUMTEXT NULL,
    Pre_Conditions           MEDIUMTEXT NULL,
    Opening_Hours            MEDIUMTEXT NULL,
    Attendance_Restrictions  MEDIUMTEXT NULL,
    CONSTRAINT PK_Point_Of_Care_Texts PRIMARY KEY CLUSTERED (PK_Point_Of_Care_Text_Id ASC)
);

CREATE TABLE Point_Of_Care_External_Systems (
    FK_Point_Of_Care_Id          INT            NOT NULL,
    FK_Point_Of_Care_Version     INT            NOT NULL,
    PK_Point_Of_Care_External_Id INT            NOT NULL,
    External_System_Name         NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Point_Of_Care_External_Systems PRIMARY KEY CLUSTERED (FK_Point_Of_Care_Id ASC, FK_Point_Of_Care_Version ASC, PK_Point_Of_Care_External_Id ASC)
);

CREATE TABLE Permissions (
    PK_Permission_Id INT            AUTO_INCREMENT NOT NULL,
    Name             NVARCHAR (128) NOT NULL,
    Description      MEDIUMTEXT NULL,
    Created          DATETIME       NOT NULL,
    Created_By       NVARCHAR (128) NOT NULL,
    Updated          DATETIME       NULL,
    Updated_By       NVARCHAR (128) NULL,
    Active           BIT            NOT NULL,
    Deleted          BIT            NOT NULL,
    CONSTRAINT PK_Permissions PRIMARY KEY CLUSTERED (PK_Permission_Id ASC)
);

CREATE TABLE Parameters (
    PK_Parameter_Id INT            AUTO_INCREMENT NOT NULL,
    Name            NVARCHAR (255) NOT NULL,
    Value           MEDIUMTEXT NULL,
    Unity           TINYINT        NULL,
    `Group`           NVARCHAR (64)  NULL,
    Notes           NVARCHAR (512) NULL,
    Field           NVARCHAR (64)  NULL,
    Created         DATETIME       NOT NULL,
    Created_By      NVARCHAR (128) NOT NULL,
    Updated         DATETIME       NULL,
    Updated_By      NVARCHAR (128) NULL,
    Active          BIT            NOT NULL,
    Deleted         BIT            NOT NULL,
    CONSTRAINT PK_Parameters PRIMARY KEY CLUSTERED (PK_Parameter_Id ASC),
    UNIQUE NONCLUSTERED (Name ASC)
);

CREATE TABLE Organizations (
    PK_Organization_Id             INT            NOT NULL,
    PK_Organization_Version        INT            NOT NULL,
    Code                           NVARCHAR (64)  NOT NULL,
    Name                           NVARCHAR (255) NULL,
    Fk_Organization_Parent_Id      INT            NULL,
    Fk_Organization_Parent_Version INT            NULL,
    NIPC                           NVARCHAR (16)  NULL,
    Start_Date                     DATE           NULL,
    End_Date                       DATE           NULL,
    FK_Organization_Type_Id        INT            NULL,
    FK_Economic_Activity_Id        INT            NULL,
    Group_Name                     INT            NULL,
    FK_Icon_Attachment_Id          INT            NULL,
    FK_Division_Type_Id            INT            NULL,
    FK_Division_Id                 INT            NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Address_Id                  INT            NULL,
    Can_Have_Services              BIT            NULL,
    Can_Have_Points_Of_Care        BIT            NULL,
    National                       BIT            NULL,
    Organization_Active            BIT            NOT NULL,
    Created                        DATETIME       NOT NULL,
    Created_By                     NVARCHAR (128) NOT NULL,
    Updated                        DATETIME       NULL,
    Updated_By                     NVARCHAR (128) NULL,
    Approved                       DATETIME       NULL,
    FK_Approved_By                 INT            NULL,
    Approved_Version               INT            NULL,
    Active                         BIT            NOT NULL,
    Deleted                        BIT            NOT NULL,
    In_History                     BIT            NOT NULL,
    Generic_1                      MEDIUMTEXT NULL,
    Generic_2                      MEDIUMTEXT NULL,
    Generic_3                      MEDIUMTEXT NULL,
    CONSTRAINT PK_Organizations PRIMARY KEY CLUSTERED (PK_Organization_Id ASC, PK_Organization_Version ASC)
);

CREATE TABLE Organization_Types_Children (
    FK_Organization_Type_Id          INT            NOT NULL,
    FK_Organization_Children_Type_Id INT            NOT NULL,
    Observations                     MEDIUMTEXT NULL,
    CONSTRAINT PK_Organization_Types_Children PRIMARY KEY CLUSTERED (FK_Organization_Type_Id ASC, FK_Organization_Children_Type_Id ASC)
);

CREATE TABLE Organization_Types (
    PK_Organization_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                    NVARCHAR (255) NOT NULL,
    Organization_Level      INT            NOT NULL,
    FK_Organization_Type_Id INT            NULL,
    Created                 DATETIME       NOT NULL,
    Created_By              NVARCHAR (128) NOT NULL,
    Updated                 DATETIME       NULL,
    Updated_By              NVARCHAR (128) NULL,
    Active                  BIT            NOT NULL,
    Deleted                 BIT            NOT NULL,
    CONSTRAINT PK_Organization_Types PRIMARY KEY CLUSTERED (PK_Organization_Type_Id ASC)
);

CREATE TABLE Organization_Texts (
    PK_Organization_Text_Id  INT            AUTO_INCREMENT NOT NULL,
    FK_Organization_Id       INT            NOT NULL,
    FK_Organization_Version  INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Abreviation              NVARCHAR (16)  NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    Legislation              NVARCHAR (512) NULL,
    Mission                  NVARCHAR (512) NULL,
    Manager_Role_Description NVARCHAR (512) NULL,
    Keywords                 MEDIUMTEXT NULL,
    Version_Comments         MEDIUMTEXT NULL,
    CONSTRAINT PK_Organization_Texts PRIMARY KEY CLUSTERED (PK_Organization_Text_Id ASC)
);

CREATE TABLE Organization_Related_Types (
    PK_Organization_Related_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                            NVARCHAR (255) NOT NULL,
    Created                         DATETIME       NOT NULL,
    Created_By                      NVARCHAR (128) NOT NULL,
    Updated                         DATETIME       NULL,
    Updated_By                      NVARCHAR (128) NULL,
    Active                          BIT            NOT NULL,
    Deleted                         BIT            NOT NULL,
    CONSTRAINT PK_Organization_Related_Types PRIMARY KEY CLUSTERED (PK_Organization_Related_Type_Id ASC)
);

CREATE TABLE Organization_Related (
    PK_Organization_Related_Id      INT AUTO_INCREMENT NOT NULL,
    FK_Organization_Id              INT NOT NULL,
    FK_Organization_Version         INT NOT NULL,
    FK_Organization_Related_Type_Id INT NOT NULL,
    CONSTRAINT PK_Organization_Related PRIMARY KEY CLUSTERED (PK_Organization_Related_Id ASC)
);

CREATE TABLE Organization_External_System (
    FK_Organization_Id          INT            NOT NULL,
    FK_Organization_Version     INT            NOT NULL,
    PK_Organization_External_Id INT            NOT NULL,
    External_System_Name        NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Organization_External_System PRIMARY KEY CLUSTERED (FK_Organization_Id ASC, FK_Organization_Version ASC, PK_Organization_External_Id ASC)
);

CREATE TABLE Notifications (
    PK_Notification_Id INT             AUTO_INCREMENT NOT NULL,
    Message_Title      NVARCHAR (64)   NOT NULL,
    Message_Body       NVARCHAR (1024) NOT NULL,
    Created            DATETIME        NOT NULL,
    Created_By         NVARCHAR (128)  NOT NULL,
    Updated            DATETIME        NULL,
    Updated_By         NVARCHAR (128)  NULL,
    Active             BIT             NOT NULL,
    Deleted            BIT             NOT NULL,
    CONSTRAINT PK_Notifications PRIMARY KEY CLUSTERED (PK_Notification_Id ASC)
);

CREATE TABLE Notification_Users (
    PK_Notification_User_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Notification_Id      INT            NOT NULL,
    FK_Source_User_Id       INT            NOT NULL,
    FK_Target_User_Id       INT            NOT NULL,
    Notification_Readed     BIT            NOT NULL,
    Notification_System     BIT            NULL,
    Notification_Email      BIT            NULL,
    Created                 DATETIME       NOT NULL,
    Created_By              NVARCHAR (128) NOT NULL,
    Updated                 DATETIME       NULL,
    Updated_By              NVARCHAR (128) NULL,
    Active                  BIT            NOT NULL,
    Deleted                 BIT            NOT NULL,
    CONSTRAINT PK_Notification_Users PRIMARY KEY CLUSTERED (PK_Notification_User_Id ASC)
);

CREATE TABLE Locations (
    PK_Location_Id                 INT            NOT NULL,
    PK_Location_Version            INT            NOT NULL,
    Code                           NVARCHAR (64)  NOT NULL,
    Fk_Organization_Parent_Id      INT            NULL,
    Fk_Organization_Parent_Version INT            NULL,
    FK_Division_Id                 INT            NULL,
    FK_Location_Type_Id            INT            NULL,
    Name                           NVARCHAR (128) NULL,
    Start_Date                     DATE           NULL,
    End_Date                       DATE           NULL,
    Zip_Code                       NVARCHAR (8)   NULL,
    FK_Island_Id                   INT            NULL,
    FK_County_Id                   INT            NULL,
    FK_Parish_Id                   INT            NULL,
    Locality                       NVARCHAR (128) NULL,
    Address                        NVARCHAR (255) NULL,
    Latitude                       NVARCHAR (64)  NULL,
    Longitude                      NVARCHAR (64)  NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    Location_Active                BIT            NOT NULL,
    Created                        DATETIME       NOT NULL,
    Created_By                     NVARCHAR (128) NOT NULL,
    Updated                        DATETIME       NULL,
    Updated_By                     NVARCHAR (128) NULL,
    Approved                       DATETIME       NULL,
    FK_Approved_By                 INT            NULL,
    Approved_Version               INT            NULL,
    Active                         BIT            NOT NULL,
    Deleted                        BIT            NOT NULL,
    In_History                     BIT            NOT NULL,
    Generic_1                      MEDIUMTEXT NULL,
    Generic_2                      MEDIUMTEXT NULL,
    Generic_3                      MEDIUMTEXT NULL,
    CONSTRAINT PK_Locations PRIMARY KEY CLUSTERED (PK_Location_Id ASC, PK_Location_Version ASC)
);

CREATE TABLE Location_Types (
    PK_Location_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                NVARCHAR (255) NOT NULL,
    Created             DATETIME       NOT NULL,
    Created_By          NVARCHAR (128) NOT NULL,
    Updated             DATETIME       NULL,
    Updated_By          NVARCHAR (128) NULL,
    Active              BIT            NOT NULL,
    Deleted             BIT            NOT NULL,
    CONSTRAINT PK_Location_Types PRIMARY KEY CLUSTERED (PK_Location_Type_Id ASC)
);

CREATE TABLE Location_Texts (
    PK_Location_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Location_Id      INT            NOT NULL,
    FK_Location_Version INT            NOT NULL,
    Language            NVARCHAR (2)   NOT NULL,
    Name                NVARCHAR (256) NULL,
    Description         MEDIUMTEXT NULL,
    Abreviation         NVARCHAR (64)  NULL,
    Version_Comments    MEDIUMTEXT NULL,
    CONSTRAINT PK_Location_Texts PRIMARY KEY CLUSTERED (PK_Location_Text_Id ASC)
);

CREATE TABLE Location_External_Systems (
    FK_Location_Id          INT            NOT NULL,
    FK_Location_Version     INT            NOT NULL,
    PK_Location_External_Id INT            NOT NULL,
    External_System_Name    NVARCHAR (128) NOT NULL,
    Observations            MEDIUMTEXT NULL,
    CONSTRAINT PK_Location_External_Systems PRIMARY KEY CLUSTERED (FK_Location_Id ASC, FK_Location_Version ASC, PK_Location_External_Id ASC)
);

CREATE TABLE Life_Events (
    PK_Life_Event_Id   INT             AUTO_INCREMENT NOT NULL,
    Life_Event_Level_1 NVARCHAR (1024) NOT NULL,
    Created            DATETIME        NOT NULL,
    Created_By         NVARCHAR (128)  NOT NULL,
    Updated            DATETIME        NULL,
    Updated_By         NVARCHAR (128)  NULL,
    Active             BIT             NOT NULL,
    Deleted            BIT             NOT NULL,
    CONSTRAINT PK_Life_Events PRIMARY KEY CLUSTERED (PK_Life_Event_Id ASC)
);

CREATE TABLE Economic_Activity_Texts (
    PK_Economic_Activity_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Economic_Activities_Id    INT            NOT NULL,
    Language                     NVARCHAR (2)   NOT NULL,
    Designation                  NVARCHAR (512) NULL,
    CONSTRAINT PK_Economic_Activity_Texts PRIMARY KEY CLUSTERED (PK_Economic_Activity_Text_Id ASC)
);

CREATE TABLE Organization_Type_Texts (
    PK_Organization_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Organization_Type_Id      INT            NOT NULL,
    Language                     NVARCHAR (2)   NOT NULL,
    Name                         NVARCHAR (255) NULL,
    Description                  MEDIUMTEXT NULL,
    CONSTRAINT PK_Organization_Type_Texts PRIMARY KEY CLUSTERED (PK_Organization_Type_Text_Id ASC)
);

CREATE TABLE Control_Timer_Jobs (
    PK_Timer_Job_Id NVARCHAR (64) NOT NULL,
    Machine_Name    NVARCHAR (64) NULL,
    Created         DATETIME      NULL,
    CONSTRAINT PK_Control_Timer_Jobs PRIMARY KEY CLUSTERED (PK_Timer_Job_Id ASC)
);

CREATE TABLE Auth_Clients (
    PK_Client_Id  NVARCHAR (36) NOT NULL,
    Client_Secret NVARCHAR (36) NOT NULL,
    Name          NVARCHAR (128)   NOT NULL,
    Description   MEDIUMTEXT   NULL,
    Redirect_Url  NVARCHAR (512)   NULL,
    Active        BIT              NOT NULL,
    CONSTRAINT PK_Auth_Clients PRIMARY KEY CLUSTERED (PK_Client_Id ASC)
);

CREATE TABLE Users_Profiles (
    FK_User_Id      INT            NOT NULL,
    FK_Profile_Id   INT            NOT NULL,
    Organization_Id INT            NOT NULL,
    Observations    MEDIUMTEXT NULL,
    Created         DATETIME       NOT NULL,
    Created_By      NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Users_Profiles PRIMARY KEY CLUSTERED (FK_User_Id ASC, FK_Profile_Id ASC, Organization_Id ASC)
);

CREATE TABLE Services_Points_Of_Care (
    FK_Service_Id                    INT            NOT NULL,
    FK_Service_Version               INT            NOT NULL,
    FK_Point_Of_Care_Id              INT            NOT NULL,
    FK_Point_Of_Care_Version         INT            NOT NULL,
    FK_Record_State_Type_Id          INT            NOT NULL,
    FK_External_Record_State_Type_Id INT            NULL,
    Cost_Id                          INT            NULL,
    Observations                     MEDIUMTEXT NULL,
    Created_Date                     DATETIME       NOT NULL,
    Approved_Date                    DATETIME       NULL,
    External_Approved_Date           DATETIME       NULL,
    Obsoleted_Date                   DATETIME       NULL,
    CONSTRAINT PK_Services_Points_Of_Care PRIMARY KEY CLUSTERED (FK_Service_Id ASC, FK_Service_Version ASC, FK_Point_Of_Care_Id ASC, FK_Point_Of_Care_Version ASC)
);

CREATE TABLE Services (
    PK_Service_Id                  INT            NOT NULL,
    PK_Service_Version             INT            NOT NULL,
    Code                           NVARCHAR (64)  NOT NULL,
    Name                           NVARCHAR (255) NULL,
    Fk_Organization_Parent_Id      INT            NULL,
    Fk_Organization_Parent_Version INT            NULL,
    FK_Diagram_Attachment_Id       INT            NULL,
    FK_Service_Type_Id             INT            NULL,
    FK_Service_Category_Id         INT            NULL,
    FK_Service_Grouping_Id         INT            NULL,
    FK_Life_Event_Id               INT            NULL,
    FK_Business_Event_Id           INT            NULL,
    FK_Economic_Activity_Id        INT            NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    Start_Date                     DATE           NULL,
    End_Date                       DATE           NULL,
    Service_Active                 BIT            NOT NULL,
    Processing_Time_Years          INT            NULL,
    Processing_Time_Months         INT            NULL,
    Processing_Time_Days           INT            NULL,
    Processing_Time_Hours          INT            NULL,
    Processing_Time_Minutes        INT            NULL,
    Processing_Time_Seconds        INT            NULL,
    Processing_Time_Weeks          INT            NULL,
    Cost                           MEDIUMTEXT NULL,
    Created                        DATETIME       NOT NULL,
    Created_By                     NVARCHAR (128) NOT NULL,
    Updated                        DATETIME       NULL,
    Updated_By                     NVARCHAR (128) NULL,
    Approved                       DATETIME       NULL,
    FK_Approved_By                 INT            NULL,
    Approved_Version               INT            NULL,
    Active                         BIT            NOT NULL,
    Deleted                        BIT            NOT NULL,
    In_History                     BIT            NOT NULL,
    Generic_1                      MEDIUMTEXT NULL,
    Generic_2                      MEDIUMTEXT NULL,
    Generic_3                      MEDIUMTEXT NULL,
    Service_Internal               BIT            NULL,
    CONSTRAINT PK_Services PRIMARY KEY CLUSTERED (PK_Service_Id ASC, PK_Service_Version ASC)
);

CREATE TABLE Service_Types (
    PK_Service_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name               NVARCHAR (255) NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Service_Types PRIMARY KEY CLUSTERED (PK_Service_Type_Id ASC)
);

CREATE TABLE Service_Texts (
    PK_Service_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Id      INT            NOT NULL,
    FK_Service_Version INT            NOT NULL,
    Language           NVARCHAR (2)   NOT NULL,
    Name               NVARCHAR (255) NULL,
    Description        MEDIUMTEXT NULL,
    Abreviation        NVARCHAR (16)  NULL,
    Service_Procedure  NVARCHAR (255) NULL,
    Keywords           MEDIUMTEXT NULL,
    Version_Comments   MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Texts PRIMARY KEY CLUSTERED (PK_Service_Text_Id ASC)
);

CREATE TABLE Service_Rules (
    PK_Service_Rule_Id INT            AUTO_INCREMENT NOT NULL,
    Code               NVARCHAR (64)  NOT NULL,
    Name               NVARCHAR (256) NOT NULL,
    FK_Legislation_Id  INT            NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Service_Rules PRIMARY KEY CLUSTERED (PK_Service_Rule_Id ASC)
);

CREATE TABLE Service_Related_Types (
    PK_Service_Related_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                       NVARCHAR (255) NOT NULL,
    Created                    DATETIME       NOT NULL,
    Created_By                 NVARCHAR (128) NOT NULL,
    Updated                    DATETIME       NULL,
    Updated_By                 NVARCHAR (128) NULL,
    Active                     BIT            NOT NULL,
    Deleted                    BIT            NOT NULL,
    CONSTRAINT PK_Service_Related_Types PRIMARY KEY CLUSTERED (PK_Service_Related_Type_Id ASC)
);

CREATE TABLE Service_Related (
    PK_Service_Related_Id      INT AUTO_INCREMENT NOT NULL,
    FK_Service_Id              INT NOT NULL,
    FK_Service_Version         INT NOT NULL,
    FK_Service_Related_Type_Id INT NOT NULL,
    CONSTRAINT PK_Service_Related PRIMARY KEY CLUSTERED (PK_Service_Related_Id ASC)
);

CREATE TABLE Service_External_Systems (
    FK_Service_Id          INT            NOT NULL,
    FK_Service_Version     INT            NOT NULL,
    PK_Service_External_Id INT            NOT NULL,
    External_System_Name   NVARCHAR (128) NOT NULL,
    CONSTRAINT PK_Service_External_System PRIMARY KEY CLUSTERED (FK_Service_Id ASC, FK_Service_Version ASC, PK_Service_External_Id ASC)
);

CREATE TABLE Service_Categories (
    PK_Service_Category_Id        INT            AUTO_INCREMENT NOT NULL,
    Name                          NVARCHAR (255) NULL,
    FK_Service_Category_Parent_Id INT            NULL,
    Created                       DATETIME       NOT NULL,
    Created_By                    NVARCHAR (128) NOT NULL,
    Updated                       DATETIME       NULL,
    Updated_By                    NVARCHAR (128) NULL,
    Active                        BIT            NOT NULL,
    Deleted                       BIT            NOT NULL,
    CONSTRAINT PK_Service_Categories PRIMARY KEY CLUSTERED (PK_Service_Category_Id ASC)
);

CREATE TABLE Schedules (
    PK_Schedule_Id INT            AUTO_INCREMENT NOT NULL,
    Opening        DATETIME       NOT NULL,
    Closing        DATETIME       NOT NULL,
    Description    MEDIUMTEXT NULL,
    Created        DATETIME       NOT NULL,
    Created_By     NVARCHAR (128) NOT NULL,
    Updated        DATETIME       NULL,
    Updated_By     NVARCHAR (128) NULL,
    Active         BIT            NOT NULL,
    Deleted        BIT            NOT NULL,
    CONSTRAINT PK_Schedules PRIMARY KEY CLUSTERED (PK_Schedule_Id ASC)
);

CREATE TABLE Round_Types (
    PK_Round_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name             NVARCHAR (128) NOT NULL,
    Description      MEDIUMTEXT NULL,
    Created          DATETIME       NOT NULL,
    Created_By       NVARCHAR (128) NOT NULL,
    Updated          DATETIME       NULL,
    Updated_By       NVARCHAR (128) NULL,
    Active           BIT            NOT NULL,
    Deleted          BIT            NOT NULL,
    CONSTRAINT PK_Round_Types PRIMARY KEY CLUSTERED (PK_Round_Type_Id ASC)
);

CREATE TABLE Result_Types (
    PK_Result_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name              NVARCHAR (255) NOT NULL,
    Created           DATETIME       NOT NULL,
    Created_By        NVARCHAR (128) NOT NULL,
    Updated           DATETIME       NULL,
    Updated_By        NVARCHAR (128) NULL,
    Active            BIT            NOT NULL,
    Deleted           BIT            NOT NULL,
    CONSTRAINT PK_Result_Types PRIMARY KEY CLUSTERED (PK_Result_Type_Id ASC)
);

CREATE TABLE Requirements (
    PK_Requirement_Id                 INT            AUTO_INCREMENT NOT NULL,
    Code                              NVARCHAR (64)  NOT NULL,
    Name                              NVARCHAR (255) NOT NULL,
    FK_Document_Attachment_Id         INT            NULL,
    FK_Service_Id                     INT            NULL,
    FK_Service_Version                INT            NULL,
    FK_Point_Of_Care_Id               INT            NULL,
    FK_Point_Of_Care_Version          INT            NULL,
    FK_Recipient_Id                   INT            NULL,
    FK_Result_Type_Id                 INT            NULL,
    FK_Document_Related_Attachment_Id INT            NULL,
    Created                           DATETIME       NOT NULL,
    Created_By                        NVARCHAR (128) NOT NULL,
    Updated                           DATETIME       NULL,
    Updated_By                        NVARCHAR (128) NULL,
    Active                            BIT            NOT NULL,
    Deleted                           BIT            NOT NULL,
    CONSTRAINT PK_Requirements PRIMARY KEY CLUSTERED (PK_Requirement_Id ASC)
);

CREATE TABLE Reports (
    PK_Report_Id     INT            AUTO_INCREMENT NOT NULL,
    Name             NVARCHAR (128) NOT NULL,
    Description      MEDIUMTEXT NULL,
    FK_Attachment_Id INT            NOT NULL,
    Created          DATETIME       NOT NULL,
    Created_By       NVARCHAR (128) NOT NULL,
    Updated          DATETIME       NULL,
    Updated_By       NVARCHAR (128) NULL,
    Active           BIT            NOT NULL,
    Deleted          BIT            NOT NULL,
    CONSTRAINT PK_Reports PRIMARY KEY CLUSTERED (PK_Report_Id ASC)
);

CREATE TABLE Refusal_Types (
    PK_Refusal_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name               NVARCHAR (255) NOT NULL,
    Created            DATETIME       NOT NULL,
    Created_By         NVARCHAR (128) NOT NULL,
    Updated            DATETIME       NULL,
    Updated_By         NVARCHAR (128) NULL,
    Active             BIT            NOT NULL,
    Deleted            BIT            NOT NULL,
    CONSTRAINT PK_Refusal_Types PRIMARY KEY CLUSTERED (PK_Refusal_Type_Id ASC)
);

CREATE TABLE Record_State_Types (
    PK_Record_State_Type_Id INT            AUTO_INCREMENT NOT NULL,
    Name                    NVARCHAR (255) NOT NULL,
    Created                 DATETIME       NOT NULL,
    Created_By              NVARCHAR (128) NOT NULL,
    Updated                 DATETIME       NULL,
    Updated_By              NVARCHAR (128) NULL,
    Active                  BIT            NOT NULL,
    Deleted                 BIT            NOT NULL,
    CONSTRAINT PK_Records_States_Types PRIMARY KEY CLUSTERED (PK_Record_State_Type_Id ASC)
);

CREATE TABLE Recipients (
    PK_Recipient_Id      INT            AUTO_INCREMENT NOT NULL,
    Code                 NVARCHAR (64)  NOT NULL,
    Name                 NVARCHAR (255) NULL,
    Description          MEDIUMTEXT NULL,
    FK_Recipient_Type_Id INT            NULL,
    FK_Service_Id        INT            NULL,
    FK_Service_Version   INT            NULL,
    Information_Level    BIT            NULL,
    Created              DATETIME       NOT NULL,
    Created_By           NVARCHAR (128) NOT NULL,
    Updated              DATETIME       NULL,
    Updated_By           NVARCHAR (128) NULL,
    Active               BIT            NOT NULL,
    Deleted              BIT            NOT NULL,
    CONSTRAINT PK_Recipients PRIMARY KEY CLUSTERED (PK_Recipient_Id ASC)
);

CREATE TABLE Services_Legislations (
    FK_Service_Id      INT            NOT NULL,
    FK_Service_Version INT            NOT NULL,
    FK_Legislation_Id  INT            NOT NULL,
    Observations       MEDIUMTEXT NULL,
    CONSTRAINT PK_Services_Legislations PRIMARY KEY CLUSTERED (FK_Service_Id ASC, FK_Service_Version ASC, FK_Legislation_Id ASC)
);

CREATE TABLE Service_Rule_Texts (
    PK_Service_Rule_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Rule_Id      INT            NOT NULL,
    Language                NVARCHAR (2)   NOT NULL,
    Name                    NVARCHAR (255) NULL,
    Description             MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Rule_Texts PRIMARY KEY CLUSTERED (PK_Service_Rule_Text_Id ASC)
);

CREATE TABLE Requirement_Texts (
    PK_Requirement_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Requirement_Id      INT            NOT NULL,
    Language               NVARCHAR (2)   NOT NULL,
    Name                   NVARCHAR (255) NULL,
    Description            MEDIUMTEXT NULL,
    CONSTRAINT PK_Requirement_Texts PRIMARY KEY CLUSTERED (PK_Requirement_Text_Id ASC)
);

CREATE TABLE Legislation_Texts (
    PK_Legislation_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Legislation_Id      INT            NOT NULL,
    Language               NVARCHAR (2)   NOT NULL,
    Name                   NVARCHAR (255) NULL,
    Description            MEDIUMTEXT NULL,
    CONSTRAINT PK_Legislation_Texts PRIMARY KEY CLUSTERED (PK_Legislation_Text_Id ASC)
);

CREATE TABLE Service_External_Requirements (
    PK_External_Requirement_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Id              INT            NOT NULL,
    FK_Service_Version         INT            NOT NULL,
    Name                       NVARCHAR (255) NULL,
    Value                      BIT            NULL,
    CONSTRAINT PK_Service_External_Requirements PRIMARY KEY CLUSTERED (PK_External_Requirement_Id ASC)
);

CREATE TABLE Division_Type_Texts (
    PK_Division_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Division_Type_Id      INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    CONSTRAINT PK_Division_Type_Texts PRIMARY KEY CLUSTERED (PK_Division_Type_Text_Id ASC)
);

CREATE TABLE Record_State_Type_Texts (
    PK_Record_State_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Record_State_Type_Id      INT            NOT NULL,
    Language                     NVARCHAR (2)   NOT NULL,
    Name                         NVARCHAR (255) NULL,
    Description                  MEDIUMTEXT NULL,
    CONSTRAINT PK_Record_State_Type_Texts PRIMARY KEY CLUSTERED (PK_Record_State_Type_Text_Id ASC)
);

CREATE TABLE Recipient_Type_Texts (
    PK_Recipient_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Recipient_Type_Id      INT            NOT NULL,
    Language                  NVARCHAR (2)   NOT NULL,
    Name                      NVARCHAR (255) NULL,
    Description               MEDIUMTEXT NULL,
    CONSTRAINT PK_Recipient_Type_Texts PRIMARY KEY CLUSTERED (PK_Recipient_Type_Text_Id ASC)
);

CREATE TABLE Document_Type_Texts (
    PK_Document_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Document_Type_Id      INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    CONSTRAINT PK_Document_Type_Texts PRIMARY KEY CLUSTERED (PK_Document_Type_Text_Id ASC)
);

CREATE TABLE Service_Related_Type_Texts (
    PK_Service_Related_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Related_Type_Id      INT            NOT NULL,
    Language                        NVARCHAR (2)   NOT NULL,
    Name                            NVARCHAR (255) NULL,
    Description                     MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Related_Type_Texts PRIMARY KEY CLUSTERED (PK_Service_Related_Type_Text_Id ASC)
);

CREATE TABLE Service_Category_Texts (
    PK_Service_Category_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Category_Id      INT            NOT NULL,
    Language                    NVARCHAR (2)   NOT NULL,
    Name                        NVARCHAR (255) NULL,
    Description                 MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Category_Texts PRIMARY KEY CLUSTERED (PK_Service_Category_Text_Id ASC)
);

CREATE TABLE Service_Type_Texts (
    PK_Service_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Type_Id      INT            NOT NULL,
    Language                NVARCHAR (2)   NOT NULL,
    Name                    NVARCHAR (255) NULL,
    Description             MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Type_Texts PRIMARY KEY CLUSTERED (PK_Service_Type_Text_Id ASC)
);

CREATE TABLE Location_Type_Texts (
    PK_Location_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Location_Type_Id      INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    CONSTRAINT PK_Location_Type_Texts PRIMARY KEY CLUSTERED (PK_Location_Type_Text_Id ASC)
);

CREATE TABLE Channel_Type_Texts (
    PK_Channel_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Channel_Type_Id      INT            NOT NULL,
    Language                NVARCHAR (2)   NOT NULL,
    Name                    NVARCHAR (255) NULL,
    Description             MEDIUMTEXT NULL,
    CONSTRAINT PK_Channel_Type_Texts PRIMARY KEY CLUSTERED (PK_Channel_Type_Text_Id ASC)
);

CREATE TABLE Organization_Related_Type_Texts (
    PK_Organization_Related_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Organization_Related_Type_Id      INT            NOT NULL,
    Language                             NVARCHAR (2)   NOT NULL,
    Name                                 NVARCHAR (255) NULL,
    Description                          MEDIUMTEXT NULL,
    CONSTRAINT PK_Organization_Related_Type_Texts PRIMARY KEY CLUSTERED (PK_Organization_Related_Type_Text_Id ASC)
);

CREATE TABLE Contact_Type_Texts (
    PK_Contact_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Contact_Type_Id      INT            NOT NULL,
    Language                NVARCHAR (2)   NOT NULL,
    Name                    NVARCHAR (255) NULL,
    Description             MEDIUMTEXT NULL,
    CONSTRAINT PK_Contact_Type_Texts PRIMARY KEY CLUSTERED (PK_Contact_Type_Text_Id ASC)
);

CREATE TABLE Contact_Scope_Texts (
    PK_Contact_Scope_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Contact_Scope_Id      INT            NOT NULL,
    Language                 NVARCHAR (2)   NOT NULL,
    Name                     NVARCHAR (255) NULL,
    Description              MEDIUMTEXT NULL,
    CONSTRAINT PK_Contact_Scope_Texts PRIMARY KEY CLUSTERED (PK_Contact_Scope_Text_Id ASC)
);

CREATE TABLE Refusal_Type_Texts (
    PK_Refusal_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Refusal_Type_Id      INT            NOT NULL,
    Language                NVARCHAR (2)   NOT NULL,
    Name                    NVARCHAR (255) NULL,
    Description             MEDIUMTEXT NULL,
    CONSTRAINT PK_Refusal_Type_Texts PRIMARY KEY CLUSTERED (PK_Refusal_Type_Text_Id ASC)
);

CREATE TABLE Result_Type_Texts (
    PK_Result_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Result_Type_Id      INT            NOT NULL,
    Language               NVARCHAR (2)   NOT NULL,
    Name                   NVARCHAR (255) NULL,
    Description            MEDIUMTEXT NULL,
    CONSTRAINT PK_Result_Type_Texts PRIMARY KEY CLUSTERED (PK_Result_Type_Text_Id ASC)
);


CREATE TABLE Life_Event_Texts (
    PK_Life_Event_Text_Id INT             AUTO_INCREMENT NOT NULL,
    FK_Life_Event_Id      INT             NOT NULL,
    Language              NVARCHAR (2)    NOT NULL,
    Life_Event_Level_1    NVARCHAR (1024) NULL,
    Description           MEDIUMTEXT  NULL,
    CONSTRAINT PK_Life_Event_Texts PRIMARY KEY CLUSTERED (PK_Life_Event_Text_Id ASC)
);

CREATE TABLE Business_Event_Texts (
    PK_Business_Event_Text_Id INT             AUTO_INCREMENT NOT NULL,
    FK_Business_Event_Id      INT             NOT NULL,
    Language                  NVARCHAR (2)    NOT NULL,
    Business_Event_Level_1    NVARCHAR (1024) NULL,
    Business_Event_Level_2    NVARCHAR (1024) NULL,
    Description               MEDIUMTEXT  NULL,
    CONSTRAINT PK_Business_Event_Texts PRIMARY KEY CLUSTERED (PK_Business_Event_Text_Id ASC)
);

CREATE TABLE Holiday_Texts (
    PK_Holiday_Text_Id INT             AUTO_INCREMENT NOT NULL,
    FK_Holiday_Id      INT             NOT NULL,
    Language           NVARCHAR (2)    NOT NULL,
    Holiday_Text       NVARCHAR (1024) NULL,
    Description        MEDIUMTEXT  NULL,
    CONSTRAINT PK_Holiday_Texts PRIMARY KEY CLUSTERED (PK_Holiday_Text_Id ASC)
);

CREATE TABLE Check_Lists (
    PK_Check_List_Id  INT            AUTO_INCREMENT NOT NULL,
    FK_Object_Type_Id INT            NOT NULL,
    Name              NVARCHAR (255) NULL,
    `Order`             INT            NOT NULL,
    Created           DATETIME       NOT NULL,
    Created_By        NVARCHAR (128) NOT NULL,
    Updated           DATETIME       NULL,
    Updated_By        NVARCHAR (128) NULL,
    Active            BIT            NOT NULL,
    Deleted           BIT            NOT NULL,
    CONSTRAINT PK_Check_Lists PRIMARY KEY CLUSTERED (PK_Check_List_Id ASC)
);

CREATE TABLE Object_Type_Texts (
    PK_Object_Type_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Object_Type_Id      INT            NOT NULL,
    Language               NVARCHAR (2)   NOT NULL,
    Name                   NVARCHAR (255) NULL,
    Description            MEDIUMTEXT NULL,
    CONSTRAINT PK_Object_Type_Texts PRIMARY KEY CLUSTERED (PK_Object_Type_Text_Id ASC)
);

CREATE TABLE Object_Types (
    PK_Object_Type_Id     INT            AUTO_INCREMENT NOT NULL,
    Name                  NVARCHAR (255) NOT NULL,
    FK_Icon_Attachment_Id INT            NULL,
    Created               DATETIME       NOT NULL,
    Created_By            NVARCHAR (128) NOT NULL,
    Updated               DATETIME       NULL,
    Updated_By            NVARCHAR (128) NULL,
    Active                BIT            NOT NULL,
    Deleted               BIT            NOT NULL,
    CONSTRAINT PK_Object_Types PRIMARY KEY CLUSTERED (PK_Object_Type_Id ASC)
);

CREATE TABLE Service_Grouping_Texts (
    PK_Service_Grouping_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Grouping_Id      INT            NOT NULL,
    Language                    NVARCHAR (2)   NOT NULL,
    Name                        NVARCHAR (255) NULL,
    Description                 MEDIUMTEXT NULL,
    CONSTRAINT PK_Service_Grouping_Texts PRIMARY KEY CLUSTERED (PK_Service_Grouping_Text_Id ASC)
);

CREATE TABLE Service_Groupings (
    PK_Service_Grouping_Id INT            AUTO_INCREMENT NOT NULL,
    Name                   NVARCHAR (255) NULL,
    Created                DATETIME       NOT NULL,
    Created_By             NVARCHAR (128) NOT NULL,
    Updated                DATETIME       NULL,
    Updated_By             NVARCHAR (128) NULL,
    Active                 BIT            NOT NULL,
    Deleted                BIT            NOT NULL,
    CONSTRAINT PK_Service_Groupings PRIMARY KEY CLUSTERED (PK_Service_Grouping_Id ASC)
);

CREATE TABLE Service_Support (
    PK_Service_Id      INT             NOT NULL,
    PK_Service_Version INT             NOT NULL,
    State_Support      BIT             NOT NULL,
    Url                NVARCHAR (2048) NULL,
    External_System_Id NVARCHAR (128)  NULL,
    Process_Id         NVARCHAR (128)  NULL,
    CONSTRAINT PK_Service_Support PRIMARY KEY CLUSTERED (PK_Service_Id ASC, PK_Service_Version ASC)
);

CREATE TABLE Service_Virtual (
    PK_Service_Id               INT             NOT NULL,
    PK_Service_Version          INT             NOT NULL,
    `Virtual`                     BIT             NOT NULL,
    Url                         NVARCHAR (2048) NULL,
    External_System_Id          NVARCHAR (128)  NULL,
    Process_Id                  NVARCHAR (128)  NULL,
    Can_Executed_By_Third_Party BIT             NULL,
    CONSTRAINT PK_Service_Virtual PRIMARY KEY CLUSTERED (PK_Service_Id ASC, PK_Service_Version ASC)
);

CREATE TABLE Services_Organizations (
    FK_Service_Id                  INT            NOT NULL,
    FK_Service_Version             INT            NOT NULL,
    FK_Organization_Parent_Id      INT            NOT NULL,
    FK_Organization_Parent_Version INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Services_Organizations PRIMARY KEY CLUSTERED (FK_Service_Id ASC, FK_Service_Version ASC, FK_Organization_Parent_Id ASC, FK_Organization_Parent_Version ASC)
);

CREATE TABLE Points_Of_Care_Organizations (
    FK_Point_Of_Care_Id            INT            NOT NULL,
    FK_Point_Of_Care_Version       INT            NOT NULL,
    FK_Organization_Parent_Id      INT            NOT NULL,
    FK_Organization_Parent_Version INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Points_Of_Care_Organizations PRIMARY KEY CLUSTERED (FK_Point_Of_Care_Id ASC, FK_Point_Of_Care_Version ASC, FK_Organization_Parent_Id ASC, FK_Organization_Parent_Version ASC)
);

CREATE TABLE Organizations_Organizations (
    FK_Organization_Id             INT            NOT NULL,
    FK_Organization_Version        INT            NOT NULL,
    FK_Organization_Parent_Id      INT            NOT NULL,
    FK_Organization_Parent_Version INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Organizations_Organizations PRIMARY KEY CLUSTERED (FK_Organization_Id ASC, FK_Organization_Version ASC, FK_Organization_Parent_Id ASC, FK_Organization_Parent_Version ASC)
);

CREATE TABLE Locations_Organizations (
    FK_Location_Id                 INT            NOT NULL,
    FK_Location_Version            INT            NOT NULL,
    FK_Organization_Parent_Id      INT            NOT NULL,
    FK_Organization_Parent_Version INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Locations_Organizations PRIMARY KEY CLUSTERED (FK_Location_Id ASC, FK_Location_Version ASC, FK_Organization_Parent_Id ASC, FK_Organization_Parent_Version ASC)
);

CREATE TABLE Documents_Services (
    FK_Document_Id                 INT            NOT NULL,
    FK_Document_Version            INT            NOT NULL,
    FK_Service_Parent_Id           INT            NOT NULL,
    FK_Service_Parent_Version      INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Documents_Services PRIMARY KEY CLUSTERED (FK_Document_Id ASC, FK_Document_Version ASC, FK_Service_Parent_Id ASC, FK_Service_Parent_Version ASC)
);

CREATE TABLE Documents_Organizations (
    FK_Document_Id                 INT            NOT NULL,
    FK_Document_Version            INT            NOT NULL,
    FK_Organization_Parent_Id      INT            NOT NULL,
    FK_Organization_Parent_Version INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Documents_Organizations PRIMARY KEY CLUSTERED (FK_Document_Id ASC, FK_Document_Version ASC, FK_Organization_Parent_Id ASC, FK_Organization_Parent_Version ASC)
);

CREATE TABLE Documents_Documents (
    FK_Document_Id                 INT            NOT NULL,
    FK_Document_Version            INT            NOT NULL,
    FK_Document_Parent_Id          INT            NOT NULL,
    FK_Document_Parent_Version     INT            NOT NULL,
    Observations                   MEDIUMTEXT NULL,
    FK_Record_State_Type_Id        INT            NOT NULL,
    FK_Parent_Record_State_Type_Id INT            NOT NULL,
    Created_Date                   DATETIME       NOT NULL,
    Approved_Date                  DATETIME       NULL,
    Obsoleted_Date                 DATETIME       NULL,
    CONSTRAINT PK_Documents_Documents PRIMARY KEY CLUSTERED (FK_Document_Id ASC, FK_Document_Version ASC, FK_Document_Parent_Id ASC, FK_Document_Parent_Version ASC)
);

CREATE TABLE Parameters_Texts (
    PK_Parameter_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Parameter_Id      INT            NOT NULL,
    Language             NVARCHAR (2)   NOT NULL,
    Name                 NVARCHAR (255) NOT NULL,
    Description          MEDIUMTEXT NULL,
    CONSTRAINT PK_Parameters_Texts PRIMARY KEY CLUSTERED (PK_Parameter_Text_Id ASC)
);

CREATE TABLE Permissions_Texts (
    PK_Permission_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Permission_Id      INT            NOT NULL,
    Language              NVARCHAR (2)   NOT NULL,
    Name                  NVARCHAR (255) NULL,
    Description           MEDIUMTEXT NULL,
    CONSTRAINT PK_Permission_Texts PRIMARY KEY CLUSTERED (PK_Permission_Text_Id ASC)
);

CREATE TABLE Services_Service_Rules (
    FK_Service_Id      INT            NOT NULL,
    FK_Service_Version INT            NOT NULL,
    FK_Service_Rule_Id INT            NOT NULL,
    Observations       MEDIUMTEXT NULL,
    CONSTRAINT PK_Services_Service_Rules PRIMARY KEY CLUSTERED (FK_Service_Id ASC, FK_Service_Version ASC, FK_Service_Rule_Id ASC)
);

CREATE TABLE Point_Of_Care_Refusal (
    PK_Point_Of_Care_Refusal_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Point_Of_Care_Id         INT            NOT NULL,
    FK_Point_Of_Care_Version    INT            NOT NULL,
    FK_Refusal_Type_Id          INT            NOT NULL,
    Description                 MEDIUMTEXT NULL,
    Refusal_Date                DATETIME       NOT NULL,
    FK_Refusal_By               INT            NOT NULL,
    CONSTRAINT PK_Point_Of_Care_Refusal PRIMARY KEY CLUSTERED (PK_Point_Of_Care_Refusal_Id ASC)
);

CREATE TABLE Service_Refusal (
    PK_Service_Refusal_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Service_Id         INT            NOT NULL,
    FK_Service_Version    INT            NOT NULL,
    FK_Refusal_Type_Id    INT            NOT NULL,
    Description           MEDIUMTEXT NULL,
    Refusal_Date          DATETIME       NOT NULL,
    FK_Refusal_By         INT            NOT NULL,
    CONSTRAINT PK_Service_Refusal PRIMARY KEY CLUSTERED (PK_Service_Refusal_Id ASC)
);

CREATE TABLE Organization_Refusal (
    PK_Organization_Refusal_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Organization_Id         INT            NOT NULL,
    FK_Organization_Version    INT            NOT NULL,
    FK_Refusal_Type_Id         INT            NOT NULL,
    Description                MEDIUMTEXT NULL,
    Refusal_Date               DATETIME       NOT NULL,
    FK_Refusal_By              INT            NOT NULL,
    CONSTRAINT PK_Organization_Refusal PRIMARY KEY CLUSTERED (PK_Organization_Refusal_Id ASC)
);

CREATE TABLE Location_Refusal (
    PK_Location_Refusal_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Location_Id         INT            NOT NULL,
    FK_Location_Version    INT            NOT NULL,
    FK_Refusal_Type_Id     INT            NOT NULL,
    Description            MEDIUMTEXT NULL,
    Refusal_Date           DATETIME       NOT NULL,
    FK_Refusal_By          INT            NOT NULL,
    CONSTRAINT PK_Location_Refusal PRIMARY KEY CLUSTERED (PK_Location_Refusal_Id ASC)
);

CREATE TABLE Document_Refusal (
    PK_Document_Refusal_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Document_Id         INT            NOT NULL,
    FK_Document_Version    INT            NOT NULL,
    FK_Refusal_Type_Id     INT            NOT NULL,
    Description            MEDIUMTEXT NULL,
    Refusal_Date           DATETIME       NOT NULL,
    FK_Refusal_By          INT            NOT NULL,
    CONSTRAINT PK_Document_Refusal PRIMARY KEY CLUSTERED (PK_Document_Refusal_Id ASC)
);

CREATE TABLE Check_List_Texts (
    PK_Check_List_Text_Id INT            AUTO_INCREMENT NOT NULL,
    FK_Check_List_Id      INT            NOT NULL,
    Language              NVARCHAR (2)   NOT NULL,
    Name                  NVARCHAR (255) NULL,
    Description           MEDIUMTEXT NULL,
    Question              MEDIUMTEXT NOT NULL,
    Default_Answer        MEDIUMTEXT NOT NULL,
    CONSTRAINT PK_Check_List_Texts PRIMARY KEY CLUSTERED (PK_Check_List_Text_Id ASC)
);

-- CREATE SEQUENCES

DROP TABLE IF EXISTS Sequences;
CREATE TABLE Sequences (
  key_name VARCHAR(50) NOT NULL,
  next_value INT NOT NULL DEFAULT 1,
  PRIMARY KEY (key_name) 
);

INSERT INTO Sequences (key_name) VALUES ('document_sequence');
INSERT INTO Sequences (key_name) VALUES ('pointofcare_sequence');
INSERT INTO Sequences (key_name) VALUES ('service_sequence');
INSERT INTO Sequences (key_name) VALUES ('location_sequence');
INSERT INTO Sequences (key_name) VALUES ('organization_sequence');

-- CREATE FK
ALTER TABLE Legislations
    ADD CONSTRAINT FK_Legislations_Attachments FOREIGN KEY (FK_Document_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Document_Parent FOREIGN KEY (Fk_Document_Parent_Id, Fk_Document_Parent_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Organization_Parent FOREIGN KEY (Fk_Organization_Parent_Id, Fk_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Service_Parent FOREIGN KEY (Fk_Service_Parent_Id, Fk_Service_Parent_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Document_Types FOREIGN KEY (FK_Document_Type_Id) REFERENCES Document_Types (PK_Document_Type_Id);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Legislations FOREIGN KEY (FK_Legislation_Id) REFERENCES Legislations (PK_Legislation_Id);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Attachments FOREIGN KEY (FK_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents
    ADD CONSTRAINT FK_Documents_Users_Approved_By FOREIGN KEY (FK_Approved_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Document_Texts
    ADD CONSTRAINT FK_Document_Texts_Documents FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Document_External_Systems
    ADD CONSTRAINT FK_Document_External_System_Documents FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Divisions
    ADD CONSTRAINT FK_Divisions_Division_Types FOREIGN KEY (FK_Division_Type_Id) REFERENCES Division_Types (PK_Division_Type_Id);

ALTER TABLE Divisions
    ADD CONSTRAINT FK_Divisions_Divisions FOREIGN KEY (FK_Division_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Costs
    ADD CONSTRAINT FK_Costs_Round_Types FOREIGN KEY (FK_Round_Type_Id) REFERENCES Round_Types (PK_Round_Type_Id);

ALTER TABLE Contacts
    ADD CONSTRAINT FK_Contacts_Contact_Scopes FOREIGN KEY (FK_Contact_Scope_Id) REFERENCES Contact_Scopes (PK_Contact_Scope_Id);

ALTER TABLE Contacts
    ADD CONSTRAINT FK_Contacts_Contact_Types FOREIGN KEY (FK_Contact_Type_Id) REFERENCES Contact_Types (PK_Contact_Type_Id);

ALTER TABLE Contacts
    ADD CONSTRAINT FK_Contacts_Organizations FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Contacts
    ADD CONSTRAINT FK_Contacts_PointsOfCare FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Channels_Schedules_Days
    ADD CONSTRAINT FK_Channels_Schedules_Days_Channels FOREIGN KEY (FK_Channel_Id) REFERENCES Channels (PK_Channel_Id);

ALTER TABLE Channels_Schedules_Days
    ADD CONSTRAINT FK_Channels_Schedules_Days_Schedules FOREIGN KEY (FK_Schedule_Id) REFERENCES Schedules (PK_Schedule_Id);

ALTER TABLE Channels_Schedules_Days
    ADD CONSTRAINT FK_Channels_Schedules_Days_Days FOREIGN KEY (FK_Day_Id) REFERENCES Days (PK_Day_Id);

ALTER TABLE Channels
    ADD CONSTRAINT FK_Channels_Channel_Types FOREIGN KEY (FK_Channel_Type_Id) REFERENCES Channel_Types (PK_Channel_Type_Id);

ALTER TABLE Channels
    ADD CONSTRAINT FK_Channels_Addresses FOREIGN KEY (FK_Address_Id) REFERENCES Addresses (PK_Address_Id);

ALTER TABLE Addresses
    ADD CONSTRAINT FK_Addresses_Locations FOREIGN KEY (FK_Location_Id, FK_Location_Version) REFERENCES Locations (PK_Location_Id, PK_Location_Version);

ALTER TABLE Addresses
    ADD CONSTRAINT FK_Addresses_Divisions FOREIGN KEY (FK_Division_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Addresses
    ADD CONSTRAINT FK_Addresses_Island FOREIGN KEY (FK_Island_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Addresses
    ADD CONSTRAINT FK_Addresses_County FOREIGN KEY (FK_County_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Addresses
    ADD CONSTRAINT FK_Addresses_Parish FOREIGN KEY (FK_Parish_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Profiles_Permissions
    ADD CONSTRAINT FK_Profiles_Permissions_Profiles FOREIGN KEY (FK_Profile_Id) REFERENCES Profiles (PK_Profile_Id);

ALTER TABLE Profiles_Permissions
    ADD CONSTRAINT FK_Profiles_Permissions_Permissions FOREIGN KEY (FK_Permission_Id) REFERENCES Permissions (PK_Permission_Id);

ALTER TABLE Points_Of_Care
    ADD CONSTRAINT FK_Points_Of_Care_Organization_Parent FOREIGN KEY (Fk_Organization_Parent_Id, Fk_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Points_Of_Care
    ADD CONSTRAINT FK_PointsOfCare_Channels FOREIGN KEY (FK_Channel_Id) REFERENCES Channels (PK_Channel_Id);

ALTER TABLE Points_Of_Care
    ADD CONSTRAINT FK_PointsOfCare_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Points_Of_Care
    ADD CONSTRAINT FK_PointsOfCare_Addresses FOREIGN KEY (FK_Address_Id) REFERENCES Addresses (PK_Address_Id);

ALTER TABLE Points_Of_Care
    ADD CONSTRAINT FK_PointsOfCare_Users_Approved_By FOREIGN KEY (FK_Approved_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Point_Of_Care_Texts
    ADD CONSTRAINT FK_Point_Of_Care_Texts_Points_Of_Care FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Point_Of_Care_External_Systems
    ADD CONSTRAINT FK_Point_Of_Care_External_Systems_Points_Of_Care FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Organization_Parent FOREIGN KEY (Fk_Organization_Parent_Id, Fk_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Organization_Types FOREIGN KEY (FK_Organization_Type_Id) REFERENCES Organization_Types (PK_Organization_Type_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Economic_Activities FOREIGN KEY (FK_Economic_Activity_Id) REFERENCES Economic_Activities (PK_Economic_Activity_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Attachments FOREIGN KEY (FK_Icon_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Division_Types FOREIGN KEY (FK_Division_Type_Id) REFERENCES Division_Types (PK_Division_Type_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Divisions FOREIGN KEY (FK_Division_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Addresses FOREIGN KEY (FK_Address_Id) REFERENCES Addresses (PK_Address_Id);

ALTER TABLE Organizations
    ADD CONSTRAINT FK_Organizations_Users_Approved_By FOREIGN KEY (FK_Approved_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Organization_Types_Children
    ADD CONSTRAINT FK_Organization_Types_Children_Organization_Types FOREIGN KEY (FK_Organization_Type_Id) REFERENCES Organization_Types (PK_Organization_Type_Id);

ALTER TABLE Organization_Types_Children
    ADD CONSTRAINT FK_Organization_Types_Children_Organization_Children_Types FOREIGN KEY (FK_Organization_Children_Type_Id) REFERENCES Organization_Types (PK_Organization_Type_Id);

ALTER TABLE Organization_Types
    ADD CONSTRAINT FK_Organization_Types_Organization_Types FOREIGN KEY (FK_Organization_Type_Id) REFERENCES Organization_Types (PK_Organization_Type_Id);

ALTER TABLE Organization_Texts
    ADD CONSTRAINT FK_Organization_Texts_Organizations FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organization_Related
    ADD CONSTRAINT FK_Organization_Related_Organizations FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organization_Related
    ADD CONSTRAINT FK_Organization_Related_Organization_Related_Types FOREIGN KEY (FK_Organization_Related_Type_Id) REFERENCES Organization_Related_Types (PK_Organization_Related_Type_Id);

ALTER TABLE Organization_External_System
    ADD CONSTRAINT FK_Organization_External_System_Organizations FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Notification_Users
    ADD CONSTRAINT FK_Notification_Users_Notifications FOREIGN KEY (FK_Notification_Id) REFERENCES Notifications (PK_Notification_Id);

ALTER TABLE Notification_Users
    ADD CONSTRAINT FK_Notification_Users_Users_Source_User_Id FOREIGN KEY (FK_Source_User_Id) REFERENCES Users (PK_User_Id);

ALTER TABLE Notification_Users
    ADD CONSTRAINT FK_Notification_Users_Users_Target_User_Id FOREIGN KEY (FK_Target_User_Id) REFERENCES Users (PK_User_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Organization_Parent FOREIGN KEY (Fk_Organization_Parent_Id, Fk_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Divisions FOREIGN KEY (FK_Division_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Island FOREIGN KEY (FK_Island_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_County FOREIGN KEY (FK_County_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Parish FOREIGN KEY (FK_Parish_Id) REFERENCES Divisions (PK_Division_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Location_Types FOREIGN KEY (FK_Location_Type_Id) REFERENCES Location_Types (PK_Location_Type_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Locations
    ADD CONSTRAINT FK_Locations_Users_Approved_By FOREIGN KEY (FK_Approved_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Location_Texts
    ADD CONSTRAINT FK_Location_Texts_Locations FOREIGN KEY (FK_Location_Id, FK_Location_Version) REFERENCES Locations (PK_Location_Id, PK_Location_Version);

ALTER TABLE Location_External_Systems
    ADD CONSTRAINT FK_Location_External_Systems_Locations FOREIGN KEY (FK_Location_Id, FK_Location_Version) REFERENCES Locations (PK_Location_Id, PK_Location_Version);

ALTER TABLE Economic_Activity_Texts
    ADD CONSTRAINT FK_Economic_Activity_Texts_Economic_Activities FOREIGN KEY (FK_Economic_Activities_Id) REFERENCES Economic_Activities (PK_Economic_Activity_Id);

ALTER TABLE Organization_Type_Texts
    ADD CONSTRAINT FK_Organization_Type_Texts_Organization_Types FOREIGN KEY (FK_Organization_Type_Id) REFERENCES Organization_Types (PK_Organization_Type_Id);

ALTER TABLE Users_Profiles
    ADD CONSTRAINT FK_Users_Profiles_Users FOREIGN KEY (FK_User_Id) REFERENCES Users (PK_User_Id);

ALTER TABLE Users_Profiles
    ADD CONSTRAINT FK_Users_Profiles_Profiles FOREIGN KEY (FK_Profile_Id) REFERENCES Profiles (PK_Profile_Id);

ALTER TABLE Services_Points_Of_Care
    ADD CONSTRAINT FK_Services_Points_Of_Care_Record_State_type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Services_Points_Of_Care
    ADD CONSTRAINT FK_Services_Points_Of_Care_External_Record_State_type FOREIGN KEY (FK_External_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Services_Points_Of_Care
    ADD CONSTRAINT FK_Services_Points_Of_Care_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Points_Of_Care
    ADD CONSTRAINT FK_Services_Points_Of_Care_PointsOfCare FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Organization_Parent FOREIGN KEY (Fk_Organization_Parent_Id, Fk_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Attachments FOREIGN KEY (FK_Diagram_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Service_Types FOREIGN KEY (FK_Service_Type_Id) REFERENCES Service_Types (PK_Service_Type_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Service_Categories FOREIGN KEY (FK_Service_Category_Id) REFERENCES Service_Categories (PK_Service_Category_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Service_Groupings FOREIGN KEY (FK_Service_Grouping_Id) REFERENCES Service_Groupings (PK_Service_Grouping_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Life_Events FOREIGN KEY (FK_Life_Event_Id) REFERENCES Life_Events (PK_Life_Event_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Business_Events FOREIGN KEY (FK_Business_Event_Id) REFERENCES Business_Events (PK_Business_Event_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Economic_Activities FOREIGN KEY (FK_Economic_Activity_Id) REFERENCES Economic_Activities (PK_Economic_Activity_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Services
    ADD CONSTRAINT FK_Services_Users_Approved_By FOREIGN KEY (FK_Approved_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Service_Texts
    ADD CONSTRAINT FK_Service_Texts_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Service_Rules
    ADD CONSTRAINT FK_Service_Rules_Legislations FOREIGN KEY (FK_Legislation_Id) REFERENCES Legislations (PK_Legislation_Id);

ALTER TABLE Service_Related
    ADD CONSTRAINT FK_Service_Related_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Service_Related
    ADD CONSTRAINT FK_Service_Related_Service_Related_Types FOREIGN KEY (FK_Service_Related_Type_Id) REFERENCES Service_Related_Types (PK_Service_Related_Type_Id);

ALTER TABLE Service_External_Systems
    ADD CONSTRAINT FK_Service_External_Systems_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Service_Categories
    ADD CONSTRAINT FK_Service_Categories_Service_Category FOREIGN KEY (FK_Service_Category_Parent_Id) REFERENCES Service_Categories (PK_Service_Category_Id);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Documents_Attachments FOREIGN KEY (FK_Document_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Documents_Related_Attachments FOREIGN KEY (FK_Document_Related_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Points_Of_Care FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Recipients FOREIGN KEY (FK_Recipient_Id) REFERENCES Recipients (PK_Recipient_Id);

ALTER TABLE Requirements
    ADD CONSTRAINT FK_Requirements_Result_Types FOREIGN KEY (FK_Result_Type_Id) REFERENCES Result_Types (PK_Result_Type_Id);

ALTER TABLE Reports
    ADD CONSTRAINT FK_Reports_Attachments FOREIGN KEY (FK_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Recipients
    ADD CONSTRAINT FK_Recipients_Recipient_Types FOREIGN KEY (FK_Recipient_Type_Id) REFERENCES Recipient_Types (PK_Recipient_Type_Id);

ALTER TABLE Recipients
    ADD CONSTRAINT FK_Recipients_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Legislations
    ADD CONSTRAINT FK_Services_Legislations_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Legislations
    ADD CONSTRAINT FK_Services_Legislations_Legislations FOREIGN KEY (FK_Legislation_Id) REFERENCES Legislations (PK_Legislation_Id);

ALTER TABLE Service_Rule_Texts
    ADD CONSTRAINT FK_Service_Rule_Texts_Service_Rules FOREIGN KEY (FK_Service_Rule_Id) REFERENCES Service_Rules (PK_Service_Rule_Id);

ALTER TABLE Requirement_Texts
    ADD CONSTRAINT FK_Requirement_Texts_Requirements FOREIGN KEY (FK_Requirement_Id) REFERENCES Requirements (PK_Requirement_Id);

ALTER TABLE Legislation_Texts
    ADD CONSTRAINT FK_Legislation_Texts_Legislations FOREIGN KEY (FK_Legislation_Id) REFERENCES Legislations (PK_Legislation_Id);

ALTER TABLE Service_External_Requirements
    ADD CONSTRAINT FK_Service_External_Requirements_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Division_Type_Texts
    ADD CONSTRAINT FK_Division_Type_Texts_Division_Types FOREIGN KEY (FK_Division_Type_Id) REFERENCES Division_Types (PK_Division_Type_Id);

ALTER TABLE Record_State_Type_Texts
    ADD CONSTRAINT FK_Record_State_Type_Texts_Record_State_Types FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Recipient_Type_Texts
    ADD CONSTRAINT FK_Recipient_Type_Texts_Recipient_Types FOREIGN KEY (FK_Recipient_Type_Id) REFERENCES Recipient_Types (PK_Recipient_Type_Id);

ALTER TABLE Document_Type_Texts
    ADD CONSTRAINT FK_Document_Type_Texts_Document_Types FOREIGN KEY (FK_Document_Type_Id) REFERENCES Document_Types (PK_Document_Type_Id);

ALTER TABLE Service_Related_Type_Texts
    ADD CONSTRAINT FK_Service_Related_Type_Texts_Service_Related_Types FOREIGN KEY (FK_Service_Related_Type_Id) REFERENCES Service_Related_Types (PK_Service_Related_Type_Id);

ALTER TABLE Service_Category_Texts
    ADD CONSTRAINT FK_Service_Category_Texts_Service_Categories FOREIGN KEY (FK_Service_Category_Id) REFERENCES Service_Categories (PK_Service_Category_Id);

ALTER TABLE Service_Type_Texts
    ADD CONSTRAINT FK_Service_Type_Texts_Service_Types FOREIGN KEY (FK_Service_Type_Id) REFERENCES Service_Types (PK_Service_Type_Id);

ALTER TABLE Location_Type_Texts
    ADD CONSTRAINT FK_Location_Type_Texts_Location_Types FOREIGN KEY (FK_Location_Type_Id) REFERENCES Location_Types (PK_Location_Type_Id);

ALTER TABLE Channel_Type_Texts
    ADD CONSTRAINT FK_Channel_Type_Texts_Channel_Types FOREIGN KEY (FK_Channel_Type_Id) REFERENCES Channel_Types (PK_Channel_Type_Id);

ALTER TABLE Organization_Related_Type_Texts
    ADD CONSTRAINT FK_Organization_Related_Type_Texts_Organization_Related_Types FOREIGN KEY (FK_Organization_Related_Type_Id) REFERENCES Organization_Related_Types (PK_Organization_Related_Type_Id);

ALTER TABLE Contact_Type_Texts
    ADD CONSTRAINT FK_Contact_Type_Texts_Contact_Types FOREIGN KEY (FK_Contact_Type_Id) REFERENCES Contact_Types (PK_Contact_Type_Id);

ALTER TABLE Contact_Scope_Texts
    ADD CONSTRAINT FK_Contact_Scope_Texts_Contact_Scopes FOREIGN KEY (FK_Contact_Scope_Id) REFERENCES Contact_Scopes (PK_Contact_Scope_Id);

ALTER TABLE Refusal_Type_Texts
    ADD CONSTRAINT FK_Refusal_Type_Texts_Refusal_Types FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Result_Type_Texts
    ADD CONSTRAINT FK_Result_Type_Texts_Result_Types FOREIGN KEY (FK_Result_Type_Id) REFERENCES Result_Types (PK_Result_Type_Id);

ALTER TABLE Life_Event_Texts
    ADD CONSTRAINT FK_Life_Event_Texts_Life_Events FOREIGN KEY (FK_Life_Event_Id) REFERENCES Life_Events (PK_Life_Event_Id);

ALTER TABLE Business_Event_Texts
    ADD CONSTRAINT FK_Business_Event_Texts_Business_Events FOREIGN KEY (FK_Business_Event_Id) REFERENCES Business_Events (PK_Business_Event_Id);

ALTER TABLE Holiday_Texts
    ADD CONSTRAINT FK_Holiday_Texts_Holidays FOREIGN KEY (FK_Holiday_Id) REFERENCES Holidays (PK_Holiday_Id);

ALTER TABLE Check_Lists
    ADD CONSTRAINT FK_Check_Lists_Object_Types FOREIGN KEY (FK_Object_Type_Id) REFERENCES Object_Types (PK_Object_Type_Id);

ALTER TABLE Object_Type_Texts
    ADD CONSTRAINT FK_Object_Type_Texts_Object_Types FOREIGN KEY (FK_Object_Type_Id) REFERENCES Object_Types (PK_Object_Type_Id);

ALTER TABLE Object_Types
    ADD CONSTRAINT FK_Object_Types_Icon_Attachment FOREIGN KEY (FK_Icon_Attachment_Id) REFERENCES Attachments (PK_Attachment_Id);

ALTER TABLE Service_Grouping_Texts
    ADD CONSTRAINT FK_Service_Grouping_Texts_Service_Groupings FOREIGN KEY (FK_Service_Grouping_Id) REFERENCES Service_Groupings (PK_Service_Grouping_Id);

ALTER TABLE Service_Support
    ADD CONSTRAINT FK_Service_Support_Services FOREIGN KEY (PK_Service_Id, PK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Service_Virtual
    ADD CONSTRAINT FK_Service_Virtual_Services FOREIGN KEY (PK_Service_Id, PK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Organizations
    ADD CONSTRAINT FK_Services_Organizations_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Services_Organizations
    ADD CONSTRAINT FK_Services_Organizations_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Services_Organizations
    ADD CONSTRAINT FK_Services_Organizations_Service FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Organizations
    ADD CONSTRAINT FK_Services_Organizations_Organization_Parent FOREIGN KEY (FK_Organization_Parent_Id, FK_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Points_Of_Care_Organizations
    ADD CONSTRAINT FK_Points_Of_Care_Organizations_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Points_Of_Care_Organizations
    ADD CONSTRAINT FK_Points_Of_Care_Organizations_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Points_Of_Care_Organizations
    ADD CONSTRAINT FK_Points_Of_Care_Organizations_Point_Of_Care FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Points_Of_Care_Organizations
    ADD CONSTRAINT FK_Points_Of_Care_Organizations_Organization_Parent FOREIGN KEY (FK_Organization_Parent_Id, FK_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organizations_Organizations
    ADD CONSTRAINT FK_Organizations_Organizations_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Organizations_Organizations
    ADD CONSTRAINT FK_Organizations_Organizations_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Organizations_Organizations
    ADD CONSTRAINT FK_Organizations_Organizations_Organization FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organizations_Organizations
    ADD CONSTRAINT FK_Organizations_Organizations_Organization_Parent FOREIGN KEY (FK_Organization_Parent_Id, FK_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Locations_Organizations
    ADD CONSTRAINT FK_Locations_Organizations_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Locations_Organizations
    ADD CONSTRAINT FK_Locations_Organizations_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Locations_Organizations
    ADD CONSTRAINT FK_Locations_Organizations_Location FOREIGN KEY (FK_Location_Id, FK_Location_Version) REFERENCES Locations (PK_Location_Id, PK_Location_Version);

ALTER TABLE Locations_Organizations
    ADD CONSTRAINT FK_Locations_Organizations_Organization_Parent FOREIGN KEY (FK_Organization_Parent_Id, FK_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Documents_Services
    ADD CONSTRAINT FK_Documents_Services_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Services
    ADD CONSTRAINT FK_Documents_Services_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Services
    ADD CONSTRAINT FK_Documents_Services_Document FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Documents_Services
    ADD CONSTRAINT FK_Documents_Services_Service_Parent FOREIGN KEY (FK_Service_Parent_Id, FK_Service_Parent_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Documents_Organizations
    ADD CONSTRAINT FK_Documents_Organizations_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Organizations
    ADD CONSTRAINT FK_Documents_Organizations_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Organizations
    ADD CONSTRAINT FK_Documents_Organizations_Document FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Documents_Organizations
    ADD CONSTRAINT FK_Documents_Organizations_Organization_Parent FOREIGN KEY (FK_Organization_Parent_Id, FK_Organization_Parent_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Documents_Documents
    ADD CONSTRAINT FK_Documents_Documents_Record_State_Type FOREIGN KEY (FK_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Documents
    ADD CONSTRAINT FK_Documents_Documents_Record_State_Type_Parent FOREIGN KEY (FK_Parent_Record_State_Type_Id) REFERENCES Record_State_Types (PK_Record_State_Type_Id);

ALTER TABLE Documents_Documents
    ADD CONSTRAINT FK_Documents_Documents_Document FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Documents_Documents
    ADD CONSTRAINT FK_Documents_Documents_Document_Parent FOREIGN KEY (FK_Document_Parent_Id, FK_Document_Parent_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Parameters_Texts
    ADD CONSTRAINT FK_Parameters_Texts_Parameter FOREIGN KEY (FK_Parameter_Id) REFERENCES Parameters (PK_Parameter_Id);

ALTER TABLE Permissions_Texts
    ADD CONSTRAINT FK_Permission_Texts_Permission FOREIGN KEY (FK_Permission_Id) REFERENCES Permissions (PK_Permission_Id);

ALTER TABLE Services_Service_Rules
    ADD CONSTRAINT FK_Services_Service_Rules_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Services_Service_Rules
    ADD CONSTRAINT FK_Services_Service_Rules_Service_Rules FOREIGN KEY (FK_Service_Rule_Id) REFERENCES Service_Rules (PK_Service_Rule_Id);

ALTER TABLE Point_Of_Care_Refusal
    ADD CONSTRAINT FK_Point_Of_Care_Refusal_Services FOREIGN KEY (FK_Point_Of_Care_Id, FK_Point_Of_Care_Version) REFERENCES Points_Of_Care (PK_Point_Of_Care_Id, PK_Point_Of_Care_Version);

ALTER TABLE Point_Of_Care_Refusal
    ADD CONSTRAINT FK_Point_Of_Care_Refusal_Refusal_Type FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Point_Of_Care_Refusal
    ADD CONSTRAINT FK_Point_Of_Care_Refusal_Refusal_By FOREIGN KEY (FK_Refusal_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Service_Refusal
    ADD CONSTRAINT FK_Service_Refusal_Services FOREIGN KEY (FK_Service_Id, FK_Service_Version) REFERENCES Services (PK_Service_Id, PK_Service_Version);

ALTER TABLE Service_Refusal
    ADD CONSTRAINT FK_Service_Refusal_Refusal_Type FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Service_Refusal
    ADD CONSTRAINT FK_Service_Refusal_Refusal_By FOREIGN KEY (FK_Refusal_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Organization_Refusal
    ADD CONSTRAINT FK_Organization_Refusal_Organizations FOREIGN KEY (FK_Organization_Id, FK_Organization_Version) REFERENCES Organizations (PK_Organization_Id, PK_Organization_Version);

ALTER TABLE Organization_Refusal
    ADD CONSTRAINT FK_Organization_Refusal_Refusal_Type FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Organization_Refusal
    ADD CONSTRAINT FK_Organization_Refusal_Refusal_By FOREIGN KEY (FK_Refusal_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Location_Refusal
    ADD CONSTRAINT FK_Location_Refusal_Locations FOREIGN KEY (FK_Location_Id, FK_Location_Version) REFERENCES Locations (PK_Location_Id, PK_Location_Version);

ALTER TABLE Location_Refusal
    ADD CONSTRAINT FK_Location_Refusal_Refusal_Type FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Location_Refusal
    ADD CONSTRAINT FK_Location_Refusal_Refusal_By FOREIGN KEY (FK_Refusal_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Document_Refusal
    ADD CONSTRAINT FK_Document_Refusal_Documents FOREIGN KEY (FK_Document_Id, FK_Document_Version) REFERENCES Documents (PK_Document_Id, PK_Document_Version);

ALTER TABLE Document_Refusal
    ADD CONSTRAINT FK_Document_Refusal_Refusal_Type FOREIGN KEY (FK_Refusal_Type_Id) REFERENCES Refusal_Types (PK_Refusal_Type_Id);

ALTER TABLE Document_Refusal
    ADD CONSTRAINT FK_Document_Refusal_Refusal_By FOREIGN KEY (FK_Refusal_By) REFERENCES Users (PK_User_Id);

ALTER TABLE Check_List_Texts
    ADD CONSTRAINT FK_Check_List_Texts_Check_Lists FOREIGN KEY (FK_Check_List_Id) REFERENCES Check_Lists (PK_Check_List_Id);
	


