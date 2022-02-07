# Simple - UI
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Estado en GitHub Action](https://github.com/psbarrales/simple-ui/actions/workflows/ui.yml/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5077d23911514ce2ba27625fcd4c2aec)](https://www.codacy.com/gh/psbarrales/simple-ui/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=psbarrales/simple-ui&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/5077d23911514ce2ba27625fcd4c2aec)](https://www.codacy.com/gh/psbarrales/simple-ui/dashboard?utm_source=github.com&utm_medium=referral&utm_content=psbarrales/simple-ui&utm_campaign=Badge_Coverage)

Simple web site on Next.JS with Ant Design Framework
## Prerequisites
```bash
node
docker
```

## 3rd party libraries
*  [Next.js](https://nextjs.org/)
*  [Ant Design](https://ant.design/)
*  [Styled Components](https://styled-components.com/)
## Folder Structure
```plain
    public/                      # Public Next.js conventions
    src/
    ├── components               # React components
    ├── containers               # React containers
    ├── hooks                    # React hooks
    ├── pages                    # Pages Next.js conventions
    ├── styles                   # Theme and styles javascript
    ├── utils                    # Utility funcs
    └── README.md
```

## Server Running
```bash
docker-compose up
```
The server will be running on port 80 and SSL 443
*  http://localhost
*  https://localhost

## Status endpoints
`/metrics`: Get node metrics for prometheus tools

`/up`: Return UP text

`/ping`: Return PONG text

## Testing
### Linter
*  `npm run lint`
*  `npm run lint:fix`
### Jest
*  `npm run test`
*  `npm run test:coverage`
