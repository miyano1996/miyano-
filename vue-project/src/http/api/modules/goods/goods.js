import axios from '../../../axios'
const goods = {
    addGood: function(data) {
        return axios({
            url: "/goods/addGood",
            method: "post",
            // 只有get使用params,其他的都使用data
            data: {
                name: data.name,
                image: data.image,
                store: data.store,
                detail: data.detail,
                price: data.price,
                status: data.statue,
                shopId: data.shopId
            },
        })
    }
}


export default goods;