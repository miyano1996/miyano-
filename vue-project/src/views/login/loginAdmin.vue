<template>
<main>
  <div class="register">
    <h3>超级管理员登录</h3>
   <el-input placeholder='用户名' v-model="users.account" clearable size="medium"></el-input>
    <br />
    <br />
    <!-- <label for>密码:</label> -->
    <el-input placeholder="密码" v-model="users.password" clearable show-password size="medium"></el-input>
    <br />
    <br />
    <el-button type="primary" @click="login" size="medium">登录</el-button>
    <p>务必遵循《超级管理员公约》相关条约,违者依法追究相关刑事责任！</p>
    <el-divider content-position="left"></el-divider>
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
      const {data} = await this.$api.managers.loginAdmin(this.users);
      if (data.success) {
        //将生成带有时间限制的token保存到本地
        localStorage.token = data.token;
        localStorage.useName = this.users.account;
        localStorage.isAdmin = true;
        this.$router.push("/system");
        this.open2()
      }else{
        this.open4()
      }
    },
   open2() {
      this.$message({
          message: '登录成功',
          type: 'success'
        });
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
  color: red;
  font-size: 13px;
}
.register {
  width: 300px;
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

</style>