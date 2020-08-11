const expressJWT = require('express-jwt');

const jwtAuth = expressJWT({
    secret: 'tokenyanzheng', // 对应着生成 token 时的密钥字符串
    algorithms: ['HS256'],
    credentialsRequired: true
}).unless({
    // 配置不需要 token 验证的 url 路径
    path: ['/users/login', '/users/sign', '/images/upload']
});

module.exports = jwtAuth;