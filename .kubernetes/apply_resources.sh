#!/bin/bash

kubectl apply -f ihub-config.yaml
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongodb-statefulset.yaml
kubectl apply -f ihub-api-deployment.yaml
kubectl apply -f ihub-ui-deployment.yaml
