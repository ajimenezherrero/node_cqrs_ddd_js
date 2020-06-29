FROM mhart/alpine-node:14 AS base
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
ENV HOME /app
WORKDIR ${HOME}
COPY package.json data/*.json ${HOME}/

FROM base AS dependencies
COPY package-lock.json .babelrc ${HOME}/
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install --no-production
COPY src/ ${HOME}/src

FROM dependencies AS development
RUN npm install -g nodemon
CMD nodemon src/index.js --exec ./node_modules/.bin/babel-node -L

FROM dependencies AS builder
RUN npm run build

FROM base AS release
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prod_node_modules ./node_modules
CMD npm run serve
