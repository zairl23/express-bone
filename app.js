var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
// db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bone');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected into mongodb!');
});

var KittyModel = require('./services/KittyModel.js');

app.set("port", process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.disable("x-powered-by");
app.locals.appName = "Express Bone";
app.use(logger("dev"));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  var kitty = new KittyModel({ name: 'Silence' });
  console.log(kitty.name); // 'Silence'
  res.send('hello world,' + kitty.speak());
});

// 启动应用
http.createServer(app).listen(app.get("port"));
