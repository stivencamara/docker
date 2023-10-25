USE `CES.API.Database`;

DROP PROCEDURE IF EXISTS Clear_Jobs;

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
END;


DROP PROCEDURE IF EXISTS Unlock_Timer_Job;

CREATE PROCEDURE Unlock_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64),
	IN pMachine_Name nvarchar(64)
)
BEGIN
	DECLARE pReturn BIT;

     IF EXISTS (SELECT * FROM Control_Timer_Jobs  
				WHERE PK_Timer_Job_Id = pTimer_Job_Id AND Machine_Name = pMachine_Name) THEN
            UPDATE Control_Timer_Jobs
                SET Machine_Name = NULL, Created = NULL
                WHERE PK_Timer_Job_Id = pTimer_Job_Id;

            SET pReturn = 1;
     ELSE
        SET pReturn = 0;
	END IF;

	SELECT pReturn;
END;


DROP PROCEDURE IF EXISTS Register_Timer_Job;

CREATE PROCEDURE Register_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64)
)
BEGIN
     IF NOT EXISTS (SELECT * FROM Control_Timer_Jobs 
					WHERE PK_Timer_Job_Id = pTimer_Job_Id) THEN
            INSERT INTO Control_Timer_Jobs (PK_Timer_Job_Id) VALUES(pTimer_Job_Id);
	END IF;
END;


DROP PROCEDURE IF EXISTS Lock_Timer_Job;

CREATE PROCEDURE Lock_Timer_Job
(
	IN pTimer_Job_Id nvarchar(64),
	IN pMachine_Name nvarchar(64)
)
BEGIN
	DECLARE pReturn BIT;

     IF EXISTS (SELECT * FROM Control_Timer_Jobs WHERE 
				PK_Timer_Job_Id = pTimer_Job_Id AND Machine_Name IS NULL) THEN
		UPDATE Control_Timer_Jobs
			SET Machine_Name = pMachine_Name, Created = now()
			WHERE PK_Timer_Job_Id = pTimer_Job_Id;

		SET pReturn = 1;
     ELSE
        SET pReturn = 0;
	END IF;

	SELECT pReturn;
END;

