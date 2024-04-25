FROM node:20.5.0-alpine

WORKDIR ./qz3_front

COPY package*.json .

RUN npm install -g npm

RUN npm install

COPY . .

EXPOSE 5000

CMD npm start