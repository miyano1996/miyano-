<template>
  <div class="shopnav" id="nav" @mouseleave="notshow">
    <div class="nav-main">
      <ul>
        <li class="active" @mouseenter="shownav">
          <router-link to="/banshoushop">首页</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">官方自营</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">智能家教灯</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">服饰箱包</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">抖音热销</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">数码3C</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">家用电器</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">家居生活</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">美妆个护</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">抖音文创</router-link>
        </li>
        <li class="item">
          <router-link to="/banshoushop" @mouseenter="shownav">服务</router-link>
        </li>
      </ul>
      <div class="searchbox" v-if="block" @mouseenter="notshow">
        <div class="search-main">
          <div class="searchimg"></div>
          <el-input
            :placeholder="msg"
            v-model="input"
            clearable
            class="searchinput"
            @focus="addmsg(true)"
            @blur="addmsg(false)"
          ></el-input>
        </div>
      </div>
      <div class="userbox" v-else>
        <span>欢迎: {{userName}}</span>
        <i class="userlogo"></i>
        <i class="shopcar"></i>
      </div>
    </div>
    <div class="navtwo" @mouseenter="shownav">
      <div class="model">
        <ul class="model-wrapper">
          <li class="item">
            <div class="container">
              <div class="title">手机</div>
              <ul class="item-wrapper">
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>手机</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="item" style="width: 404px">
            <div class="container">
              <div class="title">官方配件</div>
              <ul class="item-wrapper">
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>数据线</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>充电器</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/90be7779c2454407ee5f4b6184c929ed.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>线控耳机</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/afcec520933673b8e03a867e6502f6e0.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>移动电源</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/b9e61c6d93464454fa2e382632e34cee.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>拍照配件</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="item">
            <div class="container">
              <div class="title">畅呼吸系列</div>
              <ul class="item-wrapper">
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>空气净化器</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/4d83d72c5ecc288e8d5ddd9d06b80f99.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>生活电器配件</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="item">
            <div class="container">
              <div class="title">服饰箱包</div>
              <ul class="item-wrapper">
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/9960e83a55544fbf7b046013a6f7f414.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>箱包</span>
                  </a>
                </li>
                <li class="good">
                  <a href="#">
                    <img
                      src="https://resource.smartisan.com/resource/50fd73c82a46bedc43773f0ceffcecb1.jpg?x-oss-process=image/resize,w_40/format,webp"
                      alt
                    />
                    <span>男装</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      block: true,
      input: "",
      msg: "",
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.userName;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    addmsg(data) {
      if (data) {
        this.msg = "请输入搜索的商品";
      } else {
        this.msg = "";
      }
    },
    shownav() {
      document.querySelector(".navtwo").classList.add("show");
    },
    notshow() {
      document.querySelector(".navtwo").classList.remove("show");
    },
  },
  watch: {
    scrollTop(newValue) {
      if (newValue > 25) {
        this.block = false;
        document.getElementById("nav").classList.add("intop");
      } else {
        this.block = true;
        document.getElementById("nav").classList.remove("intop");
      }
    },
  },
};
</script>

<style scoped>
</style>