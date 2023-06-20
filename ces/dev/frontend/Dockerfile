FROM nginx:latest

COPY content/ /usr/share/nginx/html

#Configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

#Certificate files
COPY certs/nginx.crt /etc/nginx/ssl/nginx.crt
COPY certs/nginx.key /etc/nginx/ssl/nginx.key

#Remove files
#RUN rm certs/nginx.crt
#RUN rm certs/nginx.key

EXPOSE 5000
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]