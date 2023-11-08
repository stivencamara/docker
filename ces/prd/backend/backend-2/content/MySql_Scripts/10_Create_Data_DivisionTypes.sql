USE `CES.API.Database`;


-- Check if the table is empty
SELECT COUNT(*) INTO @count FROM Division_Types;

	SET @LastDivisionTypeIdSave = -1;

	INSERT INTO Division_Types (Name, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Não Aplicável',now(),1,null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastDivisionTypeIdSave = LAST_INSERT_ID();
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'pt','Não Aplicável',null FROM dual WHERE @count = 0;
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'en','Not Applicable',null FROM dual WHERE @count = 0;

	INSERT INTO Division_Types (Name, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ilha',now(),1,null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastDivisionTypeIdSave = LAST_INSERT_ID();
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'pt','Ilha',null FROM dual WHERE @count = 0;
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'en','Island',null FROM dual WHERE @count = 0;

	INSERT INTO Division_Types (Name, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Concelho',now(),1,null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastDivisionTypeIdSave = LAST_INSERT_ID();
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'pt','Concelho',null FROM dual WHERE @count = 0;
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'en','County',null FROM dual WHERE @count = 0;

	INSERT INTO Division_Types (Name, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Freguesia',now(),1,null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastDivisionTypeIdSave = LAST_INSERT_ID();
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'pt','Freguesia',null FROM dual WHERE @count = 0;
	INSERT INTO Division_Type_Texts (FK_Division_Type_Id, Language, Name, Description) SELECT(SELECT @LastDivisionTypeIdSave),'en','Parish',null FROM dual WHERE @count = 0;
