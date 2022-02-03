#!/bin/sh

pm2-runtime start 'yarn dev' &
nginx -g 'daemon off;'
