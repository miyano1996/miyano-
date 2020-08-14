import axios from '../../axios.js'

const shopsManager = {
    getShopsSync: params => {
        return axios({
            url: '/shopsManager/getShops',
            method: 'get',
            params
        })
    },
    changeStateSync: data => {
        return axios({
            url: '/shopsManager/changeState',
            method: 'post',
            data
        })
    },
    changeCreditSync:data =>{
        return axios({
            url:'/shopsManager/changeCredit',
            method:'post',
            data
        })
    },
    changeLiftSync:data =>{
        return axios({
            url:'/shopsManager/changeLift',
            method:'post',
            data
        })
    }
}

export default shopsManager;
