/*
 * @Author: your name
 * @Date: 2020-08-11 15:13:21
 * @LastEditTime: 2020-08-11 17:23:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\vue-project\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import goods from './goods/goods'
import shops from './shops/shops.js'
import shopManager from './shopManager/shopManager.js'
import orders from './orders/orders'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        goods,
        shops,
        shopManager,
        orders
    }
})