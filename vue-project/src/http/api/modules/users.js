import axios from '../../axios.js';

const users={

    login:data=>{
        return axios({
            url:'/users/login',
            method:'post',
            data
        })
    },
    register:data=>{
        return axios({
            url:'/users/register',
            method:'post',
            data
        })
    },
    againName:data=>{//验证重名
        return axios({
            url:'/users/isLogin',
            method:'post',
            data:{account:data}
        })
    },
    whetherlogin:()=>{//是否登录  token是否失效
        return axios({
            url:'/users/tokenLogin',
            method:'get',
        })
    },
}

export default users;