# FILES

Copiar os ficheiros do frontend já compilado com a URL da api já correta para a pasta /content

# DOCKER IMAGE

Criar a imagem do frontend:

docker build -t cesazores/ces:qld_app_{VERSION} .

# DOCKER CONTAINER

docker run -d -p 5000:5000 -p 443:443 --name qld-ces.azores.gov.pt cesazores/ces:qld_app_{VERSION}

# HTTPS

Criar os certificados com openssl. Entra na linha de comando na pasta openssl/bin.

set OPENSSL_CONF=openssl.cnf

LINUX
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/CN=qld-ces.azores.pt"

WINDOWS
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx.key -out nginx.crt -subj "/CN=qld-ces.azores.pt"


# DOCKER HUB

docker login -u cesazores

docker build -t cesazores/ces:qld_app_{VERSION} .

docker build -t cesazores/ces:qld_app_3 .

docker push cesazores/ces:qld_app_3


# DOCKER PULL IMAGE
sudo docker image pull cesazores/ces:qld_app_{VERSION}

sudo docker run -d --restart always -p 5000:5000 -p 443:443 --name qld-ces.azores.pt cesazores/ces:qld_app_{VERSION}

sudo docker run -d --restart always -p 5000:5000 -p 443:443 --name qld-ces.azores.pt cesazores/ces:qld_app_1

# BROWSER

https://qld-ces.azores.pt

curl https://qld-ces.azores.pt/backoffice/login
curl http://qld-ces.azores.pt:5000/backoffice/login


# CONTAINER

docker rm CONTAINER_ID


# LISTEM LINUX PORTS
$ sudo lsof -i -P -n
$ sudo lsof -i -P -n | grep LISTEN


# NO LINUX

sudo apt-get install ufw
sudo apt install net-tools
sudo apt install iputils-ping
sudo apt-get install nano

sudo nano /etc/nsswitch.conf

sudo nano /etc/resolv.conf:

qld-ces.azores.pt 127.0.0.1

sudo nano /etc/hosts

127.0.0.1    qld-ces.azores.pt


# FIREWALL
sudo ufw status

sudo ufw allow 443,5000/tcp
sudo ufw allow out 443,5000/tcp

sudo ufw enable

sudo ufw disable
