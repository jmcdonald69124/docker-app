# docker-app


Use the following docker file 

```
FROM ubuntu:14.04

RUN  apt-get update && apt-get install -y -y nodejs npm git git-core wget && npm config set registry http://registry.npmjs.org/

# Upgrade Node to the latest version
RUN npm cache clean -f && npm install -g n && n stable && echo "Node version --> " && node -v

# Add the startup script file
ADD start.sh /tmp/

# Make it executable
RUN chmod +x /tmp/start.sh

EXPOSE 3000
CMD ./tmp/start.sh

#Start this box with the following command
#  docker run  -i -t -p 3000  node-test

```