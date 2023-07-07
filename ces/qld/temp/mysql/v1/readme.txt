https://dev.mysql.com/doc/refman/5.7/en/environment-variables.html


#cluster

docker pull container-registry.oracle.com/mysql/community-cluster:latest




docker run --name mysql -v ./db-data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=P@ssw0rd -d mysql --default-authentication-plugin=mysql_native_password
