# Dockerfile

# Use node alpine as it's a small node image
FROM node:19-alpine

# Create the directory on the node image
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app

# Install dependencies in /app
RUN npm install

# Copy the rest of our Next.js folder into /app
COPY . /app

# Ensure port 8080 is accessible to our system
EXPOSE 8080

# Run npm start, as we would via the command line 
CMD ["npm", "start"]