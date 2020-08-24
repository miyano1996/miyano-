import $api from '../../http/api/api'

export default {
    namespaced: true,
    actions:{
        async addCartAsync(context, data) {
            return (await $api.cart.addCart(data)).data
        },
        async getCartAsync(context,userId){
            const msg = (await $api.cart.getCart({userId})).data
            return msg
        },
        async getOrdersAsync(context,userId){
            const msg = (await $api.cart.getOrders({userId})).data
            return msg
        },
        async updateCartAsync(context,data){
            const msg = (await $api.cart.updateCart(data)).data
            return msg
        },
        async deleteCartAsync(context,_id){
            const msg = (await $api.cart.deleteCart({_id})).data
            return msg
        }
    }
}