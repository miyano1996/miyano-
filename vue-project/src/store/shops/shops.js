import $api from '../../http/api/api'
export default {
    namespaced: true,
    state: {
        shops: [],
        ownShops: [],
        oneShop: {},
        shopsId: '',
        //ydh注：此处用于保存axios获取的单个店铺的数据
        getOneShop: {}
    },
    getters: {
        singleShop: (state) => {
            return (state.ownShops.filter(item => item._id == state.shopsId))[0]
        }
    },
    mutations: {
        getOwnShops(state, data) {
            state.ownShops = data
        },
        addOneShop(state, data) {
            state.oneShop = data
        },
        backOne(state) {
            state.oneShops = {}
        },
        changeShopsId(state, _id) {
            state.shopsId = _id
        },
        // saveOneShop(state, newData) {
        //     state.getOneShop = newData
        // }
    },
    actions: {
        async getOwnShopsSync({ commit }, _managerId) {
            // console.log(_managerId);
            const data = await $api.shops.getOwnShopsSync(_managerId);
            commit('getOwnShops', data.data)
            return data
        },
        async addShopsSync(context, data) {
            return await $api.shops.addShopsSync(data)
        },
        async delShopsSync(context, _id) {
            return await $api.shops.delShopsSync(_id)
        },
        async updateShopsSync(context, data) {
            return await $api.shops.updateShopsSync(data)
        },
        // async getOneShopSync({ state, commit }) {
        //     console.log(state.shopsId)
        //     const data = await $api.shops.getOneShopSync({ _id: state.shopsId })
        //     commit('saveOneShop', data.data.rows[0])
        //     return data.data
        // }
    },
}