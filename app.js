var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var lockitConfig = require('./config/lockit.js');
var Lockit = require('lockit');

// db
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

// routes
var lockit = new Lockit(lockitConfig);
app.use(lockit.router);
lockit.on('logout', function(user, res) {
  res.redirect('/login');
});
lockit.on('signup', function(user, res) {
	console.log('a new user signed up');
	res.send('Welcome!');
});
app.get('/', function(req, res) {
	res.send(process.env.NODE_ENV);
    // res.send('hello, express-bone');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


// launch
http.createServer(app).listen(app.get("port"));
