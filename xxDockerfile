FROM node:carbon

ENV NPM_CONFIG_LOGLEVEL warn

# Create App Dir
WORKDIR /src/

# Install app deps
COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]