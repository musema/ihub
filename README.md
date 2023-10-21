    				---IN_PROGRESS---

`ihub` is a sample full-stack web application built using `TypeScript`, `React.js`, `Redux`, `Node.js`, `Express`, and `MongoDB`.

### Objectives

- Build highly decoupled web application components UI, API and Database/Persistence
- Each components should be scaled and released independently

### The two major components

1. [API](/api/README.md) RESTful API built with `Node.js`, `Express`, `MongoDB`, and `TypeScript`.
2. [Web App](/web/README.md) Single Page Application built with `React.js`, `Redux` and `TypeScript`.

### Setup instruction

    	---COMING SOON---

### Docker compose

```
docker compose up --build
```

### Docker

```
docker remove 02136a267daa # remove a container
docker rmi image_name

// sync local working directory with container working directory
docker run -v $(pwd):/container-workdir -p host-port:container-port --name container-name  image-name
```
