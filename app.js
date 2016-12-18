var express = require('express')
var app = express()

var defaultPort = 3000

app.get('/title', function(req, res) {
  res.send('word-associations')
})

var server = app.listen(defaultPort, function() {
  console.log('word-associations listening on port ' + defaultPort)
})
