# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /var/www/app

# Copy package.json and yarn.lock (if exists) to the working directory
ADD ./app /var/www/app/

RUN npm cache clean --force
RUN yarn cache clean
# RUN yarn config set registry https://registry.yarnpkg.com
# Install dependencies
RUN npm install
