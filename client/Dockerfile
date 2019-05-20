FROM node:10.15.3 as builder
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm build
FROM nginx
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/defult.conf
COPY --from=builder /app/build /usr/share/nginx/html