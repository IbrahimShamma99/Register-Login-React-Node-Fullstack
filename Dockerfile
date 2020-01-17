# base image
FROM node:10.16.3

# set working directory
WORKDIR /ClientImage

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ClientImage/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /ClientImage/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
