import $api from '../../http/api/api'
export default {
    namespaced: true,
    state: {
        shops:[],
        ownShops:[]
    },
    mutations: {
        getOwnShops(state,data){
            state.ownShops = data
        }
    },
    actions: {
        async getOwnShopsSync(context,_managerId){
            // console.log(_managerId);
            return await $api.shops.getOwnShopsSync(_managerId)
        },
        async addShopsSync(context,data){
            return await $api.shops.addShopsSync(data)
        },
        async delShopsSync(context,_id){
            return await $api.shops.delShopsSync(_id)
        }
    },
}