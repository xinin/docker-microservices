FROM node:alpine

RUN npm install -g nodemon

COPY entrypoint.sh /usr/local/bin/
RUN chmod 775 /usr/local/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]

WORKDIR /app

EXPOSE 9000