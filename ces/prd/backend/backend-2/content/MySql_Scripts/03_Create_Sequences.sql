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