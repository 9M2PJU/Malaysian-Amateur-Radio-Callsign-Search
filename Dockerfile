FROM node:lts-bookworm-slim AS build
WORKDIR /app
COPY . /app
RUN npm install
CMD ["server.mjs"]
