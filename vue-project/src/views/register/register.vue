<template>
<main>
  <div class="register">
    <h3>用户注册</h3>
    <el-form
      :model="users"
      status-icon
      :rules="rules"
      ref="ISverify"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 账号 -->
      <el-form-item label="账号 :" prop="username">
        <el-input v-model="users.username" @blur="again" size="medium"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码 :" prop="password">
        <el-input type="password" v-model="users.password" autocomplete="off" show-password size="medium"></el-input>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item label="确认密码 :" prop="checkPass">
        <el-input type="password" v-model="users.checkPass" autocomplete="off" show-password size="medium"></el-input>
      </el-form-item>
      <!-- 提交 -->
      <el-form-item>
        <el-button  type="success" @click="submitForm('ISverify')" :disabled="canRegister">提交</el-button>
        <el-button @click="resetForm('ISverify')" type="warning">重置</el-button>
      </el-form-item>
        <router-link to="/login" tag='p' class="span1"><i class="el-icon-s-custom"></i>已有账号去登录>></router-link>
        <router-link to="/login" tag='p' class="span2"><i class="el-icon-s-shop"></i>商家注册通道>></router-link>
        <!-- <router-link to="/login" tag='span' class="span1">已有账号去登录</router-link>
        <router-link to="/login" tag='span' class="span2">商家注册通道>></router-link> -->
    </el-form>
 
  </div>
 </main>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {//密码验证规则
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.users.checkPass !== "") {
          this.$refs.ISverify.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {//二次密码验证规则
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.users.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      canRegister:false,
      users: {
        password: "",
        checkPass: "",
        username: "",
      },
      rules: {
        username: [
          //required: true,为true时开启验证
          { required: true, message: "请输入注册账号", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    async register() {
      // const data = await this.$api.users.register({...this.users}); //将要注册的数据发送到后端1
      // console.log(data);
      if (data.success) {
        // alert("注册成功");
        this.open1();
        this.$router.push("/Login");
      }
    },
    async again() {
      //验证重名
      // const data = await this.$api.users.again(this.users.username); //将要注册的数据发送到后端1
      // console.log(data);
      if (data.success) {
        alert("此用户名已存在");
        this.canRegister=true;
        // return true
      }else{
        this.canRegister=false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {//资料填写无误
          this.register();
        } else {
          console.log("error submit!!");
          this.open2();
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open1() {
      //资料通过验证  已添加学生  弹窗
      this.$notify({
        title: "成功",
        message: "注册成功",
        type: "success",
      });
    },
    open2() {
      this.$notify({
        //内容未填写完整
        title: "警告",
        message: "注册失败，正确提交",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
main{
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: blueviolet; */
  /* overflow: hidden; */

  /* background-color: rgb(33, 32, 59); */
}
h3{
  text-align: center;
}
p{
  box-sizing: border-box;
  color: #e6a23c;
  padding-right:30px ;
  width:100%;
  cursor:pointer;
  text-align: right;
}
/* .span2{
  color: #e6a23c;

} */
.register{
  width: 420px;
  position: absolute;
  top:50%;
  left:50%;
  margin-top: -190px;
  margin-left: -210px;
}

.el-input {
  width: 300px;
}
.el-button {
  width: 140px;
}
.el-button + .el-button{
  margin-left: 20px;
}
.el-form-item__label{
  color: #fff;
}
</style>