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
        // 新增订单
        async addOrderTocar({ state, commit, actions }, data) {
            await api.orders.addOrder(data);
        },
        // 获取购物车中的订单
        async getCarOrders({ state, commit, actions }, userId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.isPay) == false && (item.userId._id == userId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });
        },
        // 获取用户的订单
        async getUserOrders({ state, commit, actions }, userId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.isPay) == true && (item.userId._id == userId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });
        },
        // 用户结算
        async pay({ state, commit, actions }, id) {
            let msg = await api.orders.pay(id);
            return msg
        },
        // 用户删除购物车
        async delCarOrder({ state, commit, actions }, id) {
            const data = await api.orders.delCarOrder(id);
            console.log(data);
            return {
                msg: data.data
            }
        },
        // 获取店铺订单
        async getAllOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let savearr = data.data.data.filter(item => { return ((item.removed == false) && (item.goodId.shopId._id == shopId)) });
            commit('saveOrders', { savearr, num: savearr.length, delnum: data.data.delnum });

        },
        async getDelOrders({ state, commit, actions }, shopId) {
            const { data } = await api.orders.getAllOrders(state.page);
            let delarr = data.data.data.filter(item => { return ((item.removed == true) && (item.goodId.shopId == shopId)) });
            commit('saveDeledOrders', delarr)
        },
        // 店铺假删除
        async delOrder({ state, commit, actions }, id) {
            const data = await api.orders.delOrder(id);
            return {
                msg: data.data
            }
        },
    }
}