Criar os certificados com openssl. Entra na linha de comando na pasta openssl/bin.

set OPENSSL_CONF=openssl.cnf

openssl x509 -req -in csr.pem -CA ca-certificate.pem -CAkey ca-private-key.pem -CAcreateserial -out certificate.pem -days 3650 -extfile certificate-qld-api.conf
