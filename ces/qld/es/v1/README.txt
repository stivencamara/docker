se der erro de mem�ria (Bootstrap Check Failure of Max Virtual Memory Areas vm.max_map_count is Too Low) fazer o seguinte:

For Windows:
If you're using the Windows system just follow the steps below,

Open a PowerShell command prompt and execute the command,
	wsl -d docker-desktop
After that,
	sysctl -w vm.max_map_count=262144





#!/bin/bash

openssl genpkey -algorithm RSA -des3 -out certificate-es-private-key.pem -pkeyopt rsa_keygen_bits:4096

openssl req -new -config certificate-es.conf -key certificate-es-private-key.pem -out csr-be.pem

openssl x509 -req -in csr-es.pem -CA ca-certificate.pem -CAkey ca-private-key.pem -CAcreateserial -out certificate-es.pem -days 3650 -extfile ca-es.conf

openssl pkcs12 -inkey certificate-es-private-key.pem -in certificate.pem -export -out certificate-es-private-key.pfx

echo "Your certificate is generated"