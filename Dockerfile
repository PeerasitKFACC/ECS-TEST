FROM node:fermium

ARG GITCOMMIT=""
ENV GIT_COMMIT_HASH=${GITCOMMIT}

WORKDIR /app

COPY . .

RUN yarn install

CMD ["node", "index.js"]

EXPOSE 80