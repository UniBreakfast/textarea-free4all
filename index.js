const { createServer } = require('http')
const { readFileSync } = require('fs')
const indexHtml = readFileSync('public/index.html').toString()

global.ta = ''

createServer(requestHandler).listen(
  process.env.PORT || 8080,
  () => console.log('Server started at http://localhost:8080')
)

function requestHandler(req, resp) {
  let { url, method } = req

  if (url == '/ta') {
    if (method == 'POST') wait(req).then(body => {
      ta = body 
      resp.end('ok')
    })
    else if (method == 'GET') resp.end(ta)
  }
  else if (url == '/' || url == '/index.html') {
    resp.end(indexHtml.replace('Some text', ta))
  }
  else {
    try {
      resp.end(readFileSync('public' + url))
    } catch {
      resp.statusCode = 404
      resp.end('404, file not found')
    }
  }
}

function wait(stream, parts = []) {
  return new Promise((resolve, reject) =>
    stream
      .on('error', reject)
      .on('data', part => parts.push(part))
      .on('end', () => resolve(Buffer.concat(parts).toString('utf8')))
  )
}
