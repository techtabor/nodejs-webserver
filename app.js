var express = require('express')
var app = express()

var defaultPort = 2016

app.listen(defaultPort, function () {
  console.log('word-associations app listening on port ' + defaultPort)
})
