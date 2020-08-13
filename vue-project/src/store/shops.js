import $api from '../http/api/api'
export default {
    namespaced: true,
    state: {
        shops: [],
        ownShops: []
    },
    mutations: {
        getOwnShops(state, data) {
            state.ownShops = data
        }
    },
    actions: {
        async getOwnShopsSync(context, _managerId) {
            return await $api.shops.getOwnShopsSync(_managerId)
        }
    },
}