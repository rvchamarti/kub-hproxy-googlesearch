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
  
  
  Working on kubernetes version.
  
