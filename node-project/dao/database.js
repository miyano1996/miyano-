/*
 * @Author: your name
 * @Date: 2020-08-11 14:48:32
 * @LastEditTime: 2020-08-11 14:52:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\node-project\dao\database.js
 */
const mongoose = require('mongoose');
// 设置需要连接的数据库地址
const dbURI = 'mongodb://localhost/myDatabase';
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 当数据库连接成功后触发该事件
mongoose.connection.on('connected', function() {
    console.log(dbURI + ' 数据库连接成功！');
});