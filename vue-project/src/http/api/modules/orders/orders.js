import axios from '../../../axios'
const orders = {
    getAllOrders: function(data) {
        return axios({
            url: "/orders/getAllOders",
            method: "get",
            // 只有get使用params,其他的都使用data
            params: {
                data
            }
        })
    },
    delOrder: function(id) {
        return axios({
            url: "/orders/delOrder",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                _id: id.id,
                success: id.success
            }
        })
    }
}


export default orders;