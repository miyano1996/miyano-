// 对原生的 axios 做进一步的封装
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000 // 设置超时的时间，超过设置时间自动断开连接
});

// 设置请求拦截器：给所有的 axios 请求设置统一的请求头（添加 token）
instance.interceptors.request.use(
    config => {
        // 如果请求拦截成功
        // 1. 获取本地存储中的 token
        const token = localStorage.token;
        // 2. 将 token 添加到请求头中
        // config.headers.Authorization = 'Bearer ' + token;
        config.headers.Authorization = 'Bearer ';
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
        return res.data; // { data: {}}
    },
    // 响应失败
    err => {
        console.log(err.response);
        if (err.response.status === 401) {
            return {
                msg: '身份认证失败,请重新登录',
                isable: false
            }
        }
        return err;
    }
);
export default instance;