DROP PROCEDURE IF EXISTS DateTreeView;

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

    CREATE TEMPORARY TABLE vMainTempTable (PK_Organization_Id INT, PK_Organization_Version INT, Fk_Organization_Parent_Id INT, Fk_Organization_Parent_Version INT, Level INT,
									Name VARCHAR(1024), Can_Have_Points_Of_Care BIT, Can_Have_Services BIT, Group_Name INT, FK_Record_State_Type_Id INT, Organization_Active BIT,
									Service_Id INT, Service_Version INT, Service_Name VARCHAR(1024), Service_Record_State_Type_Id INT, Service_Active BIT,
									Poc_Id INT, Poc_Version INT, Poc_Name VARCHAR(1024), Poc_Record_State_Type_Id INT, Poc_Active BIT,
									Poc_Service_Id INT, Poc_Service_Version INT, Poc_Service_Name VARCHAR(1024), Poc_Service_Record_State_Type_Id INT, Poc_Service_Active BIT, Poc_Service_External BIT,
                                    Approved_Date DATETIME, Obsoleted_Date DATETIME);

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

	INSERT INTO vMainTempTable (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active, Approved_Date, Obsoleted_Date)
	(
		SELECT PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, Level, 
					Can_Have_Points_Of_Care, Can_Have_Services, Group_Name, FK_Record_State_Type_Id, Organization_Active,
                    Approved_Date, Obsoleted_Date
		FROM (
			SELECT o.PK_Organization_Id, o.PK_Organization_Version, oo.Fk_Organization_Parent_Id, oo.Fk_Organization_Parent_Version, 0 AS Level,
				5 AS FK_Record_State_Type_Id, o.Approved AS Approved_Date, oo.Obsoleted_Date,
				 o.Can_Have_Points_Of_Care, o.Can_Have_Services, o.Group_Name, o.Organization_Active,
				ROW_NUMBER() OVER (PARTITION BY oo.FK_Organization_Id) AS rn
			FROM      Organizations AS o LEFT JOIN
								Organizations_Organizations AS oo
								ON o.PK_Organization_Id = oo.FK_Organization_Id AND
									o.PK_Organization_Version = oo.FK_Organization_Version
			WHERE   
				o.Approved <= pFilter_Date AND
                (oo.Obsoleted_Date IS NULL OR oo.Obsoleted_Date > pFilter_Date) 
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
				WHERE   PK_Organization_Id = pOrganization_Id AND PK_Organization_Version = pOrganization_Version /*AND
						Approved_Date <= pFilter_Date AND
						(Obsoleted_Date IS NULL OR Obsoleted_Date > pFilter_Date) */

				UNION ALL

				SELECT t2.PK_Organization_Id, t2.PK_Organization_Version, t2.Fk_Organization_Parent_Id, t2.FK_Organization_Parent_Version, cte.Level + 1,
						t2.FK_Record_State_Type_Id, t2.Approved_Date, t2.Obsoleted_Date,
						t2.Can_Have_Points_Of_Care, t2.Can_Have_Services, t2.Group_Name, t2.Organization_Active
				FROM   vMainTempTable_1 t2
				
				JOIN RecursiveCTE AS cte ON cte.PK_Organization_Id = t2.Fk_Organization_Parent_Id AND cte.PK_Organization_Version = t2.FK_Organization_Parent_Version
				WHERE cte.Level < pLevel /*AND 
						t2.Approved_Date <= pFilter_Date AND
						(t2.Obsoleted_Date IS NULL OR t2.Obsoleted_Date > pFilter_Date) */
	)

	SELECT cte.PK_Organization_Id, cte.PK_Organization_Version, cte.Fk_Organization_Parent_Id, cte.Fk_Organization_Parent_Version, cte.Level,
					texts.Name, cte.Can_Have_Points_Of_Care, cte.Can_Have_Services, cte.Group_Name, cte.FK_Record_State_Type_Id, cte.Organization_Active,
					t0.PK_Service_Id as Service_Id, t0.PK_Service_Version as Service_Version, t0.Name0 as Service_Name, t0.FK_Record_State_Type_Id as Service_Record_State_Type_Id, t0.Service_Active, -- service
					t1.PK_Point_Of_Care_Id as Poc_Id, t1.PK_Point_Of_Care_Version as Poc_Version, t1.Name0 as Poc_Name, t1.FK_Record_State_Type_Id as Poc_Record_State_Type_Id, t1.Point_Of_Care_Active as Poc_Active, -- Poc
					t1.PK_Service_Id as Poc_Service_Id, t1.PK_Service_Version as Poc_Service_Version, t1.Name00 as Poc_Service_Name, t1.FK_Record_State_Type_Id00 as Poc_Service_Record_State_Type_Id, 
					t1.Service_Active as Poc_Service_Active, CASE WHEN (t0.Fk_Organization_Parent_Id0 = t1.Fk_Organization_Parent_Id1) THEN 1 ELSE 0 END as Poc_Service_External -- Poc / service
			
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
						(s.Obsoleted_Date IS NULL OR s.Obsoleted_Date > pFilter_Date) 
			) AS t0 ON cte.PK_Organization_Id = t0.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t0.FK_Organization_Parent_Version
			

			-- Points Of Care
			LEFT JOIN (
				SELECT p.FK_Point_Of_Care_Id, p.FK_Point_Of_Care_Version, p.FK_Organization_Parent_Id, p.FK_Organization_Parent_Version, p.Approved_Date, p.Created_Date, 
						p.FK_Parent_Record_State_Type_Id, p.FK_Record_State_Type_Id, p.Observations, p.Obsoleted_Date, p0.PK_Point_Of_Care_Id, p0.PK_Point_Of_Care_Version, 
						p0.Active, p0.Approved, p0.Approved_Version, p0.Code, p0.Created, p0.Created_By, p0.Deleted, p0.End_Date, p0.FK_Address_Id, p0.FK_Approved_By, 
						p0.FK_Channel_Id, p0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, p0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, 
						p0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, p0.Generic_1, p0.Generic_2, p0.Generic_3, p0.In_History, p0.Name, p0.Point_Of_Care_Active, 
						p0.Start_Date, p0.Updated, p0.Updated_By, p1.PK_Point_Of_Care_Text_Id, p1.Abreviation, p1.Attendance_Restrictions, p1.Description, 
						p1.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id0, p1.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version0, p1.Keywords, p1.Language, p1.Name AS Name0, 
						p1.Opening_Hours, p1.Pre_Conditions, p1.Version_Comments, t2.FK_Service_Id, t2.FK_Service_Version, t2.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id1, 
						t2.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version1, t2.Approved_Date AS Approved_Date0, t2.Cost_Id, t2.Created_Date AS Created_Date0, 
						t2.External_Approved_Date, t2.FK_External_Record_State_Type_Id, t2.FK_Record_State_Type_Id AS FK_Record_State_Type_Id1, t2.Observations AS Observations0, 
						t2.Obsoleted_Date AS Obsoleted_Date0, t2.PK_Service_Id, t2.PK_Service_Version, t2.Active AS Active0, t2.Approved AS Approved0, t2.Approved_Version AS Approved_Version0, 
						t2.Code AS Code0, t2.Cost, t2.Created AS Created0, t2.Created_By AS Created_By0, t2.Deleted AS Deleted0, t2.End_Date AS End_Date0, t2.FK_Approved_By AS FK_Approved_By0, 
						t2.FK_Business_Event_Id, t2.FK_Diagram_Attachment_Id, t2.FK_Economic_Activity_Id, t2.FK_Life_Event_Id, t2.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id1, 
						t2.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version1, t2.FK_Record_State_Type_Id0 AS FK_Record_State_Type_Id00, t2.FK_Service_Category_Id, 
						t2.FK_Service_Grouping_Id, t2.FK_Service_Type_Id, t2.Generic_1 AS Generic_10, t2.Generic_2 AS Generic_20, t2.Generic_3 AS Generic_30, t2.In_History AS In_History0, 
						t2.Name AS Name1, t2.Processing_Time_Days, t2.Processing_Time_Hours, t2.Processing_Time_Minutes, t2.Processing_Time_Months, t2.Processing_Time_Seconds, 
						t2.Processing_Time_Weeks, t2.Processing_Time_Years, t2.Service_Active, t2.Service_Internal, t2.Start_Date AS Start_Date0, t2.Updated AS Updated0, t2.Updated_By AS Updated_By0, 
						t2.PK_Service_Text_Id, t2.Abreviation AS Abreviation0, t2.Description AS Description0, t2.FK_Service_Id0, t2.FK_Service_Version0, t2.Keywords AS Keywords0, 
						t2.Language AS Language0, t2.Name0 AS Name00, t2.Service_Procedure, t2.Version_Comments AS Version_Comments0
				FROM Points_Of_Care_Organizations AS p
				INNER JOIN Points_Of_Care AS p0 ON p.FK_Point_Of_Care_Id = p0.PK_Point_Of_Care_Id AND p.FK_Point_Of_Care_Version = p0.PK_Point_Of_Care_Version
				-- Points Of Care Texts
				LEFT JOIN Point_Of_Care_Texts AS p1 ON p0.PK_Point_Of_Care_Id = p1.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = p1.FK_Point_Of_Care_Version
				-- Services 
				LEFT JOIN (
					SELECT s2.FK_Service_Id, s2.FK_Service_Version, s2.FK_Point_Of_Care_Id, s2.FK_Point_Of_Care_Version, s2.Approved_Date, s2.Cost_Id, s2.Created_Date, 
							s2.External_Approved_Date, s2.FK_External_Record_State_Type_Id, s2.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s2.Observations, s2.Obsoleted_Date, s3.PK_Service_Id, s3.PK_Service_Version, 
							s3.Active, s3.Approved, s3.Approved_Version, s3.Code, s3.Cost, s3.Created, s3.Created_By, s3.Deleted, s3.End_Date, s3.FK_Approved_By, s3.FK_Business_Event_Id, 
							s3.FK_Diagram_Attachment_Id, s3.FK_Economic_Activity_Id, s3.FK_Life_Event_Id, s3.Fk_Organization_Parent_Id, s3.Fk_Organization_Parent_Version, 
							s3.FK_Record_State_Type_Id, s3.FK_Service_Category_Id, s3.FK_Service_Grouping_Id, s3.FK_Service_Type_Id, 
							s3.Generic_1, s3.Generic_2, s3.Generic_3, s3.In_History, s3.Name, s3.Processing_Time_Days, s3.Processing_Time_Hours, s3.Processing_Time_Minutes, 
							s3.Processing_Time_Months, s3.Processing_Time_Seconds, s3.Processing_Time_Weeks, s3.Processing_Time_Years, s3.Service_Active, s3.Service_Internal, 
							s3.Start_Date, s3.Updated, s3.Updated_By, s4.PK_Service_Text_Id, s4.Abreviation, s4.Description, s4.FK_Service_Id AS FK_Service_Id0, 
							s4.FK_Service_Version AS FK_Service_Version0, s4.Keywords, s4.Language, s4.Name AS Name0, s4.Service_Procedure, s4.Version_Comments
					FROM Services_Points_Of_Care AS s2
					INNER JOIN Services AS s3 ON s2.FK_Service_Id = s3.PK_Service_Id AND s2.FK_Service_Version = s3.PK_Service_Version
					LEFT JOIN Service_Texts AS s4 ON s3.PK_Service_Id = s4.FK_Service_Id AND s3.PK_Service_Version = s4.FK_Service_Version
					WHERE s4.Language = pLanguage AND 
						s2.Approved_Date <= pFilter_Date AND 
						(s2.Obsoleted_Date IS NULL OR s2.Obsoleted_Date > pFilter_Date) 
				) AS t2 ON p0.PK_Point_Of_Care_Id = t2.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = t2.FK_Point_Of_Care_Version
				WHERE p1.Language = pLanguage AND 
						p.Approved_Date <= pFilter_Date AND
						(p.Obsoleted_Date IS NULL OR p.Obsoleted_Date > pFilter_Date) 
			) AS t1 ON cte.PK_Organization_Id = t1.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t1.FK_Organization_Parent_Version

			WHERE texts.Language = pLanguage

	ORDER BY PK_Organization_Id, PK_Organization_Version, Level;
    
