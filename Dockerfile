FROM node:12.8.1
WORKDIR /app
COPY . /app
RUN npm install
CMD npm start
