// import axios from 'axios'
import api from '../../http/api/api'

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async addGood({ state, commit, actions }, data) {
            const msg = await api.goods.addGood(data);
            return msg
        },
        async getAllGoods({ state, commit, actions }) {
            const msg = await api.goods.getAllGoods();
            return msg;
        }
    }
}