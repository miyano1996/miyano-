//连接数据库  在一级路径之前
const mongoose =require('mongoose');
//设置需要连接的数据库地址
const dbURI='mongodb://localhost/day03';
//连接数据库
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true});
//数据库连接成功后执行
mongoose.connection.on('connected',function(){
  console.log(dbURI+'数据库连接成功!!!');
});

// require('./models/usersModel')