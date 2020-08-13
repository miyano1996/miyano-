import axios from '../../axios.js'  //将自己封装带有token弹头的axios引入

const students={
    canlogin:function(){//验证是否登录
        return axios({
          url:'/users/tokenLogin',
          method: 'post',
        });
    },
    apiGetStudentsData:params=>{//{type,value,size,index}
        return axios({//自己封装带有token弹头的请求后台数据库方法
            url: "/students/getstudents",
            method: "get",
            params
        });
    },
    apiDelStudents:data=>{//{type,value,size,index}
        return axios({//自己封装带有token弹头的请求后台数据库方法
            url:'/students/delstudentsById',
            method:'post',
            data:data
        });
    },
    apiGetUpStudents:data=>{    
        return axios({
            url:'/students/updatastudentsById',
            method:'post',
            data
        })
    },
    apiUpStudents:data=>{    
        return axios({
            url:'/students/updataTwostudentsById',
            method:'post',
            data
        })
    },
    apiAddteacherData:data=>{    
        return axios({
            url:'/teachers/addteachers',
            method:'post',
            data
        })
    },
    apiAddstudentsData:data=>{    
        return axios({
            url:'/students/addstudents',
            method:'post',
            data
        })
    },
    
}

export default students;