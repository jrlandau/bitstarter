// there are 2 versions of this, they may! correspond to different releases of Express.
// the one below does not seem to work on Heroku

var fs = require('fs');
var express = require('express')
var app = express();

  app.set('port', (process.env.PORT || 5000))
  app.use(express.static(__dirname + '/public'))

  app.get ('/', function (request, response) {
  var fileBuffer = fs.readFileSync('index.html');
  response.send(fileBuffer.toString('utf-8'));
})

  app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

/*

var fs = require('fs');  
var express = require('express')

var app = express.createServer(express.logger());

//app.set('port', (process.env.PORT || 8080))
//pp.use(express.static(__dirname + '/public'))

app.get ('/', function  (request, response) {
  var fileBuffer = fs.readFileSync('index.html');
  response.send(fileBuffer.toString('utf-8'));
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);

//app.listen(app.get('port'), function() {
//  console.log("Node app is running at localhost:" + app.get('port'))
})

*/
