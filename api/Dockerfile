# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on
EXPOSE 5005

ENV MONGODB_CONNECTION_STRING mongodb://localhost:27017/ideadb
ENV PORT 5005
# Define the command to run your application
CMD ["node", "dist/app.js"]
