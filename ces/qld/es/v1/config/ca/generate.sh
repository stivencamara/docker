#!/bin/bash
openssl genpkey -algorithm RSA -des3 -out ca-private-key.pem -pkeyopt rsa_keygen_bits:4096

openssl req -x509 -new -config ca.conf -key ca-key.pem -sha256 -days 3650 -out ca.pem

openssl x509 -outform der -in ca.pem -out ca.crt

echo "Your local CA is generated"
