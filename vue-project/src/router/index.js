import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import $api from '../http/api/api.js'

// Vue.use(VueRouter)

// const routes = [{ //买家  用户
//   path: '/login',
//   name: 'login',
//   component: login
// },
// {
//   path: '/register',
//   name: 'register',
//   component: () =>
//     import('../views/register/register.vue')
// },
// { //商家
//   path: '/loginMg',
//   name: 'loginMg',
//   component: () =>
//     import('../views/login/loginMg.vue')
// },
// {
//   path: '/registerMg',
//   name: 'registerMg',
//   component: () =>
//     import('../views/register/registerMg.vue')
// },
// { //系统管理员
//   path: '/loginadmin',
//   name: 'loginadmin',
//   component: () =>
//     import('../views/login/loginAdmin.vue')
// },
// {
//   path: '/',
//   redirect: '/system'
// },
// {
//   path: '/system',
//   component: () =>
//     import('../views/goodsSystem/system/System.vue'),
//   children: [{
//     path: '/',
//     redirect: '/myShops'
//   },
//   {
//     //内容区路由
//     path: '/main',
//     component: () =>
//       import('../views/goodsSystem/main/Main.vue'),
//     children: [
//       //内容区子路由
//       {
//         path: '/MyShops',
//         name: 'MyShops',
//         component: () =>
//           import('../components/shops//MyShops.vue')
//       },
//       {
//         path: '/AddShops',
//         component: () =>
//           import('../components/shops//AddShops.vue')
//       },
//       {
//         path: '/UpdateShops',
//         name: 'MyShops',
//         component: () =>
//           import('../components/shops//UpdateShops.vue')
//       },
//       {
//         path: '/shopManager',
//         component: () =>
//           import('../components/admin/ShopManager.vue')
//       },
//       {
//         path: '/messageCenter',
//         component: () =>
//           import('../components/admin/MessageCenter.vue')
//       },
//       {
//         path: 'goodsList',
//         component: () =>
//           import('../components/goods/Goodslist.vue')
//       }, {
//         path: 'notListedGoods',
//         component: () =>
//           import('../components/goods/notListedGoods.vue')
//       }, {
//         path: "goodsDetails.vue",
//         component: () =>
//           import('../components/goods/goodsDetails.vue')
//       }, {
//         path: 'addGood',
//         component: () =>
//           import('../components/goods/addGoods.vue')
//       }, {
//         path: 'goodOrderList',
//         component: () =>
//           import('../components/orders/goodOrderList.vue')
//       },
//     ]
//   }
//   ]
// }
// ]

Vue.use(VueRouter);

const routes = [{
        //买家  用户
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/register/register.vue"),
    },
    {
        //商家
        path: "/loginMg",
        name: "loginMg",
        component: () =>
            import ("../views/login/loginMg.vue"),
    },
    {
        path: "/registerMg",
        name: "registerMg",
        component: () =>
            import ("../views/register/registerMg.vue"),
    },
    {
        //系统管理员
        path: "/loginadmin",
        name: "loginadmin",
        component: () =>
            import ("../views/login/loginAdmin.vue"),
    },
    {
        path: "/",
        redirect: "/system",
    },
    {
        path: "/system",
        component: () =>
            import ("../views/goodsSystem/system/System.vue"),
        //路由独享守卫  验证是否登录  token是否过期
        beforeEnter: async(to, from, next) => {
            const data = await $api.users.whetherlogin();
            if (data.data.success) {
                //验证成功
                //   alert(`${data.data.account}———欢迎你`);
                next();
            } else {
                alert(`登录失败，验证过期重新登录`);
                next("/login");
            }
        },
        children: [{

                path: "/",
                redirect: "/myShops",
            },
            {
                //内容区路由
                path: "/main",
                component: () =>
                    import ("../views/goodsSystem/main/Main.vue"),
                children: [
                    //内容区子路由
                    {
                        path: "/MyShops",
                        name: "MyShops",
                        component: () =>
                            import ("../components/shops//MyShops.vue"),
                    },
                    {
                        path: "/AddShops",
                        component: () =>
                            import ("../components/shops//AddShops.vue"),
                    },
                    {
                        path: "/UpdateShops",
                        name: "MyShops",
                        component: () =>
                            import ("../components/shops//UpdateShops.vue"),
                    },
                    {
                        path: "/shopManager",
                        component: () =>
                            import ("../components/admin/ShopManager.vue"),
                    },
                    {
                        path: "/messageCenter",
                        component: () =>
                            import ("../components/admin/MessageCenter.vue"),
                    },
                    {
                        path: "goodsList",
                        component: () =>
                            import ("../components/goods/Goodslist.vue"),
                    },
                    {
                        path: "notListedGoods",
                        component: () =>
                            import ("../components/goods/notListedGoods.vue"),
                    },
                    {
                        path: "goodsDetails.vue",
                        component: () =>
                            import ("../components/goods/goodsDetails.vue"),
                    },
                    {
                        path: "addGood",
                        component: () =>
                            import ("../components/goods/addGoods.vue"),
                    },
                    {
                        path: "goodOrderList",
                        component: () =>
                            import ("../components/orders/goodOrderList.vue"),
                    }, {
                        path: "recycledOrders",
                        component: () =>
                            import ("../components/orders/recycledOrders.vue"),
                    },
                ],
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;