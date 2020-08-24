<template>
  <div class="shopheader">
    <img src="../../assets/logo.png" fit="cover" class="logo" />
    <ul>
      <li class="active">在线商城</li>
      <li>坚果Pro 3</li>
      <li>坚果Pro 2S</li>
      <li>坚果TNT工作站</li>
      <li>Smartisan OS</li>
      <li>欢喜云</li>
      <li>应用</li>
      <li>论坛</li>
      <li>荣誉与奖项</li>
      <li>加入我们</li>
      <li>
        <el-popover placement="top-start" width="150" trigger="hover">
          <div class="popmsg">
            <el-image
              style="width: 100px; height: 100px"
              src="//static.smartisanos.cn/indexnew/img/nav-qcode.5b846188.png"
            />
            <p>下载扳手商城APP</p>
          </div>
          <span slot="reference">下载APP</span>
        </el-popover>
      </li>
    </ul>
    <div class="userbox">
      <span>欢迎: {{userName}}</span>
      <i class="userlogo" @click="toOrders"></i>
      <i class="shopcar" @click="toshopcar"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.userName;
  },
  methods: {
    toshopcar() {
      this.$router.push({ path: "/banshoushop/shopcar" });
    },
    toOrders() {
      this.$router.push({ path: "/banshoushop/userOrders" });
    },
  },
};
</script>

<style scoped>
</style>