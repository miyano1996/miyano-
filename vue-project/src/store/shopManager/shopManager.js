import $api from '../../http/api/api.js'
import { changeState } from '../../../../node-project/shopManagerService/shopManagerService.js';

export default{
    namespaced: true,
    state:{
        shopsInfo:[]
    },
    mutations:{
        getShops(state,newData){
            state.shopsInfo = newData;
            // console.log(state.shopsInfo);
        },
        changeState(state,data){
            console.log(data);
            return data
        }
    },
    actions:{
        async getShopsSync({commit},params){
            const data = await $api.shopsManager.getShopsSync(params);
            commit('getShops',data.data.row)
        },
        async changeStateSync({commit},obj){
            const data = await $api.shopsManager.changeStateSync(obj);
            commit('changeState',data)
        }   
    }
}