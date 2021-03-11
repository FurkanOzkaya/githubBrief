FROM node:14.15.5-alpine AS build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.7 as production
EXPOSE 80
COPY --from=build  /app/dist/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]