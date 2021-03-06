const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./database/index');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb+srv://kylenelson:50nl4Jszxvvca53Z@launches.0bygc.mongodb.net/<dbname>?retryWrites=true&w=majority');
mongoose.connect('', {
  
});

console.log("Connection established ------------------>", mongoose.connection);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("db colllections ------------------->", db.collections);

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/api', apiRouter);

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
