module.exports = function (app) {
  app.get('/title', function (req, res) {
    res.send('word-associations')
  })

  app.get('/words', function (req, res) {
    res.send('words:')
  })
}
