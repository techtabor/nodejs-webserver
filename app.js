var express = require('express')
var app = express()

var defaultPort = 3000

app.get('/', function(req, res) {
  res.send('word-associations')
})

var appCallback = function() {
  console.log('word-associations listening on port ' + defaultPort)
}

app.listen(defaultPort, appCallback)
