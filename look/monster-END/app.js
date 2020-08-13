var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwtAuth=require('./utils/jwt.js');//token配置

//连接数据库  在一级路径之前  去三层拿
require('./dao/database.js');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter=require('./routes/students');
var classesRouter=require('./routes/classes');
var teachersRouter=require('./routes/teachers');
var imgsRouter=require('./routes/imgs');
var app = express();//token配置

//跨域配置
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept,Authorization");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCrossDomain); // 使用该中间件

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//调用跨域
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(jwtAuth);//token配置  不要验证就注释关闭

app.use('/', indexRouter);
app.use('/users', usersRouter);//用户系统  登录注册;
app.use('/students', studentsRouter);//学生系统
app.use('/classes', classesRouter);//班级系统
app.use('/teachers', teachersRouter);//教师系统
app.use('/imgs', imgsRouter);//图片头像系统

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
app.listen(3000,()=>console.log('3000端口启动成功!--上线版本'));
  