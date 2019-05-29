var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();
app.use(function(req, res, next) {
  if (req.query._method) {
    req.method = req.query._method;
  }
  next();
});

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var climbsRoutes = require('./routes/climbs');

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(methodOverride('_method'));

//session middleware for passport
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/climbs', climbsRoutes);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
