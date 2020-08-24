<!--页面主体 -->
<template >
  <div class="system-main">
    <div class="system-use">
      <span>{{msg}}：{{useName}}</span>
      <b style="text-indent:20px" @click="exit">退出</b>
      <div class="system-weather">
        <i :class="weather" style="font-size:20px"></i>
        <span>{{date}}</span>
        <span>{{type}}</span>
        <span>{{high}}</span>
        <span>{{low}}</span>
        <span>{{fengxiang}}</span>
      </div>
    </div>
    <div class="system-weather"></div>
    <el-container class="system-box">
      <el-header style="height:100px">
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
      date: "",
      fengli: "",
      fengxiang: "",
      high: "",
      low: "",
      type: "",
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
      this.useName = localStorage.getItem("useName");
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
      let type = data.data.data.forecast[0].type;
      this.date = data.data.data.forecast[0].date;
      this.high = data.data.data.forecast[0].high;
      this.fengli = data.data.data.forecast[0].fengli;
      this.fengxiang = data.data.data.forecast[0].fengxiang;
      this.low = data.data.data.forecast[0].low;
      this.type = data.data.data.forecast[0].type;
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
.system-main {
  position: relative;
}
.system-use {
  position: absolute;
  right: 50px;
  top: 10px;
  z-index: 99;
  text-align: right;
}
.system-use i {
  color: rgba(0, 0, 0, 0.329);
  font-size: 30px;
  display: inline-block;
  width: 70px;
}
.system-use b {
  display: inline-block;
  width: 70px;
  text-align: right;
  color: #e6a23c;
  font-weight: 400;
}
.system-main .system-use .system-weather {
  width: 420px;
  height: 30px;
  margin-top: 36px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: #234b8d;
}
.system-main .system-use .system-weather span {
  display: inline-block;
  width: 70px;
  text-align: center;
}
.system-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-header {
  font-size: 30px;
  border-bottom: solid 1.5px #ccc;
}
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
  flex-grow: 1;
}
</style>