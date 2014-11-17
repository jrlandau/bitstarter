var fs = require('fs');  
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get ('/', function  (request, response) {
  var fileBuffer = fs.readFileSync('index.html');
  response.send(fileBuffer.toString('utf-8'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
