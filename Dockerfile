# Use a base image with Ubuntu OS
FROM ubuntu:latest

# Set environment variables for Java installation
ENV JAVA_VERSION 11

# Install OpenJDK
RUN apt-get update && apt-get install -y openjdk-${JAVA_VERSION}-jdk

# Set PATH for Java
ENV JAVA_HOME /usr/lib/jvm/java-${JAVA_VERSION}-openjdk-amd64
ENV PATH ${JAVA_HOME}/bin:${PATH}

# Install Node.js (adjust the version according to your needs)
RUN apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Install Python and necessary dependencies
RUN apt-get install -y python3 python3-pip

# Install g++ and gcc
RUN apt-get install -y g++ gcc

# Install npm package manager
# RUN apt-get install -y npm

# Set Python environment variables
ENV PATH /usr/bin/python3:${PATH}

# Set g++ environment variables
ENV PATH /usr/bin/g++:${PATH}

# Install npm dependencies
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

# Verify installations
RUN node -v
RUN java -version
RUN g++ --version
RUN python3 --version

# Add your application files
COPY . .

EXPOSE 8080

# Define the command to run your application
CMD [ "node", "server.js" ]
