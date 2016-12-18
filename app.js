var express = require('express')
var app = express()

var defaultPort = 3000

app.listen(defaultPort, function () {
  console.log('word-associations app listening on port ' + defaultPort)
})
