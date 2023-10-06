USE `CES.API.Database`;

-- Check if the table is empty
SELECT COUNT(*) INTO @count FROM Service_Types;

SET @LastServiceTypeIdSave = -1;

INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ambiente',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ambiente',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Environment',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desporto',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Desporto',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Sport',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Turismo',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Turismo',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Tourism',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Educação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Emprego',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Emprego',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Job',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Agricultura',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Agricultura',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Agriculture',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Comunicações',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Comunicações',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Communications',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ciencia e Tecnologia',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ciencia e Tecnologia',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Science and technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transição Digital',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transição Digital',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Digital Transition',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Energia',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Energia',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Energy',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Mar',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Mar',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Sea',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Finanças',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Finanças',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Finance',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Infraestruturas',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Infraestruturas',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Infrastructures',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transportes',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Transport',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cultura',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Cultura',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Culture',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Segurança Social',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Segurança Social',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Social Security',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Defesa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Defesa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Empresas e Indústria',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Empresas e Indústria',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Companies and Industry',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cidadania',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Cidadania',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Citizenship',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Administração Interna',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Administração Interna',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Não Aplicável',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Não Aplicável',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Not Applicable',null FROM dual WHERE @count = 0;


