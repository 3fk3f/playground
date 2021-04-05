const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('config');
const morgan = require('morgan');

const commonDataMiddleware = require('./middlewares/common-data');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const publicDir = path.join(__dirname, 'public');
const viewsDir = path.join(__dirname, 'views');

app.set('views', viewsDir);
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(commonDataMiddleware);

if (config.get('debug')) {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(publicDir));
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.info(`Server started on ${3000}`);
  console.info(`Open http://localhost:${3000}/`);
});
