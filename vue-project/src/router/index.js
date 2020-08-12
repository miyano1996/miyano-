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
        //内容区路由
        path:'/main',
        component: () => import('../views/goodsSystem/main/Main.vue'),
        children:[
          //内容区子路由
          // {
          //   path:'',
          //   component: () =>  import('')
          // }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
