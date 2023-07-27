USE `CES.API.Database`;

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