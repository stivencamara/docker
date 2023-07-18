-- CREATE DB

CREATE DATABASE IF NOT EXISTS `CES.API.Database`;
CREATE DATABASE IF NOT EXISTS `CES.API.Log`;

USE `CES.API.Database`;

CREATE USER IF NOT EXISTS 'CESUser'@'%' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON `CES.API.Database`.* TO 'CESUser'@'%';
GRANT ALL PRIVILEGES ON `CES.API.Log`.* TO 'CESUser'@'%';

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
    Password            NVARCHAR (32)  NULL,
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
    Name              NVARCHAR (255) NOT NULL,
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

DROP FUNCTION IF exists GetNextValue;
DELIMITER //
CREATE FUNCTION GetNextValue(keyname  VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE nextvalue INT;

  SELECT next_value INTO @nextvalue FROM Sequences WHERE key_name = keyname FOR UPDATE;
  UPDATE Sequences SET next_value = next_value + 1 WHERE key_name = keyname;

  RETURN @nextvalue;
END //

DELIMITER ;

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
	
-- CREATE PROCEDURES

DROP PROCEDURE IF EXISTS Clear_Jobs;
DELIMITER $$
CREATE PROCEDURE Clear_Jobs
(
	IN pMachine_Name nvarchar(64)
)
BEGIN
     IF EXISTS (SELECT * FROM Control_Timer_Jobs 
				WHERE Machine_Name = pMachine_Name) THEN
            UPDATE Control_Timer_Jobs
                SET Machine_Name = NULL, Created = now()
                WHERE Machine_Name = pMachine_Name;
	END IF;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS Unlock_Timer_Job;
DELIMITER $$
CREATE PROCEDURE Unlock_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64),
	IN pMachine_Name nvarchar(64),
    OUT pReturn BIT 
)
BEGIN
     IF EXISTS (SELECT * FROM Control_Timer_Jobs  
				WHERE PK_Timer_Job_Id = pTimer_Job_Id AND Machine_Name = pMachine_Name) THEN
            UPDATE Control_Timer_Jobs
                SET Machine_Name = NULL, Created = NULL
                WHERE PK_Timer_Job_Id = pTimer_Job_Id;

            SET pReturn = 1;
     ELSE
        SET pReturn = 0;
	END IF;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS Register_Timer_Job;
DELIMITER $$
CREATE PROCEDURE Register_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64)
)
BEGIN
     IF NOT EXISTS (SELECT * FROM Control_Timer_Jobs 
					WHERE PK_Timer_Job_Id = pTimer_Job_Id) THEN
            INSERT INTO Control_Timer_Jobs (PK_Timer_Job_Id) VALUES(pTimer_Job_Id);
	END IF;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS Lock_Timer_Job;
DELIMITER $$
CREATE PROCEDURE Lock_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64),
	IN pMachine_Name nvarchar(64),
    OUT pReturn BIT
)
BEGIN
     IF EXISTS (SELECT * FROM Control_Timer_Jobs WHERE 
				PK_Timer_Job_Id = pTimer_Job_Id AND Machine_Name IS NULL) THEN
		UPDATE Control_Timer_Jobs
			SET Machine_Name = pMachine_Name, Created = now()
			WHERE PK_Timer_Job_Id = pTimer_Job_Id;

		SET pReturn = 1;
     ELSE
        SET pReturn = 0;
	END IF;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS DateTreeView;
DELIMITER $$
CREATE  PROCEDURE DateTreeView
(
	IN pOrganization_Id INT,
	IN pOrganization_Version INT,
	IN pLevel int,
	IN pLanguage nvarchar(3),
	IN pFilter_Date datetime
)
BEGIN
	DECLARE vPublished_State INT DEFAULT 5;
	DECLARE vObsoleted_State INT DEFAULT 8;

