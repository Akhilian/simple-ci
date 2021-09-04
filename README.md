## Docker

### Build the container

    docker build .

### Start the containers

    docker compose up

## SSH

### SSH connexion for container

**user :** test

**password :** test

    ssh test@localhost

## Git server

### Add remote for git repository

    git remote add origin test@localhost:/home/ubuntu

### Test Git connection

Using the command `git ls-remote`, it is possible to check in the connexion to the remote git repository (in the container).