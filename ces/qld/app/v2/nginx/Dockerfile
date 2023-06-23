FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY certs/nginx.crt /etc/nginx/ssl/nginx.crt
COPY certs/nginx.key /etc/nginx/ssl/nginx.key