var https = require('https')

var handleRequestResult = (res) => {
  res.on('data', (d) => {
    console.log('BODY in result of https request: ' + d)
  })
}

var result = https.get('https://api.ipify.org')

handleRequestResult(result)
