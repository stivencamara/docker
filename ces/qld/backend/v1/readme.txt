# DOCKER CONTAINER

docker build -t cesazores/ces:qld_api_{VERSION} .

docker build -t cesazores/ces:qld_api_2 .

docker run -d -p 5002:5002 -p 443:443 --name api cesazores/ces:qld_api_{VERSION}

docker run -d -p 5002:5002 -p 443:443 --network backend --name api cesazores/ces:qld_api_{VERSION}

docker run -d -p 5002:5002 -p 443:443 --network backend --name api cesazores/ces:qld_api_2



# DOCKER HUB

docker login -u cesazores

docker build -t cesazores/ces:qld_app_{VERSION} .

docker build -t cesazores/ces:qld_api_3 .

docker push cesazores/ces:qld_api_{VERSION}

docker push cesazores/ces:qld_api_3

docker pull cesazores/ces:qld_api_3


# DEPLOY

docker stack deploy -c https://raw.githubusercontent.com/stivencamara/docker/main/ces/qld/backend/v1/docker-compose.yaml api 

docker service create \
--name api \
--replicas=2 \
--replicas-max-per-node 1 \
--network backend \
cesazores/ces:qld_api_1


--constraint node.hostname==qld-fe01-ces \
--constraint node.hostname==qld-redis01-ces \