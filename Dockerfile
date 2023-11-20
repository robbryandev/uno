
# Use a base image with Node.js and npm
FROM node:16

# Set the working directory to the app directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the working directory
COPY . .

# Build the webpack app
RUN npm run build

# Expose the desired port for serving the app
EXPOSE 80

# Set the command to serve the app using a web server
CMD [ "npx", "serve", "-p", "80", "dist" ]
