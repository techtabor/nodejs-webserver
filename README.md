# word-associations
simple node.js webserver for learning some basic concepts

* open gitbash (or terminal on mac)
* `git clone https://github.com/techtabor/word-associations.git`
* `cd word-associations`
* `npm install`: this will install dependencies, namely `express` npm package
  * what is express?
  * web framework for node.js
* create `app.js` file with the following

``` javascript
var express = require('express')
var app = express()

app.listen(3000, () => {
  console.log('word-associations app listening on port 3000')
})
```

* `() => {}` is a shorthand for `function() {}` javascript function definition

* type `node app.js` in your terminal
* what do you see if you open `localhost:3000` in your browser?
* what does localhost mean, what is the corresponding IP-address?
* what does 3000 represent?
  * the number of the port
  * can you change it to any number, e.g. 80?
  * why is the 80 port special?
* stop the webserver (Ctrl + C, Ctrl + C), then refresh the page in your browser
* change the used port to 2016

``` javascript
var defaultPort = 2016

app.listen(defaultPort, () => {
  console.log('word-associations app listening on port ' + defaultPort)
})
```

* open ```localhost:2016```
* open ```localhost:3000```
* change port back to 3000
* add response for GET request: add the following to the end of your `app.js` file

``` javascript
app.get('/', (req, res) => {
  res.send('word-associations')
})
```

* what are the two parameters of the `app.listen` function?
* what happens when you delete the second parameter? Start you server.

``` javascript
app.listen(defaultPort)
```

* this function would be called last: you can rely on results inside it.

``` javascript
var appCallback = () => {
  console.log('server.address().port: ' + server.address().port)
  console.log('word-associations listening on port ' + defaultPort)
}

var server = app.listen(defaultPort, appCallback)

console.log('app.listen() executed.')
```

* what is the req parameter? add the following line:

``` javascript
app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('word-associations')
})
```

* the server should be able to show content on another page: `localhost:3000/words`.

``` javascript
app.get('/words', (req, res) => {
  res.send('words:')
})
```

* start your server and get the sent result from another node.js script

``` javascript
var http = require('http')

var httpOptions = {
  hostname: 'localhost',
  port: 3000,
  path: '/title'
}

var handleRequestResult = (res) => {
  res.on('data', (d) => {
    console.log('BODY in result of http request: ' + d)
  })
}

http.get(httpOptions, handleRequestResult)
```

* run `node get.js` in another window of your terminal

*If you have problems, check previous commits on github, they contain solutions to each step.*

## more advanced steps

* refactor routing to separate file
* add code for building a chain of associated words and POST it as JSON
