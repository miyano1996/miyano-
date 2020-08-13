import axios from '../../../axios'

const shops = {
    getOwnShopsSync(data){
        console.log(data);
        return axios({
            url: "/shops/getShops",
            method: "get",
            params: {managerId:data},
        })
    },
    addShopsSync(data){
        return axios({
            url:"/shops/addShops",
            method:'post',
            data:data
        })
    },
    delShopsSync(_id){
        return axios({
            url:"/shops/delShops",
            method:'post',
            data:{_id}
        })
    },
    updateShopsSync(data){
        return axios({
            url:"/shops/updateShops",
            method:'post',
            data:data
        })
    }
}
export default shops