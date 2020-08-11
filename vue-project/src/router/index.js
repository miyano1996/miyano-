import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/system'
  },
  {
    path:'/system',
    component: () => import('../views/goodsSystem/system/System.vue'),
    children:[
      {
        path: '/',
        redirect:'/main'
      },
      {
        path:'/main',
        component: () => import('../views/goodsSystem/main/Main.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
