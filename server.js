var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var path = process.cwd();

app.get('/', function (req, res) {
  res.sendFile(path + '/public/index.html');
});

app.get('/favicon.ico', function (req, res) {
});

app.get('/:file', function (req, res) {
  res.sendFile(path + '/public/' + req.params.file);
});

app.get('/public/css/:file', function (req, res) {
  res.sendFile(path + req.url);
});

app.get('/public/css/nav/:file', function (req, res) {
  res.sendFile(path + req.url);
});

app.get('/public/images/:file', function (req, res) {
  res.sendFile(path + req.url);
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});