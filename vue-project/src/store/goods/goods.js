import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {
        goods: [],
        goodid: "",
    },
    mutations: {
        getAllGood(state, data) {
            state.goods = data
        },
        goodsid(state, id) {
            state.goodid = id
        }
    },
    actions: {
        async addGood({ state, commit, actions }, data) {
            const msg = await api.goods.addGood(data);
            return msg
        },
        async getAllGoods({ state, commit, actions }) {
            const msg = await api.goods.getAllGoods();
            commit('getAllGood', msg.data.data.data);
        },
        async getGood({ state, commit, actions }) {
            const msg = await api.goods.getGood();
        }
    }
}