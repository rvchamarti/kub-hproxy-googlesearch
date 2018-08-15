# kub-hproxy-googlesearch

This is a nodejs based http proxy container for Google Search engine. It is very simple proxy for basic Google Search. All the google search parameters can be provided on URL path. The docker container is build using readytalk/nodejs(https://hub.docker.com/r/readytalk/nodejs/) container with following npm modules

http-proxy,  http-proxy-middleware, node-http-proxy, and express

to build container on your machine, follow the below steps

-mkdir hproxy(<appdir>
download  Dockerfile, package.json, proxy.js
  - cd hproxy
- docker build -t  rv/hproxy .
  
  To run docker container  
  - docker run --name hproxy -d -p 8080:8080 rv/hproxy
  
  
 Once the container is running to proxy google search, on your browser
 http://dockerhostip:8080/googlesearchterms
  
  the results from google will be displayed. http-middleware-proxy offers quite extensive filter and path rewrites. So you can add extra logic to proxy.js to make it work.
  
  
  Kubernetes
  -----------
  
  Simple Method to move this image to kubernetes cluster is to save image to tar.gz and load into kubernetes cluster with docker images repo running
  
  
  # docker save rv/hproxy | gzip -c > hproxy.tgz
  
  on Kub host, copy hproxy.tgz
  # zcat hproxy.tgz | docker load
  
  To run this container as single deployment POD
  # kubectl run --image=rv/hproxy hproxy --port=8080 --image-pull-policy=Never
  
  Add NodePort Service to 8080 to access portmapping to this http-proxy
  #kubectl expose deployement hproxy --type=NodePort
  
  ofcourse, kubernetes does not allow system-level ports and randomly assign ports to NodePort so example http://kubhostip:3xxxxx/<googlesearchterms>
  
  
 
  
