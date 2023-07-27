USE `CES.API.Database`;

-- Check if the table is empty
SELECT COUNT(*) INTO @count FROM Service_Categories;

SET @LastServiceCategoryIdSave = -1;
    
	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cidadania e documentos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cidadania e documentos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizenship and documents',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Certidões',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Certidões',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Certificates',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cartão de Cidadão',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cartão de Cidadão',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Citizen Card',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Passaporte',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Passaporte',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Passport',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Outros documentos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Outros documentos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Other documents',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Identificação digital',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Identificação digital',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Digital identification',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Eleições',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Eleições',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Elections',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Nacionalidade',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Nacionalidade',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Nationality',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Atendimento em serviços públicos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Atendimento em serviços públicos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Attendance in public services',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Direitos e deveres',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos e deveres',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Rights and duties',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Casa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Casa',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','House',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Mudar de casa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Mudar de casa',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Moving house',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Arrendar casa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Arrendar casa',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Rent a house',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Comprar e vender casa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Comprar e vender casa',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Buy and sell house',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Alojamento local',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Alojamento local',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Local accommodation',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços de água, energia e telecomunicações',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Serviços de água, energia e telecomunicações',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Water, energy and telecommunications services',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação, Ciência e tecnologia',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Educação, Ciência e tecnologia',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Education, Science and Technology',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino pré-escolar',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino pré-escolar',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Pre-school education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino obrigatório',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino obrigatório',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Compulsory education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino superior',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino superior',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Higher education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino profissional',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino profissional',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Vocational education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino especial',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ensino especial',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Special education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação para adultos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Educação para adultos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Adult education',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Estudar no estrangeiro',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Estudar no estrangeiro',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Study abroad',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ciência e investigação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ciência e investigação',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Science and research',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Família',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Família',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Apoios e subsídios à família',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Apoios e subsídios à família',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family support and allowances',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Crianças e jovens',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Crianças e jovens',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Children and young people',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Casamento e união de facto',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Casamento e união de facto',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Marriage and de facto union',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Divórcio',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Divórcio',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Divorce',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Nascimento',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Nascimento',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Birth',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Morte',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Morte',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Death',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Velhice',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Velhice',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Oldness',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cultura, turismo e lazer',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cultura, turismo e lazer',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture, tourism and leisure',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cultura',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cultura',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Culture',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desporto',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Desporto',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Sport',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Turismo',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Turismo',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Tourism',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Viagens',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viagens',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Travel',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Trabalho',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Trabalho',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Work',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Procurar emprego',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Procurar emprego',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Search for a job',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Trabalhadores independentes',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Trabalhadores independentes',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Self-employed',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Formação profissional',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Formação profissional',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Vocational training',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Direitos e deveres de trabalhadores',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos e deveres de trabalhadores',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Rights and duties of workers',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desemprego',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Desemprego',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Unemployment',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Qualificações profissionais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Qualificações profissionais',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Professional qualifications',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Reforma',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Reforma',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Reform',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Saúde',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Apoios e subsídios - saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Apoios e subsídios - saúde',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Support and subsidies - health',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assistência médica',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Assistência médica',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Health care',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Planeamento familiar',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Planeamento familiar',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Family planning',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Medicamentos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Medicamentos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Medicines',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Invalidez e deficiência',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Invalidez e deficiência',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Disability and disability',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes e veículos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Transportes e veículos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Transport and vehicles',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Documentos de veículos e condutores',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Documentos de veículos e condutores',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Vehicle and driver documents',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Veículos pessoais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Veículos pessoais',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Personal vehicles',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes públicos e coletivos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Transportes públicos e coletivos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Public and public transport',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Veículos profissionais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Veículos profissionais',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Professional vehicles',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Infrações rodoviárias',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Infrações rodoviárias',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Road traffic offences',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Leis, Justiça e Defesa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Leis, Justiça e Defesa',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws, Justice and Defense',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Leis e tribunais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Leis e tribunais',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Laws and courts',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Meios alternativos de resolução de conflitos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Meios alternativos de resolução de conflitos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Alternative means of conflict resolution',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Queixas e reclamações',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Queixas e reclamações',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Complaints and complaints',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Direitos do consumidor',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Direitos do consumidor',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Consumer rights',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Forças armadas',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Forças armadas',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Armed forces',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Forças de segurança',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Forças de segurança',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Security forces',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Dinheiro e impostos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Dinheiro e impostos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Money and taxes',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Impostos sobre habitação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre habitação',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Housing taxes',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Impostos sobre trabalho',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre trabalho',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Taxes on labour',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Impostos sobre veículos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre veículos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Vehicle taxes',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Taxas de justiça',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Taxas de justiça',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Justice fees',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Impostos sobre negócios',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Impostos sobre negócios',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Business taxes',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Poupanças e investimentos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Poupanças e investimentos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Savings and investments',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Viajar e viver no estrangeiro',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viajar e viver no estrangeiro',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Travelling and living abroad',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Emigrar',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Emigrar',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Emigrate',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Viver temporariamente no estrangeiro',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viver temporariamente no estrangeiro',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Living temporarily abroad',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Viajar para o estrangeiro',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Viajar para o estrangeiro',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Travel abroad',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Estrangeiros em Portugal',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Estrangeiros em Portugal',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Foreigners in Portugal',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Cidadãos europeus em Portugal',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Cidadãos europeus em Portugal',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','European citizens in Portugal',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Migrantes em Portugal',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Migrantes em Portugal',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Migrants in Portugal',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ambiente e território',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ambiente e território',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment and territory',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Agricultura',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Agricultura',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Agriculture',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Pesca',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Pesca',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Fishing',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Caça',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Caça',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Hunting',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ordenamento do território',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ordenamento do território',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Spatial planning',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ambiente',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Ambiente',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Environment',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Empresas, negócios e fundações',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Empresas, negócios e fundações',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Companies, businesses and foundations',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Criar e gerir empresas',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Criar e gerir empresas',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Create and manage businesses',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Recursos humanos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Recursos humanos',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Human resources',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Propriedade intelectual',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Propriedade intelectual',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Intellectual property',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Internacionalização de empresas e negócios',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Internacionalização de empresas e negócios',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Internationalization of companies and businesses',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Licenciamento de atividades económicas',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Licenciamento de atividades económicas',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Licensing of economic activities',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Financiamento de empresas e negócios',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Financiamento de empresas e negócios',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Financing of companies and businesses',null FROM dual WHERE @count = 0;


	INSERT INTO Service_Categories (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Fundações, associações e cooperativas',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
	SET @LastServiceCategoryIdSave = LAST_INSERT_ID();
    INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'pt','Fundações, associações e cooperativas',null FROM dual WHERE @count = 0;
	INSERT INTO Service_Category_Texts (FK_Service_Category_Id, Language, Name, Description) SELECT (SELECT @LastServiceCategoryIdSave),'en','Foundations, associations and cooperatives',null FROM dual WHERE @count = 0;
