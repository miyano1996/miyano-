<template>
  <div>
    <h1>登录</h1>
    
    <label for>账号: </label><el-input placeholder="请输入内容" v-model="users.username" clearable size="small"></el-input>
        <br>
        <br>
    <label for>密码: </label><el-input placeholder="请输入密码" v-model="users.password" clearable show-password size="small"></el-input><br>
        <br>
        <el-button type="success" round @click="login" size="small">登录</el-button>
        <el-button type="danger" round @click="register" size="small">注册</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: { username: "", password: "" },
    };
  },
  methods: {
    async login() {
      // const data = await this.$api.users.login(this.users);1
      console.log(data);
      if (data.success) {
        //将生成带有时间限制的token保存到本地
        localStorage.token = data.token;
        // this.$router.push("/students");1
      }
    },
    // login() {
    //     this.$router.push("/students");
    // },
    register(){
        this.$router.push("/Register");
    }
  },
};
</script>

<style scoped>
    .el-input{
        width: 200px;
    }
    .el-button{
        width: 100px;
    }
</style>