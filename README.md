# Kaz.farm

Reactjs website to display my things. This website is viewable at
https://kaz.farm/.

## Deployment notes

Build the docker container:

```
docker build -t jonaskaz/jonas.kaz.farm .
```

Push the docker image with the tag latest:

```
docker push jonaskaz/jonas.kaz.farm:latest
```

Ping the ansible hosts:

```
ansible -i hosts all -m ping
```

Check the ansible playbook:

```
ansible-playbook -i hosts deploy.yml --check
```

Deploy the latest docker image:

```
ansible-playbook -i hosts deploy.yml
```

Get access to a the container:

```
docker exec -it kaz.farm /bin/bash
```
