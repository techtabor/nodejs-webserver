var express = require('express')
var app = express()

var defaultPort = 3000

app.get('/', function(req, res) {
  console.log(req.headers)
  res.send('word-associations')
})

var server = app.listen(defaultPort, function() {
  console.log('word-associations listening on port ' + defaultPort)
})
