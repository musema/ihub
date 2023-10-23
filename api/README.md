# iHub API

---IN_PROGRESS---
Assuming MongoDB server is running on `PORT` 5000, and database named `ideadb` is created.
--- MORE details will be added --- on how to?

## Supported API endpoints

1. `GET` `/ideas` - Returns all ideas in `ideas` collection.
2. `GET` `/ideas/{id}` - Returns an idea with a given `id`
3. `POST` `/ideas` - Adds new idea document to ideas collection.
4. `PUT` `/ideas/{id}` - Updates the details of a given idea.
5. `DELETE` `/ideas/{id}` - Deletes an idea with a given id.

### Secure the API with JWT

--- COMING SOON ---

### Setup instruction

    1. Add .env file to `./api` directory, and add the following key value pairs
    ```

MONGODB_CONNECTION_STRING= connection string of mongodb database
GOOGLE_CLIENT_ID_IHUB_WEB= [your google client id].apps.googleusercontent.com

    ```

1. install `nodemon` globally
   `npm install -g nodemon`

### Scripts

#### Starting the server/API

1. MongoDB is up and running on PORT `5000`
   1. `cd api && npm start`

## Docker container

### Building image

```js
// cd into this directory
docker build -t ihub-api .
```

### Run image

```js
docker run -d -p 5001:5005  ihub-api
```

### Debug

```

docker exec -it my-container-id /bin/sh

// logs
docker logs my-container-id


```

### Remove a container

```
docker remove -f container_id
```

Some more commands to check

```
docker scout quickview
docker scout cves local://ihub-api:latest // use image and version name

```
