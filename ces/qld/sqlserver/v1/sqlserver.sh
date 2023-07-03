
#caminho da imagem que queremos
FROM mcr.microsoft.com/mssql/server:2019-latest

#alteraçao de user para root
USER root
#para alterar a password do root
RUN echo "root:toor" | chpasswd

#para definir a directoria de trabalho
WORKDIR /SqlServer2019

#para criar as directorias a utilizar para o sql server
RUN mkdir /var/opt/sqlserver
RUN mkdir /var/opt/sqlserver/data
RUN mkdir /var/opt/sqlserver/log
RUN mkdir /var/opt/sqlserver/backup


#configuraçao de certificados
    #openssl pkcs12 -in path.p12 -out newfile.crt.pem -clcerts -nokeys
    #openssl pkcs12 -in path.p12 -out newfile.key.pem -nocerts -nodes
COPY qld-db-ces.azores.gov.pt.p12 /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.p12
RUN openssl pkcs12 -in /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.p12 -out /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.crt.pem -clcerts -nokeys -password pass:P@ssw0rd
RUN openssl pkcs12 -in /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.p12 -out /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.key.pem -nocerts -nodes -password pass:P@ssw0rd

COPY mssql.conf /var/opt/sqlserver/backup/mssql.conf 


RUN groupadd mssql
RUN chown mssql:mssql /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.crt.pem /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.key.pem /var/opt/sqlserver/backup/mssql.conf
RUN chmod 600 /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.crt.pem /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.key.pem
RUN mv /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.crt.pem /etc/ssl/certs/
RUN mv /var/opt/sqlserver/backup/qld-db-ces.azores.gov.pt.key.pem /etc/ssl/certs/
RUN mv /var/opt/sqlserver/backup/mssql.conf /var/opt/mssql


#para dar permissoes ao utilizador mssql para correr o servidor
RUN chown -R mssql /var/opt/sqlserver

# Cleanup apt
#RUN apt-get clean && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y \
    net-tools \
    iputils-ping \
 && rm -rf /var/lib/apt/lists/*

#alteraçao de user para mssql
USER mssql


#para executar o servidor
CMD /opt/mssql/bin/sqlservr
