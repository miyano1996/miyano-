<template>
  <div style="color:red">
    <p class="use">
      <span>{{msg}}：{{usename}}</span>
      <b style="text-indent:20px" @click="exit">|退出</b>
    </p>
    <el-container class="box">
      <el-header style="font-size:30px">
        <HeaderNav />
      </el-header>
      <el-container class="main">
        <router-view />
      </el-container>
      <el-footer><Foot/></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderNav from "../header/HeadeNav.vue";
import Foot from "../footer/Foot.vue"
export default {
  data() {
    return {
      useName: "老八",
      msg: "",
    };
  },
  created() {
    this.getUseName();
    this.getMsg();
  },
  methods: {
    getUseName() {
      this.useName = localStorage.getItem("usename");
    },
    getMsg() {
      let currentTime = new Date().toTimeString().substring(0, 2);
      console.log(currentTime);
      if (currentTime >= 5 && currentTime < 9) {
        this.msg = "上午好";
      } else if (currentTime >= 9 && currentTime < 16) {
        this.msg = "中午好";
      } else if (currentTime >= 16 && currentTime < 18) {
        this.msg = "下午好";
      } else {
        this.msg = "晚上好";
      }
    },
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  components: {
    HeaderNav,Foot
  },
};
</script>

<style>
.use {
  position: absolute;
  right: 80px;
  z-index: 99;
}
b {
  display: inline-block;
  width: 70px;
  text-align: right;
  color: #e9eef3;
  font-weight: 400;
}
.box {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.main {
  width: 100%;
  height: 100%;
}
</style>