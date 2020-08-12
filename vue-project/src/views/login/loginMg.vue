<template>
<main>
  <div class="register">
    <h3>商家登录</h3>
   <el-input placeholder='用户名' v-model="users.account" clearable size="medium"></el-input>
    <br />
    <br />
    <!-- <label for>密码:</label> -->
    <el-input placeholder="密码" v-model="users.password" clearable show-password size="medium"></el-input>
    <br />
    <br />
    <el-button type="primary" @click="login" size="medium">登录</el-button>
    <!-- <el-button type="danger" @click="register" size="medium">注册</el-button> -->
    <router-link to="/registerMg" tag='p' class="span1"><i class="el-icon-s-shop"></i>还没有账号去注册>></router-link>
    <router-link to="/login" tag='p' class="span2"><i class="el-icon-s-custom"></i>用户登录通道>></router-link>

  </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      users: { account: "", password: "" },
    };
  },
  methods: {
    async login() {
      const data = await this.$api.managers.login(this.users);
      console.log(data);
      if (data.success) {
        // 将生成带有时间限制的token保存到本地
        localStorage.token = data.token;
        localStorage._id=data._id;
        localStorage.name=data.name;
        // this.$router.push("/students");1
      }else{
        this.open4()
      }
    },
    open4() {
        this.$notify.error({
          title: '登录失败',
          message: '账号或密码错误'
        });
      }
  },
};
</script>

<style scoped>
main{
  width: 100%;
  height: 100%;
  position: relative;
}
h3{
  text-align: center;
}
p{
  /* box-sizing: border-box; */
  color: #e6a23c;
  /* padding-right:30px ; */
  width:100%;
  cursor:pointer;
  text-align: right;
}
.register {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -190px;
  margin-left: -210px;
}
.el-input {
  width: 300px;
}
.el-button {
  width: 100%;
}
.el-button + .el-button{
  margin-left: 20px;
}
/* .el-input {
  width: 200px;
}
.el-button {
  width: 100px;
} */
</style>