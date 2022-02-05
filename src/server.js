const path = require('path')
const next = require('next')
const Koa = require('koa')
const Router = require('koa-router')
const send = require('koa-send')
const client = require('prom-client')

const dev = process.env.NODE_ENV !== 'production'
// const hostname = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, port })
const handler = app.getRequestHandler()
const server = new Koa()
const router = new Router()

const Registry = client.Registry
const register = new Registry({
  prefix: `${process.env.PREFIX_METRICS || 'nodejs_'}_`,
  timeout: 5000,
})
const serveBase = path.join(process.cwd(), '/src/public')

client.collectDefaultMetrics({ register })
app.prepare().then(() => {
  router.get('/metrics', async (ctx) => {
    ctx.body = await register.metrics()
  })
  router.get('/up', async (ctx) => {
    ctx.body = 'UP'
  })
  router.get('/ping', async (ctx) => {
    ctx.body = 'PONG'
  })
  router.get('/public/(.*)', async (ctx) =>
    send(ctx, ctx.path.replace('/public', ''), {
      root: serveBase,
      immutable: true,
    }),
  )
  router.get('(.*)', async (ctx) => {
    await handler(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(router.routes())
  server.listen(3000, (_) => console.log(`Next.JS Ready on port ${port}`))
})
