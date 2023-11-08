DROP PROCEDURE IF EXISTS GetReverseTreeView;

DELIMITER @@
CREATE PROCEDURE GetReverseTreeView
(
	IN pOrganization_Id int,
	IN pOrganization_Version int
)
BEGIN

	DECLARE vPublished_State INT DEFAULT 5;
	DECLARE vExtincted_State INT DEFAULT 9;

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
                
					INNER JOIN RecursiveCTE AS cte ON e.PK_Organization_Id = cte.Fk_Organization_Parent_Id AND e.PK_Organization_Version = cte.FK_Organization_Parent_Version
					WHERE (e.FK_Record_State_Type_Id <= vPublished_State OR e.FK_Record_State_Type_Id = vExtincted_State)
				)
	SELECT * FROM RecursiveCTE
    ORDER BY PK_Organization_Id;
 
END @@
DELIMITER ;