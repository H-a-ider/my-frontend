# Use an official Node runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Install the missing module 'date-fns'
RUN npm install date-fns

# Bundle the source code inside the Docker image
COPY . .

# Build the Next.js app for production
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
