#!/bin/sh

set -e

if [ -z $NODE_ENV ]; then
  echo "NODE_ENV is missing"
  exit 1
fi

if [[ $NODE_ENV = "production" ]]; then
  pm2-runtime start 'yarn start' &
else
  pm2-runtime start 'yarn dev' &
fi

nginx -g 'daemon off;'
