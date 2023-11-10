FROM node:19-alpine3.16

ENV SECRET=<Enter your secret here>

WORKDIR /app
COPY app.js ./
COPY package*.json ./
COPY static/ ./static/
COPY templates/ ./templates/

RUN apk add curl
RUN npm i

RUN adduser -D server
USER server

EXPOSE 3000

CMD [ "node", "app.js" ]
