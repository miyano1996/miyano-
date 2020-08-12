import Vue from 'vue'
import Vuex from 'vuex'
import goods from './goods/goods'
import shops from './shops/shops.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        goods,shops
    }
})
