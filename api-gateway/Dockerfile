FROM node:latest

WORKDIR /app-spiral

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ] 