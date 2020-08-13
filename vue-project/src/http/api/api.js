import shopsManager from './shopsManagerModel/shopsManager.js'
import goods from './modules/goods/goods'
import shops from './modules/shops/shops.js'
import orders from './modules/orders/orders'
import users from './modules/users.js'
import managers from './modules/managers.js'
const api = {
    shopsManager,
    goods,
    shops,
    users,
    managers,
    orders
}

export default api;