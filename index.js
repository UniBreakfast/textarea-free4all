require('http').createServer(requestHandler).listen(process.env.PORT||8080)
const fs = require('fs')

function requestHandler(req, resp){

    if (req.method == 'POST') wait(req).then(body => ta = body)
    try {
        if (req.url == '/') {
            var html = fs.readFileSync('public/index.html')
            resp.end(html.toString().replace('Some text', ta))
            
        } 
        else resp.end(fs.readFileSync('public' + req.url))
    } catch {
        resp.end('Mistake')
    }
    console.log(req.url)
    
}

const wait = (stream, parts=[])=> new Promise((resolve, reject)=>
  stream.on('error', reject).on('data', part => parts.push(part))
    .on('end', ()=> resolve(Buffer.concat(parts).toString('utf8'))))

var ta = ''


