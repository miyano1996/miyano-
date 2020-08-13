import axios from '../../../axios'
const orders = {
    getAllOrders: function() {
        return axios({
            url: "/orders/getAllOders",
            method: "get",
            // 只有get使用params,其他的都使用data
            params: {}
        })
    }
}


export default orders;