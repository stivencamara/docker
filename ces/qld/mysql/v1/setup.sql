CREATE USER 'sa'@'%' IDENTIFIED BY 'P@ssw0rd';

GRANT ALL privileges ON *.* TO 'sa'@'%' with grant option;

reset master;


-- CREATE DB

CREATE DATABASE IF NOT EXISTS `CES.API.Database`;
CREATE DATABASE IF NOT EXISTS `CES.API.Log`;

USE `CES.API.Database`;

CREATE USER IF NOT EXISTS 'CESUser'@'%' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON `CES.API.Database`.* TO 'CESUser'@'%';
GRANT ALL PRIVILEGES ON `CES.API.Log`.* TO 'CESUser'@'%';