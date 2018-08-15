FROM readytalk/nodejs

WORKDIR /hproxy
ADD package.json /hproxy/
RUN npm install
ADD . /hproxy

EXPOSE 8080

CMD []
ENTRYPOINT ["/nodejs/bin/node", "/hproxy/proxy.js"]
