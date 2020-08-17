<template>
  <div style="width:100vw">
    <header>
      <div class="header-top">
        <div class="header-top-content">
          <div class="city">
            <select name id>
              <option value>成都</option>
              <option value>重庆</option>
              <option value>北京</option>
              <option value>西安</option>
            </select>
          </div>
          <ul class="right-top">
            <template v-if="username">
              <li>
                <router-link tag="a" to="/login">{{username}}</router-link>
                <span>/</span>
              </li>
              <li>
                <a tag="a" @click.prevent="exit">退出</a>
                <span>/</span>
              </li>
            </template>
            <template v-else>
              <li>
                <router-link tag="a" to="/login">登陆</router-link>​
                <span>/</span>
              </li>​
              <li>
                <router-link tag="a" to="/register">注册</router-link>​
                <span>/</span>
              </li>
            </template>
            <li>
              <a href>签到有礼</a>
              <span>/</span>
            </li>
            <li>
              <router-link tag="a" to="/orders">我的订单</router-link>
              <span>/</span>
            </li>
            <li>
              <a href>我的特卖</a>
              <span>/</span>
            </li>
            <li>
              <a href>会员俱乐部</a>
              <span>/</span>
            </li>
            <li>
              <a href>客户服务</a>
              <span>/</span>
            </li>
            <li>
              <a href>手机版</a>
              <span>/</span>
            </li>
            <li>
              <a href>更多</a>
              <select name id></select>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-content">
        <div class="header-search">
          <div>
            <img src="../images/logo.png" />
            <img src="../images/logo-right.jpg" alt />
          </div>
          <div class="logo-search">
            <div class="logo-search-up clearfix">
              <input type="text" />
              <p>搜索</p>
            </div>
            <div class="logo-search-down">
              热搜榜：
              <a href="#">护肤套装</a>
              <a href="#">连衣裙</a>
              <a href="#">女休闲鞋</a>
              <a href="#">女式休闲裤</a>
            </div>
          </div>
        </div>
        <div class="header-list">
          <div class="fenlei">
            <span>商品分类</span>
          </div>
          <ul>
            <li style="color:#fa2a83;font-weight:bold">首页</li>
            <li>最后疯抢</li>
            <li>唯品快抢</li>
            <li>品牌清仓</li>
            <li>女装</li>
            <li>母婴</li>
            <li>家电</li>
            <li>国际</li>
            <li>美女</li>
            <li>鞋包</li>
            <li>男装</li>
          </ul>
          <div class="sell">
            更多
            <select name id></select>
          </div>
        </div>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
    <footer>
      <div class="footer-content">
        <div>关于我们| About us| Investor Relations| 媒体报道| 品牌招商| 隐私条款| 唯品诚聘| 唯品卡| 联系我们</div>
        <p
          class="footer-p1"
        >Copyright © 2008-2020 vip.com，All Rights Reserved 使用本网站即表示接受 唯品会用户协议。版权所有 广州唯品会电子商务有限公司</p>
        <p
          class="footer-p2"
        >粤公网安备 44010302111111号 粤ICP备08114786号 增值业务经营许可证：粤B2-20170777 网络文化经营许可证：粤网文〔2018〕5030-1743号</p>
        <p
          class="footer-p3"
        >经营主体证照 风险监测信息 互联网药品信息服务资格证书：（粤）-经营性-2018-0271 网络食品交易第三方平台备案凭证：粤B2-20170777 医疗器械网络交易服务第三方平台备案</p>
        <p class="footer-p4">凭证：（粤）网械平台备字[2019]第00001号</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return localStorage.useName;
    },
  },
  methods: {
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
footer {
  background-color: #fcfcfc;
  width: 100%;
  .footer-content {
    width: 60%;
    margin: 20px auto;
    text-align: center;
    font-size: 12px;
    > div {
      color: white;
      background-color: #fa2a83;
      margin-bottom: 10px;
      padding: 5px 0;
    }
    > p {
      margin-top: 3px;
      font-size: 11px;
    }
    .footer-p1 {
      color: gray;
    }
  }
}

select {
  border: none;
  background-color: #f5f5f5;
}
header {
  width: 100%;
  min-height: 100px;
}
.city > select {
  font-size: 12px;
}
.header-top {
  height: 36px;
  background-color: #f5f5f5;
  width: 100%;
}
.header-top-content {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  line-height: 36px;
}
.right-top {
  display: flex;
  justify-content: space-between;
}
.right-top > li > a {
  font-size: 12px;
  &:hover {
    color: red;
  }
}
.right-top > li > span {
  color: #dbdbdb;
  margin: 0 7px;
}
.header-content {
  width: 70%;
  margin: 0 auto;
}
.header-search {
  display: flex;
  justify-content: space-between;
  > div {
    > img {
      height: 90px;
    }
  }
}
.logo-search {
  width: 45%;
  margin-top: 30px;
  margin-right: 70px;
  .logo-search-up {
    width: 100%;
    height: 35px;
    // border: 2px solid pink;

    display: flex;
    justify-content: space-between;
    // box-sizing: border-box;
    input {
      width: 90%;
      float: left;
      height: 100%;
      font-size: 14px;
      border-radius: 8px 0 0 8px;
      border: 2px solid #fa2a83;
      outline: none;
      //   box-shadow: inset 0 0 5px gray;
    }
    p {
      width: 20%;
      height: 41px;
      text-align: center;
      line-height: 38px;
      font-size: 18px;
      background-color: #fa2a83;
      color: white;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
    }
  }
  .logo-search-down {
    color: gray;
    margin-top: 10px;
    font-size: 12px;
    > a {
      margin-left: 10px;
    }
  }
}
.header-list {
  // width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 0 #f2f2f2; 
  .fenlei {
    color: white;
    background-color: #fa2a83;
    padding: 10px 40px;
    cursor: pointer;
  }
  > ul {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin: 0 30px;
    line-height: 41px;
    > li {
      cursor: pointer;
      &:hover {
        color: #fa2a83;
      }
    }
  }
  .sell {
    line-height: 41px;
    > select {
      background-color: white;
      outline: none;
    }
  }
}
</style>