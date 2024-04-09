# Base image
FROM node:lastest

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

ENV NODE_ENV=development

# Creates a "dist" folder with the production build
RUN yarn build

# Start the server using the production build
CMD [ "yarn","start" ]
