import axios from '../../axios.js'

const shopsManager = {
    getShopsSync: params =>{
        return axios({
            url:'/shopsManager/getShops',
            method:'get',
            params
        })
    },
    changeStateSync: data =>{
        console.log(data);
        return axios({
            url:'/shopsManager/changeState',
            method:'post',
            data
        })
    }
}

export default shopsManager;
