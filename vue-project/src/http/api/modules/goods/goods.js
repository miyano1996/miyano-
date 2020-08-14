import axios from '../../../axios'
const goods = {
    addGood: function(data) {
        return axios({
            url: "/goods/addGood",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                type: data.type,
                name: data.name,
                image: data.image,
                store: data.store,
                detail: data.detail,
                price: data.price,
                status: data.status,
                shopId: data.shopId
            },
        })
    },
    getAllGoods: () => {
        return axios({
            url: "/goods/findAllGoods",
            method: 'get'
        })
    },
    getGood(_id) {
        return axios({
            url: "/goods/findGood",
            method: "post",
            data: {
                _id: _id
            }

        })
    },
    updatedGoods(data) {
        return axios({
            url: '/goods/updateGood',
            method: 'post',
            data: {
                type: data.type,
                name: data.name,
                image: data.image,
                store: data.store,
                detail: data.detail,
                price: data.price,
                id: data._id
            }
        })
    },
    delGoods(data) {
        return axios({
            url: '/goods/delGood',
            method: 'post',
            data: {
                status: data.status,
                id: data.id
            }
        })
    },
    searchGoods() {

    }
}


export default goods;