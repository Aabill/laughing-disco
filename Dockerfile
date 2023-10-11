# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /var/www/app

# Copy package.json and yarn.lock (if exists) to the working directory
ADD ./app /var/www/app/

# Install dependencies
RUN yarn install
