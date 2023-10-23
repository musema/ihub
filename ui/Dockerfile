# Stage 1: Build the React app
FROM node:16 as build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

ARG REACT_APP_API_BASE_URI
ENV REACT_APP_API_BASE_URI=$REACT_APP_API_BASE_URI
RUN npm run build

# Stage 2: Serve the production build with a lightweight web server
FROM nginx:alpine

# Copy the built app from Stage 1 to the nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy your Nginx configuration file into the container
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Will Expose port 80 
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
