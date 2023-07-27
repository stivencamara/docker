USE `CES.API.Database`;

-- Check if the table is empty
SELECT COUNT(*) INTO @count FROM Service_Types;

SET @LastServiceTypeIdSave = -1;

INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços públicos gerais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços públicos gerais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General public services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Órgãos executivos e legislativos, assuntos financeiros e fiscais, assuntos externos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Órgãos executivos e legislativos, assuntos financeiros e fiscais, assuntos externos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Executive and legislative organs, financial and fiscal affairs, external affairs',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Órgãos executivos e legislativos (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Órgãos executivos e legislativos (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Executive and legislative organs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos financeiros e fiscais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos financeiros e fiscais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Financial and fiscal affairs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos Externos (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos Externos (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','External affairs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ajuda económica externa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ajuda económica externa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Foreign economic aid',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ajuda económica aos países em desenvolvimento e aos países em transição (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ajuda económica aos países em desenvolvimento e aos países em transição (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Economic aid to developing countries and countries in transition  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ajuda económica canalizada através de organizações internacionais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ajuda económica canalizada através de organizações internacionais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Economic aid routed through international organizations  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços gerais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços gerais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços gerais de pessoal (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços gerais de pessoal (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General personnel services  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços gerais de planeamento e estatística (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços gerais de planeamento e estatística (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Overall planning and statistical services  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Outros serviços gerais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Outros serviços gerais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Other general services  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Investigação fundamental',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Investigação fundamental',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Basic research',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Serviços públicos gerais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Serviços públicos gerais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D General public services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços públicos gerais, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços públicos gerais, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General public services n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Operações de dívida pública',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Operações de dívida pública',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Public debt transactions',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Operações de dívida pública (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Operações de dívida pública (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Public debt transactions  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transferências de carácter geral entre os diferentes níveis da administração pública',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transferências de carácter geral entre os diferentes níveis da administração pública',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Transfers of a general character between different levels of government',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Defesa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Defesa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Defence',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Defesa militar',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Defesa militar',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Military defence',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Defesa civil',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Defesa civil',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Civil defence',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ajuda militar estrangeira',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ajuda militar estrangeira',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Foreign military aid',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Defesa',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Defesa',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Defence',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Defesa, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Defesa, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Defence n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ordem pública e segurança',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ordem pública e segurança',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Public order and safety',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços de polícia',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços de polícia',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Police services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços de proteção contra incêndios',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços de proteção contra incêndios',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Fire-protection services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Tribunais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Tribunais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Law courts',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Prisões',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Prisões',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Prisons',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Ordem pública e segurança',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Ordem pública e segurança',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Public order and safety',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ordem e segurança públicas, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ordem e segurança públicas, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Public order and safety n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos económicos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos económicos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Economic affairs',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos económicos, comerciais e laborais gerais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos económicos, comerciais e laborais gerais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General economic, commercial and labour affairs',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos económicos e comerciais gerais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos económicos e comerciais gerais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General economic and commercial affairs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos Gerais do Trabalho (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos Gerais do Trabalho (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General labour affairs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Agricultura, silvicultura, pesca e caça',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Agricultura, silvicultura, pesca e caça',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Agriculture, forestry, fishing and hunting',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Agricultura (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Agricultura (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Agriculture  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Silvicultura (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Silvicultura (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Forestry  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Pesca e caça (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Pesca e caça (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Fishing and hunting  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Combustível e energia',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Combustível e energia',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Fuel and energy',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Carvão e outros combustíveis minerais sólidos (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Carvão e outros combustíveis minerais sólidos (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Coal and other solid mineral fuels  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Petróleo e gás natural (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Petróleo e gás natural (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Petroleum and natural gas  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Combustível nuclear (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Combustível nuclear (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Nuclear fuel  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Outros combustíveis (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Outros combustíveis (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Other fuels  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Eletricidade (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Eletricidade (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Electricity  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Energia não elétrica (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Energia não elétrica (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Non-electric energy  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Mineração, manufatura e construção',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Mineração, manufatura e construção',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Mining, manufacturing and construction',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Exploração mineira de recursos minerais que não combustíveis minerais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Exploração mineira de recursos minerais que não combustíveis minerais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Mining of mineral resources other than mineral fuels  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Fabrico (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Fabrico (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Manufacturing  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Construção (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Construção (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Construction  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transportes',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Transport',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transporte rodoviário (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transporte rodoviário (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Road transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transporte por água (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transporte por água (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Water transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transporte ferroviário (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transporte ferroviário (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Railway transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes aéreos (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transportes aéreos (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Air transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Gasodutos e outros transportes (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Gasodutos e outros transportes (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Pipeline and other transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Comunicação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Comunicação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Communication',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Outras indústrias',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Outras indústrias',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Other industries',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Comércio, armazenagem e armazenagem (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Comércio, armazenagem e armazenagem (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Distributive trades, storage and warehousing  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Hotéis e restaurantes (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Hotéis e restaurantes (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Hotels and restaurants  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Turismo (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Turismo (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Tourism  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Projetos de desenvolvimento polivalente (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Projetos de desenvolvimento polivalente (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Multi-purpose development projects  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Assuntos económicos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Assuntos económicos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Economic affairs',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Assuntos económicos, comerciais e laborais gerais (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Assuntos económicos, comerciais e laborais gerais (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D General economic, commercial and labour affairs  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Agricultura, silvicultura, pesca e caça (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Agricultura, silvicultura, pesca e caça (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Agriculture, forestry, fishing and hunting  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Combustível e energia (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Combustível e energia (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Fuel and energy  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Mineração, manufatura e construção (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Mineração, manufatura e construção (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Mining, manufacturing and construction  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Transportes de I&D (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Transportes de I&D (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Transport  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Comunicação de I&D (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Comunicação de I&D (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Communication  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Outras indústrias (CS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Outras indústrias (CS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Other industries  (CS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Assuntos económicos, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Assuntos económicos, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Economic affairs n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Proteção do ambiente',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Proteção do ambiente',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Environmental protection',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Gestão de resíduos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Gestão de resíduos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Waste management',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Gestão das águas residuais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Gestão das águas residuais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Waste water management',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Redução da poluição',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Redução da poluição',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Pollution abatement',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Proteção da biodiversidade e da paisagem',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Proteção da biodiversidade e da paisagem',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Protection of biodiversity and landscape',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Proteção do ambiente',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Proteção do ambiente',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Environmental protection',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Proteção do ambiente, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Proteção do ambiente, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Environmental protection n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Alojamento e amenidades comunitárias',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Alojamento e amenidades comunitárias',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Housing and community amenities',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desenvolvimento habitacional',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Desenvolvimento habitacional',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Housing development',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desenvolvimento comunitário',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Desenvolvimento comunitário',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Community development',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Abastecimento de água',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Abastecimento de água',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Water supply',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Iluminação pública',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Iluminação pública',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Street lighting',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Habitação e equipamentos comunitários',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Habitação e equipamentos comunitários',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Housing and community amenities',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Alojamento e equipamentos comunitários, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Alojamento e equipamentos comunitários, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Housing and community amenities n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Produtos médicos, aparelhos e equipamento',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Produtos médicos, aparelhos e equipamento',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Medical products, appliances and equipment',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Produtos farmacêuticos (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Produtos farmacêuticos (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Pharmaceutical products  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Outros produtos médicos (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Outros produtos médicos (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Other medical products  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Aparelhos e equipamentos terapêuticos (EI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Aparelhos e equipamentos terapêuticos (EI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Therapeutic appliances and equipment  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços ambulatoriais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços ambulatoriais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Outpatient services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços médicos gerais (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços médicos gerais (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General medical services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços médicos especializados (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços médicos especializados (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Specialized medical services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços dentários (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços dentários (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Dental services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços paramédicos (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços paramédicos (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Paramedical services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços hospitalares',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços hospitalares',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Hospital services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços hospitalares gerais (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços hospitalares gerais (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','General hospital services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços hospitalares especializados (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços hospitalares especializados (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Specialized hospital services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços médicos e de maternidade (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços médicos e de maternidade (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Medical and maternity centre services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços domiciliários de enfermagem e convalescença (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços domiciliários de enfermagem e convalescença (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Nursing and convalescent home services  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços públicos de saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços públicos de saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Public health services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Saúde',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Saúde',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Health',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Saúde, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Saúde, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Health n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Recreação, cultura e religião',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Recreação, cultura e religião',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Recreation, culture and religion',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços recreativos e desportivos',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços recreativos e desportivos',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Recreational and sporting services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços culturais',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços culturais',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Cultural services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços de radiodifusão e edição',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços de radiodifusão e edição',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Broadcasting and publishing services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços religiosos e outros serviços comunitários',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços religiosos e outros serviços comunitários',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Religious and other community services',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Recreação, cultura e religião',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Recreação, cultura e religião',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Recreation, culture and religion',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Recreação, cultura e religião, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Recreação, cultura e religião, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Recreation, culture and religion n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Formação Académica',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Formação Académica',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino pré-primário e primário',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino pré-primário e primário',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Pre-primary and primary education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino primário (SI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino primário (SI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Primary education  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino secundário',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino secundário',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Secondary education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino secundário inferior (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino secundário inferior (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Lower-secondary education  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino secundário superior (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino secundário superior (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Upper-secondary education  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino pós-secundário não superior',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino pós-secundário não superior',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Post-secondary non-tertiary education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Ensino superior',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Ensino superior',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Tertiary education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Primeira fase do ensino superior (EI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Primeira fase do ensino superior (EI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','First stage of tertiary education  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Segunda fase do ensino superior (EI)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Segunda fase do ensino superior (EI)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Second stage of tertiary education  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação não definível por nível',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Educação não definível por nível',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Education not definable by level',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Serviços subsidiários à educação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Serviços subsidiários à educação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Subsidiary services to education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação em I&D',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Educação em I&D',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Education',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Educação, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Educação, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Education n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Proteção social',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Proteção social',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Social protection',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Doença e incapacidade',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Doença e incapacidade',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Sickness and disability',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Doença (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Doença (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Sickness  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Deficiência (IS)',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Deficiência (IS)',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Disability  (IS)',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Velhice',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Velhice',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Old age',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Sobreviventes',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Sobreviventes',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Survivors',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Família e crianças',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Família e crianças',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Family and children',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Desemprego',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Desemprego',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Unemployment',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Habitação',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Habitação',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Housing',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Exclusão social, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Exclusão social, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Social exclusion n.e.c.',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'I&D Proteção social',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','I&D Proteção social',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','R&D Social protection',null FROM dual WHERE @count = 0;


INSERT INTO Service_Types (name, Created, Created_By, Updated, Updated_By, Active, Deleted) SELECT 'Proteção social, n.e.',now(),'ces',null,null,1,0 FROM dual WHERE @count = 0;
SET @LastServiceTypeIdSave = LAST_INSERT_ID();
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'pt','Proteção social, n.e.',null FROM dual WHERE @count = 0;
INSERT INTO Service_Type_Texts (FK_Service_Type_id, Language, Name, Description) SELECT (SELECT @LastServiceTypeIdSave),'en','Social protection n.e.c.',null FROM dual WHERE @count = 0;
