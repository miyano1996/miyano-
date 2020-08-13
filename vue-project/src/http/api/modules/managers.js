import axios from '../../axios.js';

const managers={

    loginAdmin:data=>{
        return axios({
            url:'/managers/loginAdmin',
            method:'post',
            data
        })
    },
    login:data=>{
        return axios({
            url:'/managers/login',
            method:'post',
            data
        })
    },
    register:data=>{
        return axios({
            url:'/managers/register',
            method:'post',
            data
        })
    },
    againName:data=>{//验证重名
        return axios({
            url:'/managers/isLogin',
            method:'post',
            data:{account:data}
        })
    },
}

export default managers;