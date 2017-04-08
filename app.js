var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var slider_api = require('./routes/slider_api');
var seckill_api = require('./routes/seckill_api');
var findList_api = require('./routes/findList_api');
var coupon_api = require('./routes/coupon_api');
var rec_api = require('./routes/rec_api');
var eachFloor_api = require('./routes/eachFloor_api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/api/slider', slider_api); //轮播图接口
app.use('/api/seckill', seckill_api); //秒杀物品接口
app.use('/api/findItems', findList_api); //发现好货 & 排行榜
app.use('/api/couponInfo', coupon_api); //领券中心
app.use('/api/rec', rec_api);
app.use('/api/eachFloor', eachFloor_api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
