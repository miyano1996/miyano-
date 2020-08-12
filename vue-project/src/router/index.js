import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

  const routes = [
  {//买家  用户
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  },
  {//商家
    path: '/loginMg',
    name: 'loginMg',
    component: () => import('../views/login/loginMg.vue')
  },
  {
    path: '/registerMg',
    name: 'registerMg',
    component: () => import('../views/register/registerMg.vue')
  },
  {//系统管理员
    path: '/loginadmin',
    name: 'loginadmin',
    component: () => import('../views/login/loginAdmin.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
