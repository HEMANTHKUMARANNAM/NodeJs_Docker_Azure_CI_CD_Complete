# Use official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the app source code
COPY ./app ./app

# Expose port 80 for Azure compatibility
EXPOSE 80

# Start the app with port set to 80
CMD ["sh", "-c", "PORT=80 node app/server.js"]
