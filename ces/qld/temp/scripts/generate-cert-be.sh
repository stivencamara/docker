#!/bin/bash

openssl genpkey -algorithm RSA -des3 -out certificate-be-private-key.pem -pkeyopt rsa_keygen_bits:4096

openssl req -new -config certificate-be.conf -key certificate-be-private-key.pem -out csr-be.pem

openssl x509 -req -in csr-be.pem -CA ca-certificate.pem -CAkey ca-private-key.pem -CAcreateserial -out certificate-be.pem -days 3650 -extfile certificate-ext.conf

openssl pkcs12 -inkey certificate-be-private-key.pem -in certificate.pem -export -out certificate-be-private-key.pfx

echo "Your certificate is generated"