FROM node:lts-alpine

RUN apk --no-cache add curl
RUN mkdir /app
WORKDIR /app
 
COPY package*.json ./
RUN npm i
 
COPY ./tsconfig.json ./tsconfig.json

COPY ./src ./src
COPY ./public ./public
 
CMD npm start