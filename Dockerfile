FROM node:10.16.3 as build-stage

ENV FILE=linkedLines.txt

RUN mkdir /app

WORKDIR  /app

COPY ./ /app/

RUN npm install

EXPOSE 3000

CMD npm start

