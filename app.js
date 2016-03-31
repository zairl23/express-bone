var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Express Bone app listening on port 3000!');
});
