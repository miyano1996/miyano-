import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {
        orders: [{}]
    },
    mutations: {
        saveOrders(state, data) {
            state.orders = [...data];
        }
    },
    actions: {
        async getAllOrders({ state, commit, actions }) {
            const { data } = await api.orders.getAllOrders();
            let arr = data.data.data.filter(item => !item.removed)
            commit('saveOrders', arr)
        },
        async delOrder({ state, commit, actions }, id) {
            const data = await api.orders.delOrder(id);
            return {
                msg: data.data
            }
        },
    }
}