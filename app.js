var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hola Gennaro');
});

app.listen(process.env.PORT || 9000);

module.exports = app;