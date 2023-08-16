FROM nginx:latest

COPY ./content/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./FrontEnd/certs/certificate-private-key.pem /etc/nginx/ssl/certificate-private-key.pem
#COPY ./FrontEnd/certs/certificate.pem /etc/nginx/ssl/certificate.pem


#BACKUP CERTIFICADOS
#RUN openssl rsa -in /etc/nginx/ssl/certificate-private-key.pem -passin pass:123QWEasdZXC -out /etc/nginx/ssl/certificate-private-key.nopass.pem


#copy CA
COPY ./certs/qualidade-fe-ces.azores.gov.pt/CA/ca-certificate.pem /usr/local/share/ca-certificates/qualidade-fe-ces.azores.gov.pt.ca-certificate.crt
COPY ./certs/qualidade-fe-ces.azores.gov.pt/CA/ca-private-key.pem /usr/local/share/ca-certificates/qualidade-fe-ces.azores.gov.pt.ca-private-key.pem

#copy Certificate Configuration Files
COPY ./certs/qualidade-fe-ces.azores.gov.pt/certs/certificate.conf /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/certificate.conf
COPY ./certs/qualidade-fe-ces.azores.gov.pt/certs/certificate-ext.conf /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/certificate-ext.conf

#generating certificate signed with copied CA
RUN openssl genrsa -out /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.key 2048 \
&& openssl req -new -key /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.key -out /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.csr -config /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/certificate.conf \
&& openssl x509 -req -in /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.csr -CA /usr/local/share/ca-certificates/qualidade-fe-ces.azores.gov.pt.ca-certificate.crt -CAkey /usr/local/share/ca-certificates/qualidade-fe-ces.azores.gov.pt.ca-private-key.pem -passin pass:123QWEasdZXC -CAcreateserial -out /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.crt -extfile /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/certificate-ext.conf -days 365 \
&& openssl pkcs12 -export -out /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.pfx -passout pass:"123QWEasdZXC" -inkey /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.key -passin pass:"123QWEasdZXC" -in /usr/local/share/ca-certificates/config/certs/qualidade-fe-ces.azores.gov.pt/certs/fe01.crt

RUN    update-ca-certificates 

CMD ["nginx", "-g", "daemon off;"]