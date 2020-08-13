import axios from '../../axios.js'

const shopsManager = {
    getShopsSync: params =>{
        return axios({
            url:'/shopsManager/getShops',
            method:'get',
            params
        })
    }
}
export default shopsManager