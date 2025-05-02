FROM node:20

# Install Python3, GCC (for C), and OpenJDK (Java)
RUN apt-get update && \
    apt-get install -y python3 gcc openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy and install Node.js dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY app ./app

# Expose port for the API
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
