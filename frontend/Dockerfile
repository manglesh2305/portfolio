# Frontend Dockerfile for Vite React app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY postcss.config.js tailwind.config.js vite.config.js ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]