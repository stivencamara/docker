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

    openssl genpkey -algorithm RSA -des3 -out ca-private-key.pem -pkeyopt rsa_keygen_bits:4096

    openssl req -x509 -new -config ca.conf -key ca-private-key.pem -sha256 -days 3650 -out ca-certificate.pem


	
	