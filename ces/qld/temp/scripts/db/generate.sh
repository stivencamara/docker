#!/bin/bash

#openssl genpkey -algorithm RSA -des3 -out ca-private-key.pem -pkeyopt rsa_keygen_bits:4096

openssl req -new -config certificate.conf -key ca-private-key.pem -out csr.pem

openssl x509 -req -in csr.pem -CA ca-certificate.pem -CAkey ca-private-key.pem -CAcreateserial -out certificate.pem -days 3650 -extfile certificate-ext.conf

openssl pkcs12 -inkey ca-private-key.pem -in certificate.pem -export -out ca-private-key.pfx

openssl pkcs12 -inkey ca-private-key.pem -in certificate.pem -export -out qld-db-ces.azores.gov.pt.p12                            //-certfile cadeiacertificados.pem 






echo "Your certificate is generated"