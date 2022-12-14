var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

var indexRouter = require('./routes/index');
var gettasksRouter = require('./routes/gettasks');
var addmydaytaskRouter = require('./routes/addmydaytask');
var addimportanttaskRouter = require('./routes/addimportanttask');


var cors = require('cors');
require('dotenv/config');

var app = express();
app.use(cors());

app.use(bodyParser.json());

//routes
// app.use('/gettasks',gettasksRouter);
app.use('/myday',addmydaytaskRouter);
app.use('/important',addimportanttaskRouter);
// usersRouter(app);

app.get('/',(req,res) => {
   
  
  res.send('we are in hme');
});


//connected to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewurlParser: true },
 () => console.log('connected to DB!')
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/gettasks', gettasksRouter);
app.use('/myday',addmydaytaskRouter);
app.use('/important',addimportanttaskRouter);



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
app.listen(3001);
module.exports = app;
