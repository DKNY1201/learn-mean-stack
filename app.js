var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var appRoutes = require('./routes/app');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Setup folder view
app.set('view engine', 'hbs'); // How to render the view

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// How to render the body
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// End how to render the body
app.use(express.static(path.join(__dirname, 'public'))); // Public folder that can access from internet

// Configuration for Header when accessing from another server
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes); // Every request will be handled by appRoutes

// catch 404 and forward to error handler
// Render page if catch 404, here we render the index (Angular app).
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
