## Instalar o docker

https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository

## Adicionar o utilizador ao grupo do docker para remover o "sudo"

$ sudo usermod -aG  admin  username


## Passos

1 - Correr o docker-compose da pasta "network"






## Gerando os Certificados

Para criar a CA (Certificate Authorite), fazer download do Openssl e descompactar.

Copiar a pasta scripts para dentro da pasta /bin do Openssl.

Correr os scripts abaixo:

set OPENSSL_CONF=E:\github\docker\ces\temp\OpenSSL\bin\openssl.cnf
set OPENSSL_CONF=C:\Users\stive\Downloads\OpenSSL\bin\openssl.cnf

# FE
openssl req -x509 -sha256 -newkey rsa:2048 -keyout nginx.key -out nginx.crt -days 1024 -nodes -subj '/CN=qld-ces.azores.gov.pt'


# BE
openssl req -x509 -sha256 -newkey rsa:2048 -keyout qld-api-ces.key -out qld-api-ces.crt -days 1024 -nodes -subj '/CN=qld-api-ces.azores.gov.pt'


# SqlServer
openssl req -x509 -sha256 -newkey rsa:2048 -keyout qld-db-ces.key -out qld-db-ces.crt -days 1024 -nodes -subj '/CN=qld-db-ces.azores.gov.pt'


# Portainer

docker volume create portainer_data


#Business Edition

docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest


#Links
https://vmware.github.io/vic-product/assets/files/html/1.3/vic_app_dev/using_volumes_with_vic.html
https://blogs.perficient.com/2017/05/25/how-to-install-kafka-cluster-in-the-docker-containers/
https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nfs-mount-on-ubuntu-20-04