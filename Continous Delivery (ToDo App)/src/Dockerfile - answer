FROM node:15.2.0-alpine 
WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=prod

COPY . . 

CMD [ "npm", "run", "start" ]

EXPOSE 5000
