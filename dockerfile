# Build Stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#docker build -t frontend-music .
# docker build -t b1uefeet/frontend-music .