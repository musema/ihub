# Deploying with Kubernetes

## Installing Minikube

### MacOS

```js
brew install minikube
minikube start
```

## Creating components

```js
kubectl apply -f ihub-config.yaml
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongodb-statefulset.yaml
kubectl apply -f ihub-ui-deployment.yaml
kubectl apply -f ihub-api-deployment.yaml
```

### Some useful `kubectl` commands

```js
kubectl apply -f <resource-file.yaml> // create resource
kubectl delete -f <resource-file.yaml> // delete resource
```

### Work around when EXTERNAL-IP not assigned

```js
minikube service ihub-ui-service # this will open the service on browser
```
