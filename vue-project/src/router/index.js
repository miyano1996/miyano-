import Vue from 'vue'
import VueRouter from 'vue-router'
import addGoods from '../components/goods/addGoods.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: addGoods
}]

const router = new VueRouter({
    routes
})

export default router