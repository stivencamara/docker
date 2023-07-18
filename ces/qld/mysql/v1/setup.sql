CREATE USER 'sa'@'%' IDENTIFIED BY 'P@ssw0rd';

GRANT ALL privileges ON *.* TO 'sa'@'%' with grant option;

reset master;
