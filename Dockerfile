FROM node

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3333

CMD [ "npm", "run", "dev" ]