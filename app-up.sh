skaffold dev --default-repo eu.gcr.io/devops-poc-toolkit/stevenj
kubectl -n jrsz patch ingress forgerock --type "json" --patch-file hostname.json
