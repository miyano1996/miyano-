import axios from '../../../axios'
const charts = {
    //获取日点击量
    getDailyViews: (data) => {
        return axios({
            url: '/charts/getDailyViews',
            method: 'post',
            data
        })
    },
    //获取月点击量
    getMonthlyViews: (data) => {
        return axios({
            url: '/charts/getMonthlyViews',
            method: 'post',
            data
        })
    },
    //获取今日成交用户
    getTodayUsers: (data) => {
        return axios({
            url: '/charts/getTodayUsers',
            method: 'post',
            data
        })
    },
    //获取信誉分
    getCreditPoints: (data) => {
        return axios({
            url: '/charts/getCreditPoints',
            method: 'post',
            data
        })
    },
    //获取总订单量
    getTotalOrders: (data) => {
        return axios({
            url: '/charts/getTotalOrders',
            method: 'post',
            data
        })
    },
    //获取日度销售额
    getDailySales: (data) => {
        return axios({
            url: '/charts/getDailySales',
            method: 'post',
            data
        })
    },
    //获取月度销售额
    getMonthlySales: (data) => {
        return axios({
            url: '/charts/getMonthlySales',
            method: 'post',
            data
        })
    },
    //获取日度商品排行榜
    getDailyRank: (data) => {
        return axios({
            url: '/charts/getDailyRank',
            method: 'post',
            data
        })
    },
    //获取月度商品排行榜
    getMonthlyRank: (data) => {
        return axios({
            url: '/charts/getMonthlyRank',
            method: 'post',
            data
        })
    },
    //获取分类销售
    getTypeSales: (data) => {
        return axios({
            url: '/charts/getTypeSales',
            method: 'post',
            data
        })
    },
}
export default charts