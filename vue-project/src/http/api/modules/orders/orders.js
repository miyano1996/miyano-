import axios from '../../../axios'
const orders = {
    addOrder: function(data) {
        return axios({
            url: "/orders/addOrder",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                status: data.status,
                goodId: data.goodId,
                userId: data.userId,
                num: data.num,
                removed: false,
                isPay: data.isPay
            }
        })
    },
    pay: function(id) {
        return axios({
            url: "/orders/pay",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                _id: id,
            }
        })
    },
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
    },
    delCarOrder: function(id) {
        return axios({
            url: "/orders/delCarOrder",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                _id: id,
            }
        })
    }
}


export default orders;