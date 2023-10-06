USE `CES.API.Database`;

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

ALTER TABLE Import_Status
    ADD CONSTRAINT FK_Import_Status_Users FOREIGN KEY (FK_User_Id) REFERENCES Users (PK_User_Id);