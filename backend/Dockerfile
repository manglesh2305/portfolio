FROM node:20-alpine

LABEL version="0.0.1"
LABEL description="Basic Setup for Node.js Express backend"
LABEL maintainer="Manglesh"

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 8000
ENV NODE_ENV=production
CMD ["node", "server.js"]