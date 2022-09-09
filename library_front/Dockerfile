FROM node:16

# maintainer
LABEL Author="fernandes-natanael"

# create directory to store app source code
RUN mkdir code

#directory to store app source code
WORKDIR /code

COPY package*.json /code/

RUN npm install -g npm@latest && npm install

COPY . /code/

EXPOSE 3000

CMD [ "npm", "start" ]