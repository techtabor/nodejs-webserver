# nodejs-webserver
simple node.js webserver for learning some basic concepts

## first steps: use someone else's webserver

* open gitbash (or terminal on mac)
* `git clone https://github.com/techtabor/nodejs-webserver.git`
* `cd word-associations`
* `npm install`: this will install dependencies, namely `express` npm package
  * what is express?
* `() => {}` is a shorthand for `function() {}` javascript function definition
* type `node getPublicAPI.js` in your terminal
* it gets the response from a publicly available webserver
* what is the first param of the `https.get` function?
* what is the second param of the `https.get` function?
  * it is a so called callback function
  * callback: it will be CALLED when the main part of the function has been executed and returned BACK its result
  * callback functions in javascript are a solution to handle asynchronous function calls
  * the `https.get` function is asynchronous, it may run parallel with other commands. Still, you want to handle the result exactly right after it is received. So you put in the callback function.
  * it is called after: test it with using the result inside the callback function

  ``` javascript
  var handleRequestResult = (res) => {
    console.log(result)
    res.on('data', (d) => {
      console.log('BODY in result of https request: ' + d)
    })
  }

  var result = https.get('https://api.ipify.org', handleRequestResult)
  ```
  * if you would try to handle the result in a simple, not callback function: it would not work as the handling will be executed sooner than the https get request is received.

  ``` javascript
  var https = require('https')

  var handleRequestResult = (res) => {
    res.on('data', (d) => {
      console.log('BODY in result of https request: ' + d)
    })
  }

  var result = https.get('https://api.ipify.org')

  handleRequestResult(result)
  ```

## second steps: create your own webserver

* create `app.js` file with the following

``` javascript
var express = require('express')
var app = express()

app.listen(3000, () => {
  console.log('nodejs-webserver app listening on port 3000')
})
```

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
  console.log('nodejs-webserver app listening on port ' + defaultPort)
})
```

* open ```localhost:2016```
* open ```localhost:3000```
* change port back to 3000
* add response for GET request: add the following to the end of your `app.js` file

``` javascript
app.get('/', (req, res) => {
  res.send('nodejs-webserver')
})
```

* what are the two parameters of the `app.listen` function?
* what happens when you delete the second parameter? Start you server.

``` javascript
app.listen(defaultPort)
```

* what is the req parameter? add the following line:

``` javascript
app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('nodejs-webserver')
})
```

* the server should be able to show content on another page: `localhost:3000/words`.

``` javascript
app.get('/words', (req, res) => {
  res.send('words:')
})
```

## third steps: use your own server

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
