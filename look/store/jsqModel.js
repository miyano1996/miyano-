export default{
    namespaced:true,//防止重名冲突
    state: {//保存数据
        jsqData:0,
      },
      getters:{//等同于组建中的computed
      },
      mutations: {//methods  修改stste的唯一途径
        addJ(state){
          state.jsqData++;
        },
        subJ(state){
          state.jsqData--;
        },
        inputJ(state,inputData){
          state.jsqData=inputData-0;
        },
      },
      actions:{//等同与异步的meth
      },
}