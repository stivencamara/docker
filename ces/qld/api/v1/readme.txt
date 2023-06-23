# DOCKER CONTAINER

docker build -t dev:ces_api .

docker run -d -p 5002:5002 -p 443:443 --name qld-api-ces.azores.gov.pt dev:ces_api


