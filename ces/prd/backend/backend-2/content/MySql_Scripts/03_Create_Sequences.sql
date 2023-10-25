USE `CES.API.Database`;
DROP TABLE IF EXISTS Sequences;
CREATE TABLE IF NOT EXISTS Sequences (
  key_name VARCHAR(50) NOT NULL,
  next_value INT NOT NULL DEFAULT 1,
  PRIMARY KEY (key_name) 
);

INSERT INTO Sequences (key_name) VALUES ('document_sequence');
INSERT INTO Sequences (key_name) VALUES ('pointofcare_sequence');
INSERT INTO Sequences (key_name) VALUES ('service_sequence');
INSERT INTO Sequences (key_name) VALUES ('location_sequence');
INSERT INTO Sequences (key_name) VALUES ('organization_sequence');

DROP FUNCTION IF exists GetNextValue;

CREATE FUNCTION GetNextValue(keyname  VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE nextvalue INT;

  SELECT next_value INTO @nextvalue FROM Sequences WHERE key_name = keyname FOR UPDATE;
  UPDATE Sequences SET next_value = next_value + 1 WHERE key_name = keyname;

  RETURN @nextvalue;
END;