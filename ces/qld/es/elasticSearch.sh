

#caminho da imagem que queremos
FROM docker.elastic.co/elasticsearch/elasticsearch:8.6.2

#alteraçao de user para root
USER root
#para alterar a password do root
RUN echo "root:toor" | chpasswd



#para definir a directoria de trabalho
WORKDIR /ElasticSearch

RUN apt-get update && apt-get install -y \
    sudo \
    net-tools \
    iputils-ping \
 && rm -rf /var/lib/apt/lists/*




 RUN sudo sysctl -w vm.max_map_count=262144
 RUN sudo sysctl --system

#para criar as directorias a utilizar para o sql server
RUN mkdir /var/opt/elasticsearch
RUN mkdir /var/opt/elasticsearch/config
RUN mkdir /var/opt/elasticsearch/data

RUN echo "------------------------Setting file permissions----------------------- "
RUN chown -R elasticsearch /var/opt/elasticsearch
RUN chown -R elasticsearch /var/opt/elasticsearch/config
RUN chown -R elasticsearch /var/opt/elasticsearch/data

RUN echo "------------------------Setting memory limits------------------------"
RUN echo vm.max_map_count=262144  >> /etc/sysctl.conf
RUN sysctl -w vm.max_map_count=262144
#RUN sysctl -w vm.max_map_count=262144


 USER elasticsearch


#para dar permissoes ao utilizador mssql para correr o servidor
#RUN chown -R mssql /var/opt/sqlserver

# Cleanup apt
#RUN apt-get clean && rm -rf /var/lib/apt/lists/*

#alteraçao de user para mssql
#USER mssql
#para executar o servidor
#CMD /opt/mssql/bin/sqlservr
