import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {
        orders: [],
        deledOrders: [],
        page: {
            pagenum: 1,
            datanum: 5
        },
        allnum: null,
        lastpage: null
    },
    mutations: {
        saveOrders(state, data) {
            state.orders = [...data.savearr];
            state.allnum = data.num;
            state.lastpage = data.delnum;
        },
        saveDeledOrders(state, data) {
            state.deledOrders = [...data];
        },
        changepagenum(state, data) {
            state.page.pagenum = data;
        },
        changedatanum(state, data) {
            state.page.datanum = data
        }
    },
    actions: {
        async getAllOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.removed) == false && (item.goodId.shopId == shopId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });

        },
        async getDelOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let delarr = data.data.data.filter(item => { return ((item.removed == true) && (item.goodId.shopId == shopId)) });
            commit('saveDeledOrders', delarr)
        },
        async delOrder({ state, commit, actions }, id) {
            const data = await api.orders.delOrder(id);
            return {
                msg: data.data
            }
        },
    }
}