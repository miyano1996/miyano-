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
        },
    },
    actions: {
        //个人
        async addOrderSync({ state, commit, actions }, good){
            const {data} = await api.orders.addOrder(good);
            // commit('saveOrders',data)
        },
        async updateOrderSync({state, commit, actions},data){
            const {datas} = await api.orders.updateOrder(data)
        },
        async getAllOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.removed) == false && (item.goodId.shopId == shopId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });
            //个人
            return data
        },
        async getDelOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let delarr = data.data.data.filter(item => { return ((item.removed == true) && (item.goodId.shopId == shopId)) });
            commit('saveDeledOrders', delarr)
        },
        async delOrder({ state, commit, actions }, id) {
            // console.log(id);
            const data = await api.orders.delOrder(id);
            return {
                msg: data.data
            }
        },
    }
}