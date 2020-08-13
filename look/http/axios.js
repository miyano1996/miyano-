//对原生axios进一步封装
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000", //axios前段地址
  timeout: 5000, //超时时间  如果超过了设定的5秒  自动断开
});
//设置请求拦截器 ：给所有的axios 请求设置统一的请求头(添加token)
instance.interceptors.request.use(
  (config) => {
    //请求拦截成功
    // 1.获取本地存储中的token
    const token = localStorage.token;
    // 2.将token添加到请求头中
    config.headers.Authorization = "Bearer " + token; //bearer后有个空格
    return config;
  },
  (err) => {
    //请求拦截失败
    return err;
  }
); //第一个是成功  第二个是失败

// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功
  (res) => {
    return res.data; // { data: {}}
  },
  // 响应失败
  (err) => {
    if (err.response.status === 401) {
      return {
        msg: "身份认证失败",
        success: false,
      };
    }
    return err;
  }
);

export default instance;
