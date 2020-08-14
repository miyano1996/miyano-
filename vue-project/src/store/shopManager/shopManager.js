import $api from '../../http/api/api.js'
export default{
    namespaced: true,
    state:{
        //分页数据
        pageData: {
            pageSize: 4, 
            currentPage: 1, 
            total: 0, 
            totalPage: 0,
            row: [], 
        },
    },
    mutations:{
        getShops(state,newData){
            state.pageData = newData;
        },
        changeState(state,data){
            return data
        },
        changeCredit(data){
            return  data
        },
        changeLift(data){
            return data
        },
        changePageSize(state,data){
            state.pageData.pageSize = data
        },
        changeCurrentPage(state,data){
            state.pageData.currentPage = data
        }
    },
    actions:{
        async getShopsSync({state,commit},params){
            const data = await $api.shopsManager.getShopsSync({
                params,
                pageSize:state.pageData.pageSize,
                currentPage:state.pageData.currentPage
            });
            commit('getShops',data.data.row)
        },
        async changeStateSync({commit},obj){
            const data = await $api.shopsManager.changeStateSync(obj);
            commit('changeState',data)
        },
        async changeCreditSync({commit},obj){
            const data = await $api.shopsManager.changeCreditSync(obj);
            commit('changeCredit',data)
        },
        async changeLiftSync({commit},obj){
            const data = await $api.shopsManager.changeLiftSync(obj);
            commit('changeLift',data)
        }   
    }
}