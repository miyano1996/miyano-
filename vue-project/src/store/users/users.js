export default{
    namespaced: true,
    state:{
        userId:''
    },
    mutations:{
        saveUserId(state,id){
            state.userId = id
        }
    }
}