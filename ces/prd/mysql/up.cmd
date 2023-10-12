docker compose --env-file ./Server-1/MySql/MySql.env -f ./Server-1/docker-compose.yaml up -d
docker compose --env-file ./Server-2/MySql/MySql.env -f ./Server-2/docker-compose.yaml up -d
docker compose --env-file ./Server-3/MySql/MySql.env -f ./Server-3/docker-compose.yaml up -d
docker compose --env-file ./Router/conf/Router.env -f ./Router/docker-compose.yaml up -d
docker compose --env-file ./ShellBatch/config/mysql-shell.env -f ./ShellBatch/docker-compose.yaml up -d