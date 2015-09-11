# docker-app

1) Create a directory named node-docker

2) Create a file named start.sh with the following contents 

```
cd /tmp
rm -rf docker-app; true

git clone https://github.com/jmcdonald69124/docker-app.git

cd docker-app

npm install

node .
```

3) Create the Dockerfile in the node-docker directory and add the following code 

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

4) Build the image using the following command ```docker build -t node-test node-docker/``` (this assumes that you are one folder above the node-docker directory )
