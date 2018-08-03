#!/bin/sh
echo "🐋  Starting ..."
cd /app
 if [ ! -d "node_modules" ]; then
  echo "Installing packages ..."
  npm i
  echo "Server is starting ..."
  nodemon server/app.js
else
  echo "Server is starting ..."
  nodemon server/app.js
fi