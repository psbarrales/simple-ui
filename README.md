# Simple - UI
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Estado en GitHub Action](https://github.com/psbarrales/simple-ui/actions/workflows/ui.yml/badge.svg)

Simple web site on Next.JS with Ant Design Framework
## Prerequisites
```
node
docker
```

## 3rd party libraries
* [Next.js](https://nextjs.org/)
* [Ant Design](https://ant.design/)
## Folder Structure

    src/
    ├── components               # React components
    ├── containers               # React containers
    ├── hooks                    # React hooks
    ├── pages                    # Pages Next.js conventions
    ├── public                   # Public Next.js conventions
    ├── utils                    # Utility funcs
    └── README.md

## Server Running
```
docker-compose up
```
The server will be running on port 80 and SSL 443
* http://localhost
* https://localhost

## Status endpoints
`/metrics`: Get node metrics for prometheus tools

`/up`: Return UP text

`/ping`: Return PONG text

## Testing
### Linter
* `npm run lint`
* `npm run lint:fix`
### Jest
* `npm run test`
* `npm run test:coverage`