-- CLEAR ALL
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable;
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable_1;

	-- Coloca as horas para 23h59.59 na data
	SET pFilter_Date = DATE_ADD(pFilter_Date, INTERVAL 1 DAY) - INTERVAL 1 SECOND;

	-- Caso não passem o Id/Version 
	-- Vai buscar a entidade Açores
	IF (pOrganization_Id IS NULL OR pOrganization_Version IS NULL) THEN
		SELECT PK_Organization_Id, PK_Organization_Version
        INTO pOrganization_Id, pOrganization_Version
		FROM Organizations 
		WHERE Fk_Organization_Parent_Id IS NULL AND 
		((FK_Record_State_Type_Id = vPublished_State AND pFilter_Date >= Approved)
		OR
		((FK_Record_State_Type_Id = vObsoleted_State AND pFilter_Date < Updated))); 
	END IF;

    CREATE TEMPORARY TABLE vMainTempTable (PK_Organization_Id INT, PK_Organization_Version INT, Fk_Organization_Parent_Id INT, Fk_Organization_Parent_Version INT, Level INT,
									Name VARCHAR(1024), Can_Have_Points_Of_Care BIT, Can_Have_Services BIT, Group_Name INT, FK_Record_State_Type_Id INT, Organization_Active BIT,
									Service_Id INT, Service_Version INT, Service_Name VARCHAR(1024), Service_Record_State_Type_Id INT, Service_Active BIT,
									Poc_Id INT, Poc_Version INT, Poc_Name VARCHAR(1024), Poc_Record_State_Type_Id INT, Poc_Active BIT,
									Poc_Service_Id INT, Poc_Service_Version INT, Poc_Service_Name VARCHAR(1024), Poc_Service_Record_State_Type_Id INT, Poc_Service_Active BIT, Poc_Service_External BIT,
                                    Approved_Date DATETIME, Obsoleted_Date DATETIME);

	INSERT INTO vMainTempTable (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active, Approved_Date, Obsoleted_Date)
	(
		SELECT PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active,
                    Approved_Date, Obsoleted_Date
		FROM (
			SELECT o.PK_Organization_Id, o.PK_Organization_Version, oo.Fk_Organization_Parent_Id, oo.Fk_Organization_Parent_Version, 0 AS Level,
				 o.FK_Record_State_Type_Id, o.Approved AS Approved_Date, oo.Obsoleted_Date,
				 o.Can_Have_Points_Of_Care, o.Can_Have_Services, o.Group_Name, o.Organization_Active,
				ROW_NUMBER() OVER (PARTITION BY oo.FK_Organization_Id ORDER BY COALESCE(oo.Obsoleted_Date, oo.Approved_Date, oo.Created_Date) DESC) AS rn
			FROM      Organizations AS o LEFT JOIN
								Organizations_Organizations AS oo
								ON o.PK_Organization_Id = oo.FK_Organization_Id AND
									o.PK_Organization_Version = oo.FK_Organization_Version
			WHERE   
				o.Approved <= pFilter_Date AND
				((o.FK_Record_State_Type_Id = vPublished_State) OR 
				(o.FK_Record_State_Type_Id = vObsoleted_State AND oo.Obsoleted_Date > pFilter_Date ))
			) AS sub
			WHERE rn = 1
		);

	CREATE TEMPORARY TABLE vMainTempTable_1 AS (SELECT * FROM vMainTempTable);

	WITH RECURSIVE RecursiveCTE (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, FK_Organization_Parent_Version, Level, FK_Record_State_Type_Id, Approved, Obsoleted_Date,
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, Organization_Active)
	AS
	(
				SELECT PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, FK_Organization_Parent_Version, 0 AS Level,
						 FK_Record_State_Type_Id, Approved_Date, Obsoleted_Date,
						 Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, Organization_Active
				FROM      vMainTempTable
				WHERE   PK_Organization_Id = pOrganization_Id AND PK_Organization_Version = pOrganization_Version AND
						Approved_Date <= pFilter_Date AND
						((FK_Record_State_Type_Id = vPublished_State) OR 
						(FK_Record_State_Type_Id = vObsoleted_State AND Obsoleted_Date > pFilter_Date ))

				UNION ALL

				SELECT t2.PK_Organization_Id, t2.PK_Organization_Version, t2.Fk_Organization_Parent_Id, t2.FK_Organization_Parent_Version, cte.Level + 1,
						t2.FK_Record_State_Type_Id, t2.Approved_Date, t2.Obsoleted_Date,
						t2.Can_Have_Points_Of_Care, t2.Can_Have_Services, t2.Group_Name, t2.Organization_Active
				FROM   vMainTempTable_1 t2
				
				JOIN RecursiveCTE AS cte ON cte.PK_Organization_Id = t2.Fk_Organization_Parent_Id AND cte.PK_Organization_Version = t2.FK_Organization_Parent_Version
				WHERE cte.Level < pLevel AND 
						t2.Approved_Date <= pFilter_Date AND
						((t2.FK_Record_State_Type_Id = vPublished_State) OR 
						(t2.FK_Record_State_Type_Id = vObsoleted_State AND t2.Obsoleted_Date > pFilter_Date ))
	)

	SELECT cte.PK_Organization_Id, cte.PK_Organization_Version, cte.Fk_Organization_Parent_Id, cte.Fk_Organization_Parent_Version, cte.Level,
					texts.Name, cte.Can_Have_Points_Of_Care, cte.Can_Have_Services, cte.Group_Name, cte.FK_Record_State_Type_Id, cte.Organization_Active,
					t0.PK_Service_Id as Service_Id, t0.PK_Service_Version as Service_Version, t0.Name0 as Service_Name, t0.FK_Record_State_Type_Id as Service_Record_State_Type_Id, t0.Service_Active, -- service
					t1.PK_Point_Of_Care_Id as Poc_Id, t1.PK_Point_Of_Care_Version as Poc_Version, t1.Name0 as Poc_Name, t1.FK_Record_State_Type_Id as Poc_Record_State_Type_Id, t1.Point_Of_Care_Active as Poc_Active, -- Poc
					t1.PK_Service_Id as Poc_Service_Id, t1.PK_Service_Version as Poc_Service_Version, t1.Name00 as Poc_Service_Name, t1.FK_Record_State_Type_Id00 as Poc_Service_Record_State_Type_Id, t1.Service_Active as Poc_Service_Active, CASE WHEN (t0.Fk_Organization_Parent_Id0 = t1.Fk_Organization_Parent_Id1) THEN 1 ELSE 0 END as Poc_Service_External -- Poc / service
			
			FROM RecursiveCTE AS cte
			
			-- Texts
			LEFT JOIN Organization_Texts AS texts ON cte.PK_Organization_Id = texts.FK_Organization_Id AND cte.PK_Organization_Version = texts.FK_Organization_Version
				
			-- Services
			LEFT JOIN (
				SELECT s.FK_Service_Id, s.FK_Service_Version, s.FK_Organization_Parent_Id, s.FK_Organization_Parent_Version, s.Approved_Date, s.Created_Date, s.FK_Parent_Record_State_Type_Id, s.FK_Record_State_Type_Id, s.Observations, s.Obsoleted_Date, s0.PK_Service_Id, s0.PK_Service_Version, s0.Active, s0.Approved, s0.Approved_Version, s0.Code, s0.Cost, s0.Created, s0.Created_By, s0.Deleted, s0.End_Date, s0.FK_Approved_By, s0.FK_Business_Event_Id, s0.FK_Diagram_Attachment_Id, s0.FK_Economic_Activity_Id, s0.FK_Life_Event_Id, s0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, s0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, s0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s0.FK_Service_Category_Id, s0.FK_Service_Grouping_Id, s0.FK_Service_Type_Id, s0.Generic_1, s0.Generic_2, s0.Generic_3, s0.In_History, s0.Name, s0.Processing_Time_Days, s0.Processing_Time_Hours, s0.Processing_Time_Minutes, s0.Processing_Time_Months, s0.Processing_Time_Seconds, s0.Processing_Time_Weeks, s0.Processing_Time_Years, s0.Service_Active, s0.Service_Internal, s0.Start_Date, s0.Updated, s0.Updated_By, s1.PK_Service_Text_Id, s1.Abreviation, s1.Description, s1.FK_Service_Id AS FK_Service_Id0, s1.FK_Service_Version AS FK_Service_Version0, s1.Keywords, s1.Language, s1.Name AS Name0, s1.Service_Procedure, s1.Version_Comments
				FROM Services_Organizations AS s
				INNER JOIN Services AS s0 ON s.FK_Service_Id = s0.PK_Service_Id AND s.FK_Service_Version = s0.PK_Service_Version
				LEFT JOIN Service_Texts AS s1 ON s0.PK_Service_Id = s1.FK_Service_Id AND s0.PK_Service_Version = s1.FK_Service_Version
				WHERE s1.Language = pLanguage AND 
						s.Approved_Date <= pFilter_Date AND
						((s0.FK_Record_State_Type_Id = vPublished_State) OR 
						(s0.FK_Record_State_Type_Id = vObsoleted_State AND s.Obsoleted_Date > pFilter_Date ))
			) AS t0 ON cte.PK_Organization_Id = t0.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t0.FK_Organization_Parent_Version
			

			-- Points Of Care
			LEFT JOIN (
				SELECT p.FK_Point_Of_Care_Id, p.FK_Point_Of_Care_Version, p.FK_Organization_Parent_Id, p.FK_Organization_Parent_Version, p.Approved_Date, p.Created_Date, p.FK_Parent_Record_State_Type_Id, p.FK_Record_State_Type_Id, p.Observations, p.Obsoleted_Date, p0.PK_Point_Of_Care_Id, p0.PK_Point_Of_Care_Version, p0.Active, p0.Approved, p0.Approved_Version, p0.Code, p0.Created, p0.Created_By, p0.Deleted, p0.End_Date, p0.FK_Address_Id, p0.FK_Approved_By, p0.FK_Channel_Id, p0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, p0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, p0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, p0.Generic_1, p0.Generic_2, p0.Generic_3, p0.In_History, p0.Name, p0.Point_Of_Care_Active, p0.Start_Date, p0.Updated, p0.Updated_By, p1.PK_Point_Of_Care_Text_Id, p1.Abreviation, p1.Attendance_Restrictions, p1.Description, p1.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id0, p1.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version0, p1.Keywords, p1.Language, p1.Name AS Name0, p1.Opening_Hours, p1.Pre_Conditions, p1.Version_Comments, t2.FK_Service_Id, t2.FK_Service_Version, t2.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id1, t2.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version1, t2.Approved_Date AS Approved_Date0, t2.Cost_Id, t2.Created_Date AS Created_Date0, t2.External_Approved_Date, t2.FK_External_Record_State_Type_Id, t2.FK_Record_State_Type_Id AS FK_Record_State_Type_Id1, t2.Observations AS Observations0, t2.Obsoleted_Date AS Obsoleted_Date0, t2.PK_Service_Id, t2.PK_Service_Version, t2.Active AS Active0, t2.Approved AS Approved0, t2.Approved_Version AS Approved_Version0, t2.Code AS Code0, t2.Cost, t2.Created AS Created0, t2.Created_By AS Created_By0, t2.Deleted AS Deleted0, t2.End_Date AS End_Date0, t2.FK_Approved_By AS FK_Approved_By0, t2.FK_Business_Event_Id, t2.FK_Diagram_Attachment_Id, t2.FK_Economic_Activity_Id, t2.FK_Life_Event_Id, t2.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id1, t2.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version1, t2.FK_Record_State_Type_Id0 AS FK_Record_State_Type_Id00, t2.FK_Service_Category_Id, t2.FK_Service_Grouping_Id, t2.FK_Service_Type_Id, t2.Generic_1 AS Generic_10, t2.Generic_2 AS Generic_20, t2.Generic_3 AS Generic_30, t2.In_History AS In_History0, t2.Name AS Name1, t2.Processing_Time_Days, t2.Processing_Time_Hours, t2.Processing_Time_Minutes, t2.Processing_Time_Months, t2.Processing_Time_Seconds, t2.Processing_Time_Weeks, t2.Processing_Time_Years, t2.Service_Active, t2.Service_Internal, t2.Start_Date AS Start_Date0, t2.Updated AS Updated0, t2.Updated_By AS Updated_By0, t2.PK_Service_Text_Id, t2.Abreviation AS Abreviation0, t2.Description AS Description0, t2.FK_Service_Id0, t2.FK_Service_Version0, t2.Keywords AS Keywords0, t2.Language AS Language0, t2.Name0 AS Name00, t2.Service_Procedure, t2.Version_Comments AS Version_Comments0
				FROM Points_Of_Care_Organizations AS p
				INNER JOIN Points_Of_Care AS p0 ON p.FK_Point_Of_Care_Id = p0.PK_Point_Of_Care_Id AND p.FK_Point_Of_Care_Version = p0.PK_Point_Of_Care_Version
				-- Points Of Care Texts
				LEFT JOIN Point_Of_Care_Texts AS p1 ON p0.PK_Point_Of_Care_Id = p1.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = p1.FK_Point_Of_Care_Version
				-- Services 
				LEFT JOIN (
					SELECT s2.FK_Service_Id, s2.FK_Service_Version, s2.FK_Point_Of_Care_Id, s2.FK_Point_Of_Care_Version, s2.Approved_Date, s2.Cost_Id, s2.Created_Date, s2.External_Approved_Date, s2.FK_External_Record_State_Type_Id, s2.FK_Record_State_Type_Id, s2.Observations, s2.Obsoleted_Date, s3.PK_Service_Id, s3.PK_Service_Version, s3.Active, s3.Approved, s3.Approved_Version, s3.Code, s3.Cost, s3.Created, s3.Created_By, s3.Deleted, s3.End_Date, s3.FK_Approved_By, s3.FK_Business_Event_Id, s3.FK_Diagram_Attachment_Id, s3.FK_Economic_Activity_Id, s3.FK_Life_Event_Id, s3.Fk_Organization_Parent_Id, s3.Fk_Organization_Parent_Version, s3.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s3.FK_Service_Category_Id, s3.FK_Service_Grouping_Id, s3.FK_Service_Type_Id, s3.Generic_1, s3.Generic_2, s3.Generic_3, s3.In_History, s3.Name, s3.Processing_Time_Days, s3.Processing_Time_Hours, s3.Processing_Time_Minutes, s3.Processing_Time_Months, s3.Processing_Time_Seconds, s3.Processing_Time_Weeks, s3.Processing_Time_Years, s3.Service_Active, s3.Service_Internal, s3.Start_Date, s3.Updated, s3.Updated_By, s4.PK_Service_Text_Id, s4.Abreviation, s4.Description, s4.FK_Service_Id AS FK_Service_Id0, s4.FK_Service_Version AS FK_Service_Version0, s4.Keywords, s4.Language, s4.Name AS Name0, s4.Service_Procedure, s4.Version_Comments
					FROM Services_Points_Of_Care AS s2
					INNER JOIN Services AS s3 ON s2.FK_Service_Id = s3.PK_Service_Id AND s2.FK_Service_Version = s3.PK_Service_Version
					LEFT JOIN Service_Texts AS s4 ON s3.PK_Service_Id = s4.FK_Service_Id AND s3.PK_Service_Version = s4.FK_Service_Version
					WHERE s4.Language = pLanguage AND 
						s2.Approved_Date <= pFilter_Date AND
						((s3.FK_Record_State_Type_Id = vPublished_State) OR 
						(s3.FK_Record_State_Type_Id = vObsoleted_State AND s2.Obsoleted_Date > pFilter_Date ))
				) AS t2 ON p0.PK_Point_Of_Care_Id = t2.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = t2.FK_Point_Of_Care_Version
				WHERE p1.Language = pLanguage AND 
						p.Approved_Date <= pFilter_Date AND
						((p0.FK_Record_State_Type_Id = vPublished_State) OR 
						(p0.FK_Record_State_Type_Id = vObsoleted_State AND p.Obsoleted_Date > pFilter_Date ))
			) AS t1 ON cte.PK_Organization_Id = t1.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t1.FK_Organization_Parent_Version

			WHERE texts.Language = pLanguage

	ORDER BY PK_Organization_Id, PK_Organization_Version, Level;
    
