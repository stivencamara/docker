USE `CES.API.Database`;

DROP PROCEDURE IF EXISTS ReportOrganizationCount;
DELIMITER @@;
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
END@@;
