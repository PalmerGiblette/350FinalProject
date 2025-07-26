# Use Node 18 slim image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy dependency info and install
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# App listens on port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
