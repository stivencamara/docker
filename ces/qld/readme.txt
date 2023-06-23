## Gerando os Certificados

Para criar a CA (Certificate Authorite), fazer download do Openssl e descompactar.

Copiar a pasta scripts para dentro da pasta /bin do Openssl.

Correr os scripts abaixo:

set OPENSSL_CONF=E:\github\docker\ces\temp\OpenSSL\bin\openssl.cnf

# FE

openssl req -x509 -sha256 -newkey rsa:2048 -keyout nginx.key -out nginx.crt -days 1024 -nodes -subj '/CN=qld-ces.azores.gov.pt'


# BE
openssl req -x509 -sha256 -newkey rsa:2048 -keyout qld-api-ces.key -out qld-api-ces.crt -days 1024 -nodes -subj '/CN=qld-api-ces.azores.gov.pt'


# Portainer

docker volume create portainer_data


#Business Edition

docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
