const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const compiler = webpack(require('../webpack.config.js'))

const app = express()

// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
function normalizeAssets(assets) {
  return Array.isArray(assets) ? assets : [assets]
}

function assetsTag(response) {
  if (typeof response.locals.webpackStats === 'undefined') return ''

  const assetsByChunkName = response.locals.webpackStats.toJson().assetsByChunkName
  return normalizeAssets(assetsByChunkName.main)
    .filter((path) => path.endsWith('.js'))
    .map((path) => `<script src="${path}"></script>`)
    .join('\n')
}

app.use(middleware(compiler, { serverSideRender: true }))

// The following middleware would not be invoked until the latest build is finished.
app.use((_req, response) => {
  // then use `assetsByChunkName` for server-sider rendering
  // For example, if you have only one main chunk:
  const html = `<html>
    <head>
      <title>Test</title>
    </head>
    <body>
      <div id="root"></div>
      ${assetsTag(response)}
    </body>
  </html>`

  response.send(html)
})

let port = 4444
const index = Math.max(process.argv.indexOf('--port'), process.argv.indexOf('-p'))
if (index !== -1) {
  port = +process.argv[index + 1] || port
}

app.listen(port)
console.log(`Server started at http://localhost:${port}/`)
