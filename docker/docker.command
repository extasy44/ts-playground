/* Docker Basic */
docker run [imagename] // check local then search dockerhub then install on local
docker run [imagename] [command] // run container on docker
docker ps // Show currently running containers
docker ps --all // Show all docker containers history on local machine life cycle of container
docker run === docker create + docker start [-a] [containerId]
docker system prune //delete all stopped containers
docker stop [id]
docker exec -it [id] [command] //Executing command in running containers
docker exec -it [id] sh //bash command process
docker run -it [containerName] sh
docker build -t [dockerID]/[repoName]/[Version] . // Tagging docker image
docker push [dockerID]/[repoName] // Update image on docker hub
docker commit -c 'CMD["redis-server"]' [ID] // Set a default command for a container
docker run -p [port(host)]:[port(inside container)] <image id> // Container port forwarding

//k8s
kubectl get pods // Print out information about all of the running pods
kubectl get deployents // Print out deployents
kubectl rollout restart deployment [image name]
kubectl exec -it [pod_name][cmd] // Execute the given command in a running pod
kubectl logs [pod_name] // Print out logs from the given pod
kubectl delete pod [pod_name] // Deletes the given pod
kubectl apply -f [config_file_name] // tells kubernetes to process the config
kubectl describe pod [pod_name] // Print out some information about the running pod

//skaffold
skaffold dev -v=debug //Debuggin
skaffold dev

