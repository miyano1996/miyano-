/*
 * @Author: your name
 * @Date: 2020-08-11 15:13:20
 * @LastEditTime: 2020-08-11 17:18:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\node-project\app.js
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwtAuth = require('./utils/jwt.js');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var shopsManagerRouter = require('./routes/shopManagerRouter/shopManager');

// 链接数据库
require('./dao/database');

var app = express();
// 拦截二级路径的js文件
var goods = require('./routes/good')
var imagesRouter = require('./routes/images');
var shopsRouter = require('./routes/shops')

// 跨域
var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 调用跨域
app.use(allowCrossDomain); // 使用该中间件


// token拦截
// app.use(jwtAuth);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/shopsManager',shopsManagerRouter);



// 匹配前段ajax请求的URL中的一级路径
app.use('/goods', goods);
app.use('/images', imagesRouter);

// app.use('/users', usersRouter);
app.use('/shops', shopsRouter);

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

// module.exports = app;
app.listen(3000, () => console.log('3000 端口启动成功！'));