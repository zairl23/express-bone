var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var config = require('./config.js');
var Lockit = require('lockit');
// db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bone');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected into mongodb!');
});

// setting
app.set("port", process.env.PORT || 3000);
// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.disable("x-powered-by");
app.locals.appName = "Express Bone";

// middleware
app.use(cookieParser());
app.use(cookieSession({
	secret: 'your secret here'
}));
app.use(logger("dev"));
app.use(bodyParser.json({limit : "1000kb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// services
var KittyModel = require('./services/KittyModel.js');

// routes
var lockit = new Lockit(config);
app.use(lockit.router);
lockit.on('logout', function(user, res) {
  res.redirect('/login');
});
lockit.on('signup', function(user, res) {
	console.log('a new user signed up');
	res.send('Welcome!');
});
app.get('/', function(req, res) {
  var kitty = new KittyModel({ name: 'Silence' });
  console.log(kitty.name); // 'Silence'
  res.send('hello world,' + kitty.speak());
});

// launch
http.createServer(app).listen(app.get("port"));
