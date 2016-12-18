var express = require('express')
var app = express()

var defaultPort = 3000

var server = app.listen(defaultPort, function() {
  console.log('word-associations listening on port ' + defaultPort)
})

app.get('/title', function(req, res) {
  res.send('word-associations')
})

app.get('/words', function(req, res) {
  res.send('words:')
})
