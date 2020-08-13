const {KEY}=require('./consts.js');//密钥会多次用到  封装为常量减少出错
const expressJWT = require('express-jwt');
const jwtAuth = expressJWT({
    secret: KEY, //对应着生成token时的密钥字符串
    algorithms: ['HS256'],
	credentialsRequired: true
}).unless({
//配置不需要token 验证的url路径
//调试axios配置的路径'/students/getstudents','/classes/getclass','/students/addstudents','/students/delstudentsById'
path: ['/users/login','/users/register','/users/again','/imgs/upload']});

module.exports = jwtAuth;
