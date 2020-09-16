/* Docker Basic */
docker run [imagename] // check local then search dockerhub then install on local
docker run [imagename] [command] // run container on docker
docker ps // Show currently running containers
docker ps --all // Show all docker containers history on local machine life cycle of container
docker run === docker create + docker start [-a] [containerId]
docker system prune //delete all stopped containers
docker stop [id]
docker exec -it [id] [command] //Executing command in running containers
