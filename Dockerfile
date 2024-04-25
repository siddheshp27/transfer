# Use a slim base image with Alpine Linux
FROM alpine:latest

# Set environment variables for Java installation
ENV JAVA_VERSION 8

# Install necessary packages and clean up
RUN apk --no-cache add \
    openjdk${JAVA_VERSION}-jdk \
    curl \
    nodejs \
    npm \
    python3 \
    g++ \
    gcc && \
    rm -rf /var/cache/apk/*

# Set PATH for Java
ENV JAVA_HOME /usr/lib/jvm/default-jvm
ENV PATH ${JAVA_HOME}/bin:${PATH}

# Install npm dependencies
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

# Verify installations
RUN node -v && \
    java -version && \
    g++ --version && \
    python3 --version

# Add your application files
COPY . .

EXPOSE 8080

# Define the command to run your application
CMD [ "node", "server.js" ]
