USE `CES.API.Database`;

-- Check if the table is empty
SELECT COUNT(*) INTO @count FROM Service_Categories;

SET @LastServiceCategoryIdSave = -1;
SET @LastServiceCategoryParentIdSave = -1;

INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ambiente e Território', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ambiente e Território',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Agricultura', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Agricultura',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Pesca', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Pesca',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Caça', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Caça',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ordenamento do território', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ordenamento do território',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ambiente', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ambiente',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and Territory',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Casa', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Casa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Mudar de casa', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Mudar de casa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Arrendar casa', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Arrendar casa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Comprar e vender casa', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Comprar e vender casa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Alojamento local', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Alojamento local',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Serviços de água, energia e telecomunicações', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Serviços de água, energia e telecomunicações',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Home',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Cidadania e Documentos', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cidadania e Documentos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Certidões', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Certidões',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Cartão de cidadão', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cartão de cidadão',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Passaporte', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Passaporte',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Outros Documentos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Outros Documentos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Identificação digital', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Identificação digital',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Eleições', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Eleições',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Nacionalidade', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Nacionalidade',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Atendimento em serviços públicos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Atendimento em serviços públicos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Direitos e deveres', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos e deveres',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and Documents',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Cultura, Turismo e Lazer', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cultura, Turismo e Lazer',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, Tourism and Leisure',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Cultura', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cultura',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, Tourism and Leisure',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Desporto', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Desporto',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, Tourism and Leisure',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Turismo', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Turismo',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, Tourism and Leisure',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Viagens', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viagens',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, Tourism and Leisure',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Dinheiro e Impostos', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Dinheiro e Impostos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Impostos sobre habitação', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre habitação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Impostos sobre trabalho', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre trabalho',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Impostos sobre veículos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre veículos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Taxas de justiça', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Taxas de justiça',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Impostos sobre negócios', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre negócios',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Poupanças e investimentos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Poupanças e investimentos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and Taxes',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Educação, Ciência e Tecnologia', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Educação, Ciência e Tecnologia',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ensino pré-escolar', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino pré-escolar',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ensino obrigatório', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino obrigatório',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ensino superior', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino superior',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ensino profissional', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino profissional',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ensino especial', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino especial',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Estudar no estrangeiro', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Estudar no estrangeiro',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Ciência e investigação', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ciência e investigação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Empresas, Negócios e Fundações', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Empresas, Negócios e Fundações',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Criar e gerir empresas', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Criar e gerir empresas',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Recursos humanos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Recursos humanos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Propriedade intelectual', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Propriedade intelectual',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Internacionalização de empresas e negócios', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Internacionalização de empresas e negócios',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Licenciamento de atividades económicas', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Licenciamento de atividades económicas',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Financiamento de empresas e negócios', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Financiamento de empresas e negócios',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Fundações, associações e cooperativas', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Fundações, associações e cooperativas',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, Businesses and Foundations',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Estrangeiros em Portugal', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Estrangeiros em Portugal',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Foreigners in Portugal',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Cidadãos europeus em Portugal', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cidadãos europeus em Portugal',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Foreigners in Portugal',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Migrantes em Portugal', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Migrantes em Portugal',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Foreigners in Portugal',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Família', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Família',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Apoios e subsídios à família', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Apoios e subsídios à família',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Crianças e jovens', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Crianças e jovens',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Casamento e união de facto', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Casamento e união de facto',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Divórcio', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Divórcio',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Nascimento', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Nascimento',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Morte', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Morte',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Velhice', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Velhice',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Leis, Justiça e Defesa', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Leis, Justiça e Defesa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Leis e tribunais', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Leis e tribunais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Meios alternativos de resolução de conflitos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Meios alternativos de resolução de conflitos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Queixas e reclamações', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Queixas e reclamações',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Direitos do consumidor', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos do consumidor',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Forças armadas', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Forças armadas',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Forças de segurança', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Forças de segurança',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Saúde', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Apoios e subsídios - saúde', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Apoios e subsídios - saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Assistência médica', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Assistência médica',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Planeamento familiar', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Planeamento familiar',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Medicamentos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Medicamentos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Invalidez e deficiência', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Invalidez e deficiência',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Saúde em viagem', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Saúde em viagem',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Deslocação de doentes', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Deslocação de doentes',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Trabalho', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Trabalho',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Procurar emprego', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Procurar emprego',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Trabalhadores independentes', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Trabalhadores independentes',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Formação profissional', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Formação profissional',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Direitos e deveres de trabalhadores', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos e deveres de trabalhadores',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Desemprego', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Desemprego',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Qualificações profissionais', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Qualificações profissionais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Reforma', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Reforma',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Transportes e Veículos', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Transportes e Veículos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Documentos de veículos e condutores', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Documentos de veículos e condutores',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Veículos pessoais', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Veículos pessoais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Transportes públicos e coletivos', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Transportes públicos e coletivos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Veículos profissionais', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Veículos profissionais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Infrações rodoviárias', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Infrações rodoviárias',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and Vehicles',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Viajar e Viver no Estrangeiro', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viajar e Viver no Estrangeiro',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Traveling and Living Abroad',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Emigrar', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Emigrar',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Traveling and Living Abroad',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Viver temporariamente no estrangeiro', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viver temporariamente no estrangeiro',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Traveling and Living Abroad',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Viajar para o estrangeiro', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viajar para o estrangeiro',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Traveling and Living Abroad',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Administração Interna', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Administração Interna',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Recrutamento', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Recrutamento',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Férias', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Férias',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Deslocações e Estadias', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Deslocações e Estadias',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Aquisições', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Aquisições',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Contratação Pública', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Contratação Pública',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Avaliação de Desempenho', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Avaliação de Desempenho',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Declarações', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Declarações',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Formação e Desenvolvimento', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Formação e Desenvolvimento',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Outros', (SELECT @LastServiceCategoryParentIdSave), now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Outros',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internal Administration',null FROM dual WHERE @count = 0;


INSERT INTO Service_Categories (name, FK_Service_Category_Parent_Id, Created, FK_Created_By, Updated, FK_Updated_By, Active, Deleted) SELECT 'Não Aplicável', null, now(),1,null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceCategoryParentIdSave = LAST_INSERT_ID();
SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Não Aplicável',null FROM dual WHERE @count = 0;
INSERT INTO Service_Category_Texts (FK_Service_Category_id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Not applicable',null FROM dual WHERE @count = 0;

