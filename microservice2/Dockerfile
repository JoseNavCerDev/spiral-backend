FROM node:latest

WORKDIR /app-spiral

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm", "start" ] 