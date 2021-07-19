FROM node:14-alpine as builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json tsconfig-build.json ./
COPY ./src ./src
RUN yarn build

FROM node:14-alpine

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production
USER node
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
CMD node dist