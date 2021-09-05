# Simple CI

For the fun, i started this little project to fool around with Git server configuration, and PostgreSQL Pub/Sub functionnality.

The aim of this little project is to create a very simple integration system where the database will be interacting with some push on the Git server.

## Backlog

Git:
- [x] Initialize docker image with git server
- [x] Ensure the folder rights on the /home/ubuntu allows pushing commits ont the repository
- [ ] Create hooks to notify the database that a new version is pushed

Docker
- [x] Initialize the docker-compose file and documentation to start project
- [x] Attach a PostgreSQL database to the network

SSH / Connexion
- [x] Initialize docker image with an SSH connection setup
- [ ] Configure the `authorized_key` file ssh

Application
- [ ] Initialize a database connexion
- [ ] Listen to notification on the channel

## Documentation

### Docker

#### Build the container

    docker compose up

#### Start the containers

    docker compose up

#### Connect to the database

    docker exec -it simpleci_database_1 psql -U simple_ci

### SSH

#### SSH connexion for container

**user :** test

**password :** test

    ssh test@localhost

### Git server

#### Add remote for git repository

    git remote add origin test@localhost:/home/ubuntu

#### Test Git connection

Using the command `git ls-remote`, it is possible to check in the connexion to the remote git repository (in the container).