# Full-stack web application

`ihub` is a reference project for modern full-stack web application built using `TypeScript`, `React.js`, `Redux`, `Node.js`, `Express`, and `MongoDB`.

## Objectives

- Build highly decoupled web application components UI, API and Database/Persistence
- Each components should be scaled and released independently
- Introduce productive software development tools and techniques
- Introduce modern application deployment tools i.e. Kubernetes and Docker

## The two major components

1. [API](/api/README.md) RESTful API built with `Node.js`, `Express`, `MongoDB`, and `TypeScript`.
2. [UI](/ui/README.md) Single Page Application built with `React.js`, `Redux` and `TypeScript`.

## Setup instruction

The recommended way to run the app is using `docker compose`.

1. Install docker: [Docker](https://docs.docker.com/get-docker/)
2. Run docker compose

   ```js
   docker compose up --build
   ```

## Some useful docker commands

```js
docker compose up --build // to run all apps together based on docker-compose.yml file
docker remove 02136a267daa // remove a container

docker images // list images
docker rmi image_name -f // remove an image

// sync local working directory with container working directory
docker run -v $(pwd):/container-workdir -p host-port:container-port --name container-name  image-name

// Check image vulnerabilities
docker scout quickview
docker scout cves image_name:version
```

## Deploying Kubernetes

Instructions to deploy this app with Kubernetes and test it locally can be found [here](/.kubernetes/README.md)
