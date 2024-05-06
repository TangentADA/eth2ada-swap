const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // Redirect to HTTPS if not already using HTTPS
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.writeHead(302, {
        Location: `https://${req.headers.host}${req.url}`,
      });
      res.end();
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
