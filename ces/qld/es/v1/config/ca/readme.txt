ATENÇÃO:
	instalador criado para "linux". Em windows, instalar https://www.cygwin.com/ para ter a "shell" de "linux"

Para gerar certificados:
	abrir os 3 ficheiros com extensão .conf e colocar os parametros necessários para o certificado a ser gerado
	executar o gerador de CA (em windows, utilizar o cygwin)
	executar o gerador de certificado (em windows, utilizar o cygwin)
	
A CA é para ser instalada na máquina/server onde se quer "confiar" nos certificados. Os certificados são gerados utilizando a CA, logo para confiar nos certificados, basta instalar a CA
	na máquina que tem de confiar nos certificados.


No windows pode ser feito tambem com o Openssl. Para isso basta correr os scripts abaixo, seguindo os passos:

1 - Abra o OpenSSL como administrador.

2 - Atribua o ficheiro de configuração do OpenSSL para o diretorio onde encontra-se o ficheiro openssl.cnf na pasta /bin:

    set OPENSSL_CONF=E:\github\docker\ces\temp\OpenSSL\bin\openssl.cnf

3 - Corra os comanddos abaixo na seguencia

#!/bin/bash

openssl genpkey -algorithm RSA -des3 -out certificate-es-private-key.pem -pkeyopt rsa_keygen_bits:4096

openssl req -new -config certificate-es.conf -key certificate-es-private-key.pem -out csr-es.pem

openssl x509 -req -in csr-es.pem -CA ca-certificate.pem -CAkey ca-private-key.pem -CAcreateserial -out certificate-es.pem -days 3650 -extfile certificate-ext.conf

openssl pkcs12 -inkey certificate-es-private-key.pem -in certificate.pem -export -out certificate-es-private-key.pfx

echo "Your certificate is generated"


	
	