var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function getFileContent(filename) {
  buff = fs.readFileSync(filename);
  return buff.toString();
}

app.get('/', function(request, response) {
  response.send(getFileContent('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
