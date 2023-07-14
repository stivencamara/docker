# DOCKER CONTAINER

docker build -t cesazores/ces:qld_api_{VERSION} .

docker build -t cesazores/ces:qld_api_1 .

docker run -d -p 5002:5002 -p 443:443 --name qld-api-ces.azores.gov.pt cesazores/ces:qld_api_{VERSION}



# DOCKER HUB

docker login -u cesazores

docker push cesazores/ces:qld_api_{VERSION}

docker push cesazores/ces:qld_api_1


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