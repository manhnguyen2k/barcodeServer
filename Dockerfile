<<<<<<< HEAD
FROM node:16
=======
FROM node:14
>>>>>>> 77539b9a704138856a84825018df5f97d8c72e0f

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]