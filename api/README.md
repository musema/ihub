# iHub API

## Supported API endpoints

1. `GET` `/ideas` - Returns all ideas in `ideas` collection.
2. `GET` `/ideas/{id}` - Returns an idea with a given `id`
3. `POST` `/ideas` - Adds new idea document to ideas collection.
4. `PUT` `/ideas/{id}` - Updates the details of a given idea.
5. `DELETE` `/ideas/{id}` - Deletes an idea with a given id.

## Setup instruction

## Running with docker compose

No additional setup should be needed if you are running the app with docker compose setup [here](/docker-compose.yml)

## Running the API without docker

Make sure required `ENVIRONMENT VARIABLES` are provided

1. Add .env file to `./api` directory, and add the following key value pairs

```js
MONGODB_CONNECTION_STRING=connection string of mongodb database
GOOGLE_CLIENT_ID_IHUB_WEB=[your google client id].apps.googleusercontent.com
```
