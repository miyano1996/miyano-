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
        lastpage: null,
        myOrder: [],
        carOrder: []
    },
    mutations: {
        saveOrders(state, data) {
            state.orders = [...data.savearr];
            state.allnum = data.num;
            state.lastpage = data.delnum;
            // console.log(data);
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
        getMyOrder(state, data) {
            state.myOrder = data.filter(value => { return localStorage.userId==value.userId._id && value.removed == false && value.status != '未下单' });
            // console.log(state.myOrder);
        },
        getCarOrder(state, data) {
            state.carOrder = data.filter(value => {
                return value.userId._id == localStorage.userId &&
                    value.status == "未下单" &&
                    value.removed == false
            })
        }
    },
    actions: {
        //个人
        async addOrderSync({ state, commit, actions }, good) {
            const { data } = await api.orders.addOrder(good);
            // commit('saveOrders',data)
        },
        async updateOrderSync({ state, commit, actions }, data) {
            const { datas } = await api.orders.updateOrder(data)
        },
        async getAllOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.removed) == false && (item.goodId.shopId == shopId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });
            commit('getMyOrder', data.data.data);
            commit('getCarOrder', data.data.data)
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
            // console.log(data);
            return {
                msg: data.data
            }
        },
    }
}