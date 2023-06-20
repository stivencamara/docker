
#docker

sudo apt-get update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker


# Add User Group

sudo groupadd docker


# Remove sudo

sudo usermod -aG docker $USER

shutdow -r now


# Container

mkdir /data

docker run --name redis -p 6379:6379 -d --restart always -v redis:/var/lib/redis redis:alpine


# Create Volume

sudo docker volume create redis

sudo docker volume inspect redis


#Client Redis

sudo apt install redis-tools

redis-cli


#Refs
https://pierreabreu.medium.com/building-redis-cluster-with-docker-compose-9569ddb6414a