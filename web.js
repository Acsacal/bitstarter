var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var str = '';

var str_gen = function () {
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  return(data.toString('utf-8'));
});
};

str = str_gen();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
