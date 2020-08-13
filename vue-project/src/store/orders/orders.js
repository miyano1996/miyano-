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
            commit('saveOrders', data.data.data)
        },
    }
}