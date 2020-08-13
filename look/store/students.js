// import axios from 'axios';//store中得单独引入axios
import $api from '../http/api/api.js';//引入自己封装的axios axioss随意
import axios from '../http/axios.js';//引入自己封装的axios axioss随意
// import router from '../router';//引入  路由传参使用
export default{
    namespaced:true,//防止重名冲突
    state:{//保存数据
              pageData: {//初始化渲染数据
                size: 5, //显示数据条数
                index: 1, //当前页数
                sumPage: 0, //总页数
                sum: 0, //总数据条数
                rows: [], //学生数据
              },
              searchData:{type:'name',value:''},//搜索条件
              upData:{_id:'',name:'',age:'',sex:''},//修改界面的数据
              needdata:{type:'name',value:''},//搜索条件
              // teacherData:{name:'',age:''},//添加教师数据
              // addnewsrt:{name:'',age:'',sex:'男',classId:'5f1a5a5a32d3eb0d0810e40b',headimg:''},//添加学生数据
              getClassesData:[],//保存班级下拉框
              // classesData:{className:'',teachersId:'5f1a589fbbcc80043c78035c'},//保存班级
              selteacherData:[],//保存老师
  
    },
    getters:{//等同于组建中的computed
    },
    mutations:{//methods  修改stste的唯一途径
        getStudentsData(state,data){
            state.pageData =data.rows;
        },
        delStudents(state){
          state.pageData.index=1;//将页面设为第一页
        },
        // upStudents(state,_id){//路由传参  修改学生第一步
        //   router.push('/Home/upstudents/'+_id)
        // },
        getUpStudents(state,data){//接收路由传参  根据id请求数据将数据打印到显示框 修改学生第2步
          state.upData=data.rows[0];
        },
        getclassData(state,data){
          state.getClassesData=data.rows
        },
        getTeachers(state,data){
          state.selteacherData=data.rows//数据请求成功后渲染
        },
        changeSize(state,size){//显示个数
          state.pageData.size=size
        },
        changePage(state,page){//翻页操作  改变  index
         state.pageData.index=page;
        },
        // first(state){//翻页操作  改变  index
        //   state.pageData.index>1?state.pageData.index=1:""
        // },
        // prev(state){//翻页操作  改变  index
        //   state.pageData.index>1?state.pageData.index--:""
        // },
        // next(state){//翻页操作  改变  index
        //   state.pageData.index<state.pageData.sumPage?state.pageData.index++:""
        // },
        // last(state){//翻页操作  改变  index
        //   state.pageData.index<state.pageData.sumPage?state.pageData.index=state.pageData.sumPage:""
        // },

    },
    actions:{//等同与异步的meth  context==仓库

        async getStudentsDataAsync({state,commit},needdata) {//获取学生数据 + 搜索(解构赋值 syscerch调用函数 传递到子级show 在向下传递到孙子级scearch)
            if(needdata){//按了查询键  need就会有数据
            state.pageData.index=1;//将页面设为第一页
            state.searchData={...needdata};//给查询条件重新赋值
            }
            const postData={type:state.searchData.type,value:state.searchData.value,size:state.pageData.size,index:state.pageData.index};
            const data= await $api.students.apiGetStudentsData({...postData});
            // console.log(data)
            if (data.success) {
                 commit('getStudentsData',data)//修改数据只能在muttions里进行
            }
            // const { data } = await axios({
            //   url: "/students/getstudents",
            //   method: "get",
            //   params: {type:state.searchData.type,value:state.searchData.value,size:state.pageData.size,index:state.pageData.index}
            // });
          },
          
          async delStudentsAsync({commit,dispatch},_id){//删除 id绑定  {}解构赋值，原本是context  context.start context.commit
            const data= await $api.students.apiDelStudents({_id});//需要的是一个对象属性
            if (data.success) {//删除成功 从新请求数据渲染
              commit('delStudents');//修改数据只能在mutat里进行
              dispatch('getStudentsDataAsync');//刷新页面  调用actions里的方法  用dispatch
            }
            // const { data } = await $api({
            // const  data  = await $api({//响应拦截  拆分返回了 req.data 所以这里不需要结构直接用
            //     url:'/students/delstudentsById',
            //     method:'post',
            //     data:{_id},
            //   });
            //   console.log(data)
          },

          async getUpStudentsAsync({state,commit},_id){//修改 获取要修改的对象 对象id在导航栏地址里  打印到修改页面
                 const data=await $api.students.apiGetUpStudents({_id});
                 if (data.success) {//数据请求成功  将待修改的学生数据赋值
                  commit('getUpStudents',data);
                }
              //    const {data}=await $api({
              //     // url:'/students/updatastudentsById',
              //     // method:'post',
              //     // data:{_id:_id},//this.route.params._id是通过路由传递的参数 注意route没有r
              //     // data:{_id:'5f1a5ab232d3eb0d0810e40f'},//this.route.params._id是通过路由传递的参数 注意route没有r
              // });
            },
        
           async upStudentsAsync({state,commit,dispatch}){//修改 
            const data=await $api.students.apiUpStudents({...state.upData});
              // const { data } = await $api({
              //      url:'/students/updataTwostudentsById',
              //     method:'post',
              //     data:state.upData,
              // });
              return data;
            },

            //   async addteacherDataAsync({state}){//请求回来的班级数据   放在父级  供两个子级使用
            //     const data=await axios({//这里的axios是封装过加过token弹头的
            //       url:'/teachers/addteachers',
            //       method:'post',
            //       data:state.teacherData,
            //     });
            //     return data;
            //     //   // console.log(data);
            //     // if(data.success){//新增老师成功后  将老师选择下拉列表重新请求
            //     //  router.push('/Home/addclasses')
            //     // }
             
            // },

            // async addstudentsDataAsync({state,commit},str){//添加学生到数据库
            //   const data=await axios({
            //      url:'/students/addstudents',
            //     method:'post',
            //     data:{...state.newsrt},
            //   });
            //   return data;//页面跳转放到组件里
            // },
      
            async getclassDataAsync({state,commit}){//请求回来的班级数据  
              // const classData=await axios({
               const data=await axios({//后端处理了   直接使用data
               url:'/classes/getclass',
                method:'get',
              });
              // console.log(classData)
              if(data.success){//返回一个对象  csl查看
                commit('getclassData',data);
              }
            },

            async getTeachersAsync({state,commit}){//请求老师下拉列表 
              const data=await axios({
                url:'/teachers/getteachers',
                method:'get',
              });
              if(data.success){
                commit('getTeachers',data)
              }
            },
           
            async addClassesAsync({state,commit},classdata){//新增班级
              const data=await axios({
                 url:'/classes/addclass',
                  method:'post',
                  data:classdata
              });
              return data; //页面跳转在组件里完成
            },

    },
}
