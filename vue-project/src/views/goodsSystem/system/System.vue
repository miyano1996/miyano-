<!--页面主体 -->
<template>
  <div>
    <p class="system-use">
      <i :class="weather"></i>
      <span>{{msg}}：{{useName}}</span>
      <b style="text-indent:20px" @click="exit">|退出</b>
    </p>
    <el-container class="system-box">
      <el-header style="font-size:30px">
        <HeaderNav />
      </el-header>
      <el-container class="main">
        <router-view />
      </el-container>
      <el-footer>
        <Foot />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import HeaderNav from "../header/HeadeNav.vue";
import Foot from "../footer/Foot.vue";
export default {
  data() {
    return {
      useName: "老八",
      msg: "",
      city: "成都",
      weather: "",
    };
  },
  created() {
    this.getUseName();
    this.getMsg();
    this.getWeather();
  },
  methods: {
    //获取本地用户名
    getUseName() {
      this.useName = localStorage.getItem("usename");
    },
    //获取当前时间
    getMsg() {
      let currentTime = new Date().toTimeString().substring(0, 2);
      if (currentTime >= 5 && currentTime <= 9) {
        this.msg = "上午好";
      } else if (currentTime > 9 && currentTime < 16) {
        this.msg = "中午好";
      } else if (currentTime >= 16 && currentTime < 18) {
        this.msg = "下午好";
      } else {
        this.msg = "晚上好";
      }
    },
    //退出按钮
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
    //天气api
    async getWeather(city) {
      const data = await axios({
        url: "http://wthrcdn.etouch.cn/weather_mini?city=" + this.city,
        method: "get",
      });
      let type = data.data.data.forecast[1].type;
      if (type.includes("雨")) {
        this.weather = "el-icon-heavy-rain";
      } else if (type.includes("云")) {
        this.weather = "el-icon-cloudy";
      } else {
        this.weather = "el-icon-sunny";
      }
    },
  },
  components: {
    HeaderNav,
    Foot,
  },
};
</script>

<style scoped>
.system-use {
  position: absolute;
  right: 80px;
  z-index: 99;
}
.system-use i {
  color: black;
  font-size: 30px;
  display: inline-block;
  width: 70px;
}
.system-use b {
  display: inline-block;
  width: 70px;
  text-align: right;
  color: #e9eef3;
  font-weight: 400;
}
.system-box {
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
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
  height: 100%;
}
</style>