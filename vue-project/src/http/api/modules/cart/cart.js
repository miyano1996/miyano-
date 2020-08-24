import axios from '../../../axios'

const cart = {
    addCart(data){
        return axios({
            url:"/cart/addCart",
            method:'post',
            data
        })
    },
    delCart(_id){
        return axios({
            url:"/cart/delart",
            method:'post',
            data:{_id}
        })
    },
    getCart(data){
   
        return axios({
            url:"/cart/getCart",
            method:"post",
            data
        })
    },
    getOrders(data){
        return axios({
            url:"/cart/getOrders",
            method:"post",
            data
        })
    },
    updateCart(data){
        return axios({
            url:'/cart/updateCart',
            method:"post",
            data
        })
    },
    deleteCart(data){
        return axios({
            url:'/cart/deleteCart',
            method:'post',
            data
        })
    }
}
export default cart