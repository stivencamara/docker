USE `CES.API.Database`;

DROP FUNCTION IF exists GetNextValue;
DELIMITER @@
CREATE FUNCTION GetNextValue(keyname  VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE nextvalue INT;

  SELECT next_value INTO @nextvalue FROM Sequences WHERE key_name = keyname FOR UPDATE;
  UPDATE Sequences SET next_value = next_value + 1 WHERE key_name = keyname;

  RETURN @nextvalue;
END @@
DELIMITER ;