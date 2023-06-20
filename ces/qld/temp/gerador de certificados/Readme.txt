ATENÇÃO:
	instalador criado para "linux". Em windows, instalar https://www.cygwin.com/ para ter a "shell" de "linux"


Para gerar certificados:
	abrir os 3 ficheiros com extensão .conf e colocar os parametros necessários para o certificado a ser gerado
	executar o gerador de CA (em windows, utilizar o cygwin)
	executar o gerador de certificado (em windows, utilizar o cygwin)
	
A CA é para ser instalada na máquina/server onde se quer "confiar" nos certificados. Os certificados são gerados utilizando a CA, logo para confiar nos certificados, basta instalar a CA
	na máquina que tem de confiar nos certificados.
	
	