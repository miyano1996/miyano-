/*
 * @Author: your name
 * @Date: 2020-08-11 15:13:21
 * @LastEditTime: 2020-08-11 17:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \三阶段\Three-project\project\vue-project\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/goodslist',
    name: "goodslist",
    component: () =>
        import ('../components/goods/Goodslist.vue')
}]

const router = new VueRouter({
    routes
})

export default router