FROM node:24-alpine3.22

WORKDIR /Hemant_Work

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8000

CMD ["node","server.js"]