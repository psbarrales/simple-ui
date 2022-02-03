FROM nginx:1.21.6-alpine
# Setting working directory. All the path will be relative to WORKDIR

RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main openssl \
  && apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
  && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main nodejs npm \
  && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community yarn

WORKDIR /workspace
# Nginx files
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Installing dependencies
COPY . .
RUN ["./docker/create-certificate.sh"]
RUN yarn && yarn global add pm2

# Building app
# Running the app
ENTRYPOINT [ "./docker/entrypoint.sh" ]
