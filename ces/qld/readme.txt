## Gerando os Certificados

Para criar a CA (Certificate Authorite), fazer download do Openssl e descompactar.

Copiar a pasta scripts para dentro da pasta /bin do Openssl.

Correr os scripts abaixo:

set OPENSSL_CONF=E:\github\docker\ces\temp\OpenSSL\bin\openssl.cnf

# FE

openssl req -x509 -sha256 -newkey rsa:2048 -keyout nginx.key -out nginx.crt -days 1024 -nodes -subj '/CN=qld-ces.azores.gov.pt'


# BE
openssl req -x509 -sha256 -newkey rsa:2048 -keyout qld-api-ces.key -out qld-api-ces.crt -days 1024 -nodes -subj '/CN=qld-api-ces.azores.gov.pt'
