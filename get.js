var http = require('http')

var httpOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/title'
}

var handleRequestResult = (res) => {
  res.on('data', (chunk) => {
    console.log('BODY in result of http request: ' + chunk)
  })
}

http.get(httpOptions, handleRequestResult)
