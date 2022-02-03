FROM nginx:1.21.6-alpine

WORKDIR /workspace

RUN apk update && apk add --no-cache openssl nodejs npm yarn

# Nginx files
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/502.html /var/www/html/502.html

# Installing dependencies
COPY . .
RUN ["./docker/create-certificate.sh"]
RUN yarn && yarn global add pm2

# Building app
# Running the app
ENTRYPOINT [ "./docker/entrypoint.sh" ]
