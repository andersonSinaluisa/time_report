# Utiliza una imagen base de Node.js
FROM node:20.1.0


# Set the working directory inside the container
WORKDIR /app
RUN npm install -g @nestjs/cli

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the Nest.js application will run on
EXPOSE 3000

# Run the Nest.js application
CMD ["npm", "run", "start:dev"]
