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
        console.log(data);
        return axios({
            url:'/users/isLogin',
            method:'post',
            data
        })
    },
    // lll:data=>{
    //     return data
    // }
}

export default users;