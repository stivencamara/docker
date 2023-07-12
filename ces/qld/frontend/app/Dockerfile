FROM nginx:latest

COPY content/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY certs/nginx.crt /etc/nginx/ssl/nginx.crt
COPY certs/nginx.key /etc/nginx/ssl/nginx.key

EXPOSE 5001
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]