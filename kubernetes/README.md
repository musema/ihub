# minikube

## MacOS

```js
    # brew install hyperkit # not needed for latest minikube
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

### Delete deployment

```js
    kubectl delete -f <resource-file.yaml>
```

### Work around when EXTERNAL-IP not assigned

```js
minikube service ihub-ui-service # this will open the service on browser
```
