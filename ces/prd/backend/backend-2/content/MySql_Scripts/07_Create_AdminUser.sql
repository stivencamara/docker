USE `CES.API.Database`;

SELECT COUNT(*) INTO @count FROM Users WHERE PK_User_Id = 1;

INSERT INTO Users (PK_User_Id, Username, Email, Name, Display_Name, Password, Is_GRA_User, Wrong_Tries, Blocked, Language, Notification_System, Notification_Email, Last_Login, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted)
SELECT 1, 'sysAdmin@azores.gov.pt', 'sysAdmin@azores.gov.pt', 'System Admin', 'System Admin', '', 0, 0, 0, 'pt', 1, 1, null, now(), 1, null, null, 1, 0  FROM dual WHERE @count = 0;