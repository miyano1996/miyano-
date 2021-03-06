import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {
        goods: [],
        goodid: "",
        goodone: {},
        shopId: "",
    },
    mutations: {
        getAllGood(state, data) {
            state.goods = data
        },
        goodsid(state, id) {
            state.goodid = id
        },
        getgood(state, data) {
            state.goodone = data
        },
        isgetGoods(state, data) {
            state.shopId = data
        }
    },
    actions: {
        async addGood({ state, commit, actions }, data) {
            const msg = await api.goods.addGood(data);
            return msg
        },
        async getAllGoods({ state, commit, actions }) {
            const msg = await api.goods.getAllGoods();
            commit('getAllGood', msg.data.data.data.filter((item) => item.status != false && item.shopId == state.shopId));
        },
        async getGood({ state, commit, actions }, _id) {
            const msg = await api.goods.getGood(_id);
            commit('getgood', msg.data.data.data)
        },
        async updatedGood({ state, commit, actions }, data) {
            const msg = await api.goods.updatedGoods(data)
        },
        async delGood({ state, commit, actions }, data) {
            const msg = await api.goods.delGoods(data);
        },
        async getNotlistedGoods({ state, commit, actions }) {
            const msg = await api.goods.getAllGoods();
            commit('getAllGood', msg.data.data.data.filter((item) => item.status == false));
        }
    }
}