-- CLEAR ALL
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable;
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable_1;
    
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS TodayTreeView;
DELIMITER $$
CREATE  PROCEDURE TodayTreeView
(
	IN pOrganization_Id int,
	IN pOrganization_Version int,
	IN pLevel int,
	IN pLanguage nvarchar(3),
	IN pRecord_State_Type_Id_List nvarchar(128)
)
BEGIN
	DECLARE vPublished_State INT DEFAULT 5;

-- Clear ALL
    DROP TEMPORARY TABLE IF EXISTS vtemp1;
    DROP TEMPORARY TABLE IF EXISTS vtemp2;
    
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_1;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_2;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_3;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_4;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_5;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_6;
    
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable;

	-- Coloca os valores do filtro Record_State_Type_Id_List, numa tabela temp
	CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds AS
    (SELECT CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(input_string, ',', n), ',', -1) AS UNSIGNED) AS Id
		FROM (
		  SELECT pRecord_State_Type_Id_List AS input_string -- Coloque sua string aqui
		) AS t
		JOIN (
		  SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 -- Defina o número máximo de elementos na string
		) AS numbers
		ON CHAR_LENGTH(input_string) - CHAR_LENGTH(REPLACE(input_string, ',', '')) >= n - 1);
	CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_1 AS (SELECT * FROM vListOfRecordStateTypeIds);
	CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_2 AS (SELECT * FROM vListOfRecordStateTypeIds);
    CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_3 AS (SELECT * FROM vListOfRecordStateTypeIds);
    CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_4 AS (SELECT * FROM vListOfRecordStateTypeIds);
    CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_5 AS (SELECT * FROM vListOfRecordStateTypeIds);
    CREATE TEMPORARY TABLE IF NOT EXISTS vListOfRecordStateTypeIds_6 AS (SELECT * FROM vListOfRecordStateTypeIds);
    
	-- Caso não passem o Id/Version 
	-- Vai buscar a entidade Açores
	IF pOrganization_Id IS NULL OR pOrganization_Version IS NULL THEN
		SELECT PK_Organization_Id, PK_Organization_Version
        INTO pOrganization_Id, pOrganization_Version
		FROM Organizations 
		WHERE Fk_Organization_Parent_Id IS NULL AND FK_Record_State_Type_Id = vPublished_State; 
	END IF;

	CREATE TEMPORARY TABLE vMainTempTable (PK_Organization_Id INT, PK_Organization_Version INT, Fk_Organization_Parent_Id INT, Fk_Organization_Parent_Version INT, Level INT,
									Name VARCHAR(1024), Can_Have_Points_Of_Care BIT, Can_Have_Services BIT, Group_Name INT, FK_Record_State_Type_Id INT, Organization_Active BIT,
									Service_Id INT, Service_Version INT, Service_Name VARCHAR(1024), Service_Record_State_Type_Id INT, Service_Active BIT,
									Poc_Id INT, Poc_Version INT, Poc_Name VARCHAR(1024), Poc_Record_State_Type_Id INT, Poc_Active BIT,
									Poc_Service_Id INT, Poc_Service_Version INT, Poc_Service_Name VARCHAR(1024), Poc_Service_Record_State_Type_Id INT, Poc_Service_Active BIT, Poc_Service_External BIT);

	INSERT INTO vMainTempTable (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active)
	WITH RECURSIVE RecursiveCTE (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active)
            AS
            (
                SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version, 0 AS Level,
						e.Can_Have_Points_Of_Care, e.Can_Have_Services, e.Group_Name, e.FK_Record_State_Type_Id, e.Organization_Active
                FROM organizations AS e
                WHERE e.PK_Organization_Id = pOrganization_Id AND e.PK_Organization_Version = pOrganization_Version AND 
						e.FK_Record_State_Type_Id IN (SELECT Id FROM vListOfRecordStateTypeIds_1)

                UNION ALL

                SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version, cte.Level + 1,
						e.Can_Have_Points_Of_Care, e.Can_Have_Services, e.Group_Name, e.FK_Record_State_Type_Id, e.Organization_Active
                FROM organizations AS e
                
				INNER JOIN RecursiveCTE AS cte ON cte.PK_Organization_Id = e.Fk_Organization_Parent_Id AND cte.PK_Organization_Version = e.FK_Organization_Parent_Version
                WHERE cte.Level < pLevel AND 
						 e.FK_Record_State_Type_Id IN (SELECT Id FROM vListOfRecordStateTypeIds_2)
            )
            
            select * from RecursiveCTE;

            SELECT cte.PK_Organization_Id, cte.PK_Organization_Version, cte.Fk_Organization_Parent_Id, cte.Fk_Organization_Parent_Version, cte.Level,
					texts.Name, cte.Can_Have_Points_Of_Care, cte.Can_Have_Services, cte.Group_Name, cte.FK_Record_State_Type_Id, cte.Organization_Active,
					t0.PK_Service_Id as Service_Id, t0.PK_Service_Version as Service_Version, t0.Name0 as Service_Name, t0.FK_Record_State_Type_Id as Service_Record_State_Type_Id, t0.Service_Active, -- service
					t1.PK_Point_Of_Care_Id as Poc_Id, t1.PK_Point_Of_Care_Version as Poc_Version, t1.Name0 as Poc_Name, t1.FK_Record_State_Type_Id as Poc_Record_State_Type_Id, t1.Point_Of_Care_Active as Poc_Active, -- Poc
					t1.PK_Service_Id as Poc_Service_Id, t1.PK_Service_Version as Poc_Service_Version, t1.Name00 as Poc_Service_Name, t1.FK_Record_State_Type_Id00 as Poc_Service_Record_State_Type_Id, t1.Service_Active as Poc_Service_Active, CASE WHEN (t0.Fk_Organization_Parent_Id0 = t1.Fk_Organization_Parent_Id1) THEN 1 ELSE 0 END as Poc_Service_External -- Poc / service
			
			FROM vMainTempTable AS cte
			
			-- Texts
			LEFT JOIN Organization_Texts AS texts ON cte.PK_Organization_Id = texts.FK_Organization_Id AND cte.PK_Organization_Version = texts.FK_Organization_Version
				
			-- Services
			LEFT JOIN (
				SELECT s.FK_Service_Id, s.FK_Service_Version, s.FK_Organization_Parent_Id, s.FK_Organization_Parent_Version, s.Approved_Date, s.Created_Date, s.FK_Parent_Record_State_Type_Id, s.FK_Record_State_Type_Id, s.Observations, s.Obsoleted_Date, s0.PK_Service_Id, s0.PK_Service_Version, s0.Active, s0.Approved, s0.Approved_Version, s0.Code, s0.Cost, s0.Created, s0.Created_By, s0.Deleted, s0.End_Date, s0.FK_Approved_By, s0.FK_Business_Event_Id, s0.FK_Diagram_Attachment_Id, s0.FK_Economic_Activity_Id, s0.FK_Life_Event_Id, s0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, s0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, s0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s0.FK_Service_Category_Id, s0.FK_Service_Grouping_Id, s0.FK_Service_Type_Id, s0.Generic_1, s0.Generic_2, s0.Generic_3, s0.In_History, s0.Name, s0.Processing_Time_Days, s0.Processing_Time_Hours, s0.Processing_Time_Minutes, s0.Processing_Time_Months, s0.Processing_Time_Seconds, s0.Processing_Time_Weeks, s0.Processing_Time_Years, s0.Service_Active, s0.Service_Internal, s0.Start_Date, s0.Updated, s0.Updated_By, s1.PK_Service_Text_Id, s1.Abreviation, s1.Description, s1.FK_Service_Id AS FK_Service_Id0, s1.FK_Service_Version AS FK_Service_Version0, s1.Keywords, s1.Language, s1.Name AS Name0, s1.Service_Procedure, s1.Version_Comments
				FROM Services_Organizations AS s
				INNER JOIN Services AS s0 ON s.FK_Service_Id = s0.PK_Service_Id AND s.FK_Service_Version = s0.PK_Service_Version
				LEFT JOIN Service_Texts AS s1 ON s0.PK_Service_Id = s1.FK_Service_Id AND s0.PK_Service_Version = s1.FK_Service_Version
				WHERE s1.Language = pLanguage AND s0.FK_Record_State_Type_Id in (SELECT Id FROM vListOfRecordStateTypeIds_3)
			) AS t0 ON cte.PK_Organization_Id = t0.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t0.FK_Organization_Parent_Version

			-- Points Of Care
			LEFT JOIN (
				SELECT p.FK_Point_Of_Care_Id, p.FK_Point_Of_Care_Version, p.FK_Organization_Parent_Id, p.FK_Organization_Parent_Version, p.Approved_Date, p.Created_Date, p.FK_Parent_Record_State_Type_Id, p.FK_Record_State_Type_Id, p.Observations, p.Obsoleted_Date, p0.PK_Point_Of_Care_Id, p0.PK_Point_Of_Care_Version, p0.Active, p0.Approved, p0.Approved_Version, p0.Code, p0.Created, p0.Created_By, p0.Deleted, p0.End_Date, p0.FK_Address_Id, p0.FK_Approved_By, p0.FK_Channel_Id, p0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, p0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, p0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, p0.Generic_1, p0.Generic_2, p0.Generic_3, p0.In_History, p0.Name, p0.Point_Of_Care_Active, p0.Start_Date, p0.Updated, p0.Updated_By, p1.PK_Point_Of_Care_Text_Id, p1.Abreviation, p1.Attendance_Restrictions, p1.Description, p1.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id0, p1.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version0, p1.Keywords, p1.Language, p1.Name AS Name0, p1.Opening_Hours, p1.Pre_Conditions, p1.Version_Comments, t2.FK_Service_Id, t2.FK_Service_Version, t2.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id1, t2.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version1, t2.Approved_Date AS Approved_Date0, t2.Cost_Id, t2.Created_Date AS Created_Date0, t2.External_Approved_Date, t2.FK_External_Record_State_Type_Id, t2.FK_Record_State_Type_Id AS FK_Record_State_Type_Id1, t2.Observations AS Observations0, t2.Obsoleted_Date AS Obsoleted_Date0, t2.PK_Service_Id, t2.PK_Service_Version, t2.Active AS Active0, t2.Approved AS Approved0, t2.Approved_Version AS Approved_Version0, t2.Code AS Code0, t2.Cost, t2.Created AS Created0, t2.Created_By AS Created_By0, t2.Deleted AS Deleted0, t2.End_Date AS End_Date0, t2.FK_Approved_By AS FK_Approved_By0, t2.FK_Business_Event_Id, t2.FK_Diagram_Attachment_Id, t2.FK_Economic_Activity_Id, t2.FK_Life_Event_Id, t2.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id1, t2.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version1, t2.FK_Record_State_Type_Id0 AS FK_Record_State_Type_Id00, t2.FK_Service_Category_Id, t2.FK_Service_Grouping_Id, t2.FK_Service_Type_Id, t2.Generic_1 AS Generic_10, t2.Generic_2 AS Generic_20, t2.Generic_3 AS Generic_30, t2.In_History AS In_History0, t2.Name AS Name1, t2.Processing_Time_Days, t2.Processing_Time_Hours, t2.Processing_Time_Minutes, t2.Processing_Time_Months, t2.Processing_Time_Seconds, t2.Processing_Time_Weeks, t2.Processing_Time_Years, t2.Service_Active, t2.Service_Internal, t2.Start_Date AS Start_Date0, t2.Updated AS Updated0, t2.Updated_By AS Updated_By0, t2.PK_Service_Text_Id, t2.Abreviation AS Abreviation0, t2.Description AS Description0, t2.FK_Service_Id0, t2.FK_Service_Version0, t2.Keywords AS Keywords0, t2.Language AS Language0, t2.Name0 AS Name00, t2.Service_Procedure, t2.Version_Comments AS Version_Comments0
				FROM Points_Of_Care_Organizations AS p
				INNER JOIN Points_Of_Care AS p0 ON p.FK_Point_Of_Care_Id = p0.PK_Point_Of_Care_Id AND p.FK_Point_Of_Care_Version = p0.PK_Point_Of_Care_Version
				-- Points Of Care Texts
				LEFT JOIN Point_Of_Care_Texts AS p1 ON p0.PK_Point_Of_Care_Id = p1.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = p1.FK_Point_Of_Care_Version
				-- Services 
				LEFT JOIN (
					SELECT s2.FK_Service_Id, s2.FK_Service_Version, s2.FK_Point_Of_Care_Id, s2.FK_Point_Of_Care_Version, s2.Approved_Date, s2.Cost_Id, s2.Created_Date, s2.External_Approved_Date, s2.FK_External_Record_State_Type_Id, s2.FK_Record_State_Type_Id, s2.Observations, s2.Obsoleted_Date, s3.PK_Service_Id, s3.PK_Service_Version, s3.Active, s3.Approved, s3.Approved_Version, s3.Code, s3.Cost, s3.Created, s3.Created_By, s3.Deleted, s3.End_Date, s3.FK_Approved_By, s3.FK_Business_Event_Id, s3.FK_Diagram_Attachment_Id, s3.FK_Economic_Activity_Id, s3.FK_Life_Event_Id, s3.Fk_Organization_Parent_Id, s3.Fk_Organization_Parent_Version, s3.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s3.FK_Service_Category_Id, s3.FK_Service_Grouping_Id, s3.FK_Service_Type_Id, s3.Generic_1, s3.Generic_2, s3.Generic_3, s3.In_History, s3.Name, s3.Processing_Time_Days, s3.Processing_Time_Hours, s3.Processing_Time_Minutes, s3.Processing_Time_Months, s3.Processing_Time_Seconds, s3.Processing_Time_Weeks, s3.Processing_Time_Years, s3.Service_Active, s3.Service_Internal, s3.Start_Date, s3.Updated, s3.Updated_By, s4.PK_Service_Text_Id, s4.Abreviation, s4.Description, s4.FK_Service_Id AS FK_Service_Id0, s4.FK_Service_Version AS FK_Service_Version0, s4.Keywords, s4.Language, s4.Name AS Name0, s4.Service_Procedure, s4.Version_Comments
					FROM Services_Points_Of_Care AS s2
					INNER JOIN Services AS s3 ON s2.FK_Service_Id = s3.PK_Service_Id AND s2.FK_Service_Version = s3.PK_Service_Version
					LEFT JOIN Service_Texts AS s4 ON s3.PK_Service_Id = s4.FK_Service_Id AND s3.PK_Service_Version = s4.FK_Service_Version
					WHERE s4.Language = pLanguage AND s3.FK_Record_State_Type_Id in (SELECT Id FROM vListOfRecordStateTypeIds_4)
				) AS t2 ON p0.PK_Point_Of_Care_Id = t2.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = t2.FK_Point_Of_Care_Version
				WHERE p1.Language = pLanguage AND p0.FK_Record_State_Type_Id in (SELECT Id FROM vListOfRecordStateTypeIds_5)
			) AS t1 ON cte.PK_Organization_Id = t1.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t1.FK_Organization_Parent_Version

			WHERE texts.Language = pLanguage;

			-- Verifica se tem entidades que não estejam em estado publicado e acrescenta os filho da versão antiga
			if ((SELECT Count(*) FROM vListOfRecordStateTypeIds) > 1) THEN
				CREATE TEMPORARY TABLE vtemp1 (PK_Organization_Id INT, PK_Organization_Version INT, FK_Record_State_Type_Id INT, Name VARCHAR(1024));
				-- Coloca numa temp as entidades que não estejam publicadas e são versões já de existentes
                INSERT INTO vtemp1 
				SELECT PK_Organization_Id, PK_Organization_Version, FK_Record_State_Type_Id, Name
				-- INTO vtemp1
				FROM vMainTempTable 
				WHERE FK_Record_State_Type_Id <> vPublished_State AND PK_Organization_Version > 1;
				
				IF ((SELECT Count(*) FROM vtemp1) > 0) THEN
					CREATE TEMPORARY TABLE vtemp2 (PK_Organization_Id INT, PK_Organization_Version INT, Fk_Organization_Parent_Id INT, Fk_Organization_Parent_Version INT, Level INT,
										Name VARCHAR(1024), Can_Have_Points_Of_Care BIT, Can_Have_Services BIT, Group_Name INT, FK_Record_State_Type_Id INT, Organization_Active BIT,
                                        Service_Id INT, Service_Version INT, Service_Name VARCHAR(1024), Service_Record_State_Type_Id INT, Service_Active BIT,
                                        Poc_Id INT, Poc_Version INT, Poc_Name VARCHAR(1024), Poc_Record_State_Type_Id INT, Poc_Active BIT,
                                        Poc_Service_Id INT, Poc_Service_Version INT, Poc_Service_Name VARCHAR(1024), Poc_Service_Record_State_Type_Id INT, Poc_Service_Active BIT, Poc_Service_External BIT);
                    -- Vai buscar à temp principal as versões publicadas das entidades, bem como serviços, pocs etc, selecionadas no passo anterior
					INSERT INTO vtemp2
                    SELECT *
					FROM vMainTempTable AS cte
					WHERE cte.PK_Organization_Id in (select PK_Organization_Id from vtemp1)
						AND cte.FK_Record_State_Type_Id = vPublished_State;

					-- Actualiza essas entidades com as versões e estados, das versões não publicadas
					UPDATE vtemp2 
                    INNER JOIN vtemp1
                    ON vtemp1.PK_Organization_Id = vtemp2.PK_Organization_Id
					SET PK_Organization_Version = vtemp1.PK_Organization_Version, 
						Name = vtemp1.Name, 
                        FK_Record_State_Type_Id = vtemp1.FK_Record_State_Type_Id;
					
					-- Acrescenta essas entidades na temp principal
					INSERT INTO vMainTempTable SELECT * FROM vtemp2;
				END IF;
			END IF;

			-- Retorna toda a informação
            select '1';
			SELECT * FROM vMainTempTable 
				ORDER BY PK_Organization_Id, PK_Organization_Version, Level;
			select '2';
			
	-- Clear ALL
    DROP TEMPORARY TABLE IF EXISTS vtemp1;
    DROP TEMPORARY TABLE IF EXISTS vtemp2;
    
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_1;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_2;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_3;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_4;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_5;
    DROP TEMPORARY TABLE IF EXISTS vListOfRecordStateTypeIds_6;
    
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable;
            
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS ReportOrganizationCount;
DELIMITER $$
CREATE PROCEDURE ReportOrganizationCount
(
	IN pOrganization_Id int,
	IN pOrganization_Version int,
	OUT pReturn INT
)
BEGIN

	DECLARE vPublished_State INT DEFAULT 5;

	-- Caso não passem o Id/Version 
	-- Vai buscar a entidade Açores
	IF (pOrganization_Id IS NULL OR pOrganization_Version IS NULL) THEN
		SELECT PK_Organization_Id, PK_Organization_Version
        INTO pOrganization_Id, pOrganization_Version
		FROM Organizations 
		WHERE Fk_Organization_Parent_Id IS NULL AND FK_Record_State_Type_Id = vPublished_State; 
	END IF;

	WITH RECURSIVE RecursiveCTE (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version)
				AS
				(
					SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version
					FROM organizations AS e
					WHERE e.PK_Organization_Id = pOrganization_Id AND e.PK_Organization_Version = pOrganization_Version AND 
							e.FK_Record_State_Type_Id = vPublished_State

					UNION ALL

					SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version
					FROM organizations AS e
                
					INNER JOIN RecursiveCTE AS cte ON cte.PK_Organization_Id = e.Fk_Organization_Parent_Id AND cte.PK_Organization_Version = e.FK_Organization_Parent_Version
					WHERE e.FK_Record_State_Type_Id = vPublished_State
				)
	
	SELECT COUNT(*) INTO pReturn FROM RecursiveCTE;
END $$
DELIMITER ;

