FROM ubuntu:22.10

FROM node:latest
RUN mkdir -p /app/files

WORKDIR /app/files

COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]

