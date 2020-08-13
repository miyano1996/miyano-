import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {
        orders: [{}],
        page: {
            pagenum: 1,
            datanum: 5
        },
        allnum: null,
        lastpage: null
    },
    mutations: {
        saveOrders(state, data) {
            state.orders = [...data.arr];
            state.allnum = data.num;
            state.lastpage = Math.ceil(data.num / state.page.datanum);
            console.log(state.lastpage);
        },
        changepagenum(state, data) {
            state.page.pagenum = data;
        },
        changedatanum(state, data) {
            state.page.datanum = data
        }
    },
    actions: {
        async getAllOrders({ state, commit, actions }) {
            const { data } = await api.orders.getAllOrders(state.page);
            let arr = data.data.data.filter(item => !item.removed)
            commit('saveOrders', { arr, num: data.data.num })
        },
        async delOrder({ state, commit, actions }, id) {
            const data = await api.orders.delOrder(id);
            return {
                msg: data.data
            }
        },
    }
}