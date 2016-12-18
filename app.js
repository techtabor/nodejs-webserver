var express = require('express')
var app = express()

var defaultPort = 3000

app.get('/', function(req, res) {
  res.send('word-associations')
})

var appCallback = function() {
  console.log('server.address().port: ' + server.address().port)
  console.log('word-associations listening on port ' + defaultPort)
}

var server = app.listen(defaultPort, appCallback)

console.log('app.listen() executed.')
