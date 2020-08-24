<template>
  <main>
    <div class="register">
      <el-divider>
        <h3>用户登录</h3>
      </el-divider>
      <el-input placeholder="用户名" v-model="users.account" clearable size="medium"></el-input>
      <br />
      <br />
      <!-- <label for>密码:</label> -->
      <el-input placeholder="密码" v-model="users.password" clearable show-password size="medium"></el-input>
      <br />
      <br />
      <el-button type="primary" @click="login" size="medium">登录</el-button>
      <router-link to="/register" tag="p" class="span1">
        <i class="el-icon-s-custom"></i>去注册新账号>>
      </router-link>
      <router-link to="/loginMg" tag="p" class="span2">
        <i class="el-icon-s-shop"></i>商家登录通道>>
      </router-link>
      <el-divider>
        <i class="el-icon-milk-tea">have a good time</i>
      </el-divider>
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
      const { data } = await this.$api.users.login(this.users);
      if (data.success) {
        //将生成带有时间限制的token保存到本地
        localStorage.token = data.token;
        localStorage.userName = this.users.account;
        localStorage.userId = data.id;
        localStorage.isAdmin = false;
        this.$router.push("/banshoushop");
        this.open2();
        // console.log('登录成功')
      } else {
        this.open4();
      }
    },
    open4() {
      this.$notify.error({
        title: "登录失败",
        message: "账号或密码错误",
      });
    },
    open2() {
      this.$message({
        message: "登录成功",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #285f62;
}
.el-divider__text {
  background-color: #285f62;
}
h3 {
  text-align: center;
  color: #dde0e2;
}
.el-divider__text > i {
  color: #dde0e2;
  font-size: 11px;
}
p {
  color: #409eff;
  width: 100%;
  cursor: pointer;
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
  opacity: 0.8;
}
.el-button {
  width: 100%;
}
.el-button + .el-button {
  margin-left: 20px;
}
</style>