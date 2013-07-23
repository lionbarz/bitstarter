var express = require('express');

var app = express();

app.get('/', function(request, response) {
  var fs = require('fs');
  var msg = fs.readFileSync("index.html").toString();
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
