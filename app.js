var express = require('express')
var app = express()

var defaultPort = 2016

app.get('/', function(req, res) {
  res.send('word-associations')
})

app.listen(defaultPort)
