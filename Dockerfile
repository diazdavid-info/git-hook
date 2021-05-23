FROM diazdavid/dev-node:14.16

RUN mkdir /opt/app
WORKDIR /opt/app
COPY . .

RUN npm install

CMD [ "node", "index.js" ]