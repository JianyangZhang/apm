USE topologyDB;
# DROP USER 'topologyUser'@'localhost';
# FLUSH PRIVILEGES;
CREATE USER 'topologyUser'@'localhost' IDENTIFIED BY '666666';

GRANT ALL ON topologyDB.* TO 'topologyUser'@'localhost' IDENTIFIED BY '666666';
FLUSH PRIVILEGES;