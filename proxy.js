const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(cors())

app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'http://49.12.97.203:9000',
    changeOrigin: true,
    pathRewrite: {
      '^/proxy': '',
    },
  })
)

const port = 3000
app.listen(port, () => {
  console.log(`CORS proxy server is running at http://localhost:${port}`)
})
