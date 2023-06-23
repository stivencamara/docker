USER root
#para alterar a password do root
RUN echo "root:toor" | chpasswd

#para criar as directorias a utilizar para o sql server
RUN mkdir /var/opt/sqlserver
RUN mkdir /var/opt/sqlserver/data
RUN mkdir /var/opt/sqlserver/log
RUN mkdir /var/opt/sqlserver/backup

RUN groupadd mssql

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
