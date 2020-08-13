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
    getGood() {
        return axios({
            url: "/goods/findGood",
            method: "post",
            data: {

            }

        })
    },
    updatedGoods() {

    },
    delGoods() {

    },
    searchGoods() {

    }
}


export default goods;