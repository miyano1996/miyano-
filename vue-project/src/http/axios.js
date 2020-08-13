/*
 * @Author: your name
 * @Date: 2020-08-11 14:48:33
 * @LastEditTime: 2020-08-11 14:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\vue-project\src\http\axios.js
 */
// 对原生的 axios 做进一步的封装
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000 // 设置超时的时间，超过设置时间自动断开连接
});

// 设置请求拦截器：给所有的 axios 请求设置统一的请求头（添加 token）
instance.interceptors.request.use(//数据返回到发送请求的地方
    config => {
        // 如果请求拦截成功
        // 1. 获取本地存储中的 token
        const token = localStorage.token;
        // 2. 将 token 添加到请求头中
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    },
    err => {
        // 如果请求拦截失败
        return err;
    }
);

// 设置响应拦截器
instance.interceptors.response.use(
    // 响应成功
    res => {
        console.log('success');
        return res; // { data: {}}
        
    },
    // 响应失败
    err => {
        // console.log(err.response);
        if (err.response.status === 401) {//401 token 头过期
            return  {data:{msg: '身份认证失败,请重新登录',success: false}}
        }
        return err;
    }
);
export default instance;