-- CLEAR ALL
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable;
    DROP TEMPORARY TABLE IF EXISTS vMainTempTable_1;
    
END;


DROP PROCEDURE IF EXISTS TodayTreeView;

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

	DROP TEMPORARY TABLE IF EXISTS vMainTempTable;
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
				SELECT s.FK_Service_Id, s.FK_Service_Version, s.FK_Organization_Parent_Id, s.FK_Organization_Parent_Version, s.Approved_Date, s.Created_Date, s.FK_Parent_Record_State_Type_Id, 
						s0.FK_Record_State_Type_Id, s.Observations, s.Obsoleted_Date, s0.PK_Service_Id, s0.PK_Service_Version, s0.Active, s0.Approved, s0.Approved_Version, s0.Code, s0.Cost, 
						s0.Created, s0.Created_By, s0.Deleted, s0.End_Date, s0.FK_Approved_By, s0.FK_Business_Event_Id, s0.FK_Diagram_Attachment_Id, s0.FK_Economic_Activity_Id, s0.FK_Life_Event_Id, 
						s0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, s0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, 
						s0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, s0.FK_Service_Category_Id, s0.FK_Service_Grouping_Id, s0.FK_Service_Type_Id, s0.Generic_1, s0.Generic_2, s0.Generic_3, 
						s0.In_History, s0.Name, s0.Processing_Time_Days, s0.Processing_Time_Hours, s0.Processing_Time_Minutes, s0.Processing_Time_Months, s0.Processing_Time_Seconds, 
						s0.Processing_Time_Weeks, s0.Processing_Time_Years, s0.Service_Active, s0.Service_Internal, s0.Start_Date, s0.Updated, s0.Updated_By, s1.PK_Service_Text_Id, s1.Abreviation, 
						s1.Description, s1.FK_Service_Id AS FK_Service_Id0, s1.FK_Service_Version AS FK_Service_Version0, s1.Keywords, s1.Language, s1.Name AS Name0, s1.Service_Procedure, 
						s1.Version_Comments
				FROM Services_Organizations AS s
				INNER JOIN Services AS s0 ON s.FK_Service_Id = s0.PK_Service_Id AND s.FK_Service_Version = s0.PK_Service_Version
				LEFT JOIN Service_Texts AS s1 ON s0.PK_Service_Id = s1.FK_Service_Id AND s0.PK_Service_Version = s1.FK_Service_Version
				WHERE s1.Language = pLanguage AND s0.FK_Record_State_Type_Id in (SELECT Id FROM vListOfRecordStateTypeIds_3)
			) AS t0 ON cte.PK_Organization_Id = t0.FK_Organization_Parent_Id AND cte.PK_Organization_Version = t0.FK_Organization_Parent_Version

			-- Points Of Care
			LEFT JOIN (
				SELECT p.FK_Point_Of_Care_Id, p.FK_Point_Of_Care_Version, p.FK_Organization_Parent_Id, p.FK_Organization_Parent_Version, p.Approved_Date, p.Created_Date, 
						p.FK_Parent_Record_State_Type_Id, p0.FK_Record_State_Type_Id, p.Observations, p.Obsoleted_Date, p0.PK_Point_Of_Care_Id, p0.PK_Point_Of_Care_Version, p0.Active, p0.Approved, 
						p0.Approved_Version, p0.Code, p0.Created, p0.Created_By, p0.Deleted, p0.End_Date, p0.FK_Address_Id, p0.FK_Approved_By, p0.FK_Channel_Id, 
						p0.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id0, p0.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version0, 
						p0.FK_Record_State_Type_Id AS FK_Record_State_Type_Id0, p0.Generic_1, p0.Generic_2, p0.Generic_3, p0.In_History, p0.Name, p0.Point_Of_Care_Active, p0.Start_Date, p0.Updated, 
						p0.Updated_By, p1.PK_Point_Of_Care_Text_Id, p1.Abreviation, p1.Attendance_Restrictions, p1.Description, p1.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id0, 
						p1.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version0, p1.Keywords, p1.Language, p1.Name AS Name0, p1.Opening_Hours, p1.Pre_Conditions, p1.Version_Comments, t2.FK_Service_Id, 
						t2.FK_Service_Version, t2.FK_Point_Of_Care_Id AS FK_Point_Of_Care_Id1, t2.FK_Point_Of_Care_Version AS FK_Point_Of_Care_Version1, t2.Approved_Date AS Approved_Date0, t2.Cost_Id, 
						t2.Created_Date AS Created_Date0, t2.External_Approved_Date, t2.FK_External_Record_State_Type_Id, t2.FK_Record_State_Type_Id AS FK_Record_State_Type_Id1, 
						t2.Observations AS Observations0, t2.Obsoleted_Date AS Obsoleted_Date0, t2.PK_Service_Id, t2.PK_Service_Version, t2.Active AS Active0, t2.Approved AS Approved0, 
						t2.Approved_Version AS Approved_Version0, t2.Code AS Code0, t2.Cost, t2.Created AS Created0, t2.Created_By AS Created_By0, t2.Deleted AS Deleted0, t2.End_Date AS End_Date0, 
						t2.FK_Approved_By AS FK_Approved_By0, t2.FK_Business_Event_Id, t2.FK_Diagram_Attachment_Id, t2.FK_Economic_Activity_Id, t2.FK_Life_Event_Id, 
						t2.Fk_Organization_Parent_Id AS Fk_Organization_Parent_Id1, t2.Fk_Organization_Parent_Version AS Fk_Organization_Parent_Version1, 
						t2.FK_Record_State_Type_Id0 AS FK_Record_State_Type_Id00, t2.FK_Service_Category_Id, t2.FK_Service_Grouping_Id, t2.FK_Service_Type_Id, t2.Generic_1 AS Generic_10, 
						t2.Generic_2 AS Generic_20, t2.Generic_3 AS Generic_30, t2.In_History AS In_History0, t2.Name AS Name1, t2.Processing_Time_Days, t2.Processing_Time_Hours, 
						t2.Processing_Time_Minutes, t2.Processing_Time_Months, t2.Processing_Time_Seconds, t2.Processing_Time_Weeks, t2.Processing_Time_Years, t2.Service_Active, t2.Service_Internal, 
						t2.Start_Date AS Start_Date0, t2.Updated AS Updated0, t2.Updated_By AS Updated_By0, t2.PK_Service_Text_Id, t2.Abreviation AS Abreviation0, t2.Description AS Description0, 
						t2.FK_Service_Id0, t2.FK_Service_Version0, t2.Keywords AS Keywords0, t2.Language AS Language0, t2.Name0 AS Name00, t2.Service_Procedure, 
						t2.Version_Comments AS Version_Comments0
				FROM Points_Of_Care_Organizations AS p
				INNER JOIN Points_Of_Care AS p0 ON p.FK_Point_Of_Care_Id = p0.PK_Point_Of_Care_Id AND p.FK_Point_Of_Care_Version = p0.PK_Point_Of_Care_Version
				-- Points Of Care Texts
				LEFT JOIN Point_Of_Care_Texts AS p1 ON p0.PK_Point_Of_Care_Id = p1.FK_Point_Of_Care_Id AND p0.PK_Point_Of_Care_Version = p1.FK_Point_Of_Care_Version
				-- Services 
				LEFT JOIN (
					SELECT s2.FK_Service_Id, s2.FK_Service_Version, s2.FK_Point_Of_Care_Id, s2.FK_Point_Of_Care_Version, s2.Approved_Date, s2.Cost_Id, s2.Created_Date, s2.External_Approved_Date, 
							s2.FK_External_Record_State_Type_Id, s2.FK_Record_State_Type_Id  AS FK_Record_State_Type_Id0, s2.Observations, s2.Obsoleted_Date, 
							s3.PK_Service_Id, s3.PK_Service_Version, s3.Active, s3.Approved, s3.Approved_Version, s3.Code, s3.Cost, s3.Created, s3.Created_By, s3.Deleted, s3.End_Date, 
							s3.FK_Approved_By, s3.FK_Business_Event_Id, s3.FK_Diagram_Attachment_Id, s3.FK_Economic_Activity_Id, s3.FK_Life_Event_Id, s3.Fk_Organization_Parent_Id, 
							s3.Fk_Organization_Parent_Version, s3.FK_Record_State_Type_Id, s3.FK_Service_Category_Id, s3.FK_Service_Grouping_Id, 
							s3.FK_Service_Type_Id, s3.Generic_1, s3.Generic_2, s3.Generic_3, s3.In_History, s3.Name, s3.Processing_Time_Days, s3.Processing_Time_Hours, s3.Processing_Time_Minutes, 
							s3.Processing_Time_Months, s3.Processing_Time_Seconds, s3.Processing_Time_Weeks, s3.Processing_Time_Years, s3.Service_Active, s3.Service_Internal, s3.Start_Date, 
							s3.Updated, s3.Updated_By, s4.PK_Service_Text_Id, s4.Abreviation, s4.Description, s4.FK_Service_Id AS FK_Service_Id0, s4.FK_Service_Version AS FK_Service_Version0, 
							s4.Keywords, s4.Language, s4.Name AS Name0, s4.Service_Procedure, s4.Version_Comments
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
                    ON vtemp2.PK_Organization_Id = vtemp1.PK_Organization_Id
					SET vtemp2.PK_Organization_Version = vtemp1.PK_Organization_Version, 
						vtemp2.Name = vtemp1.Name, 
                        vtemp2.FK_Record_State_Type_Id = vtemp1.FK_Record_State_Type_Id;
					
					-- Acrescenta essas entidades na temp principal
					INSERT INTO vMainTempTable SELECT * FROM vtemp2;
				END IF;
			END IF;

			-- Retorna toda a informação
			SELECT * FROM vMainTempTable 
				ORDER BY PK_Organization_Id, PK_Organization_Version, Level;
			
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
            
END;


DROP PROCEDURE IF EXISTS ReportOrganizationCount;

CREATE PROCEDURE ReportOrganizationCount
(
	IN pOrganization_Id int,
	IN pOrganization_Version int
)
BEGIN

	DECLARE pReturn INT;
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
	SELECT pReturn;
END;

DROP PROCEDURE IF EXISTS GetTreeView;

CREATE PROCEDURE GetTreeView
(
	IN pOrganization_Id int,
	IN pOrganization_Version int
)
BEGIN

	DECLARE vPublished_State INT DEFAULT 5;
	DECLARE vExtincted_State INT DEFAULT 9;

	-- Caso não passem o Id, vai buscar a entidade Açores
	-- Caso não passem a versão, vai buscar a versão publicada desse Id
	IF (pOrganization_Id IS NULL) THEN
		SELECT PK_Organization_Id, PK_Organization_Version
        INTO pOrganization_Id, pOrganization_Version
		FROM Organizations 
		WHERE Fk_Organization_Parent_Id IS NULL AND FK_Record_State_Type_Id = vPublished_State; 
    ELSEIF (pOrganization_Version IS NULL) THEN
		SELECT PK_Organization_Version
        INTO pOrganization_Version
		FROM Organizations 
		WHERE PK_Organization_Id = pOrganization_Id AND FK_Record_State_Type_Id = vPublished_State; 
    END IF;

	WITH RECURSIVE RecursiveCTE (PK_Organization_Id, PK_Organization_Version, Fk_Organization_Parent_Id, Fk_Organization_Parent_Version, FK_Record_State_Type_Id)
				AS
				(
					SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version, e.FK_Record_State_Type_Id
					FROM organizations AS e
					WHERE e.PK_Organization_Id = pOrganization_Id AND e.PK_Organization_Version = pOrganization_Version AND 
							(e.FK_Record_State_Type_Id <= vPublished_State OR e.FK_Record_State_Type_Id = vExtincted_State)

					UNION ALL

					SELECT e.PK_Organization_Id, e.PK_Organization_Version, e.Fk_Organization_Parent_Id, e.Fk_Organization_Parent_Version, e.FK_Record_State_Type_Id
					FROM organizations AS e
                
					INNER JOIN RecursiveCTE AS cte ON cte.PK_Organization_Id = e.Fk_Organization_Parent_Id AND cte.PK_Organization_Version = e.FK_Organization_Parent_Version
					WHERE (e.FK_Record_State_Type_Id <= vPublished_State OR e.FK_Record_State_Type_Id = vExtincted_State)
				)
	SELECT * FROM RecursiveCTE
    ORDER BY PK_Organization_Id;
 
END;