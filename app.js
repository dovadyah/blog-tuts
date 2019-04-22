//Requiring packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require(__dirname + '/controllers/index');
var blogsRouter = require(__dirname + '/controllers/blogs');
var aboutMeRouter = require(__dirname + '/controllers/about-me');
var contactRouter = require(__dirname + '/controllers/contact');
var portfolioRouter = require(__dirname + '/controllers/portfolio');
var httpOverride = require(__dirname + '/controllers/httpOverride');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//check if there is a post request with a body coming in and check if there is the _method field to DELETE or Other to change HTTP request
app.use(httpOverride);

app.use(express.static(path.join(__dirname, 'public')));

//middleware sub-stack that handles request to all of the following paths, in each instantiation of object it handles respective REST request
app.use('/', indexRouter);
app.use('/blog', blogsRouter);
app.use('/about-me', aboutMeRouter);
app.use('/contact', contactRouter);
app.use('/portfolio', portfolioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
