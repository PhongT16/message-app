ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}

WORKDIR /message-app

RUN npm init -y && \
    npm install express

COPY ./app.js ./app.js

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["node", "app.js"]

