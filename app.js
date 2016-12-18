var express = require('express')
var app = express()
require('./router/main')(app)

var defaultPort = 3000

app.listen(defaultPort, function () {
  console.log('word-associations listening on port ' + defaultPort)
})
