<template>
  <el-container>
    <el-header>
      <div class="brand">
        <img src="../../../assets/yangSrc/images/logo.png" alt />
      </div>
      <div class="topInput">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="headerMsg">
        <i>欢迎您:</i>
        <span>{{username}}</span>
        <span class="myOrders" @click="goToMyOrders">我的订单</span>
        <a href="#" class="quit" @click="quit">[退出]</a>
        <el-badge :value="cartNum">
          <div class="cart" @click="goToCart">
            <img src="../../../assets/yangSrc/images/购物车.png" alt width="24px" />
          </div>
        </el-badge>
      </div>
    </el-header>
    <first-nav></first-nav>
    <el-main>
      <router-view></router-view>
    </el-main>
    <div class="line"></div>
    <el-footer><img src="../../../assets/yangSrc/images/footer.png" alt=""></el-footer>
  </el-container>
</template>

<script>
import FirstNav from "./main/FirstNav";
export default {
  components: {
    FirstNav,
  },
  data() {
    return {
      username: "",
      input: "",
      cartNum:12
    };
  },
  created() {
    this.getUsername();
  },
  methods: {
    getUsername() {
      const str = localStorage.useName;
      if (str) {
        this.username = str;
      }
    },
    goToCart(){
      this.$router.push('cart')
    },
    goToMyOrders(){
      this.$router.push('myOrders')
    },
    quit(){
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 90%;
  margin: 0 auto;
  min-height: 100%;
}
.el-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  .headerMsg {
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 230px;
    justify-content: space-around;
    .myOrders{
      color: rgb(65, 8, 8);
      &:hover{
        cursor: pointer;
        color: crimson;
        text-decoration: underline;
      }
    }
    i {
      color: #333;
    }
    .quit {
      color: red;
    }
    .cart {
      margin: 0 3px 0 5px;
      &:hover{
        cursor: pointer;
      }
    }
  }
}
.line{
  border-bottom: 2px solid #ccc;
  margin: 80px 0
}
.el-footer {
  background-color: #161616;
  height: 555px !important;
  img{
    display: block;
    margin: 0 auto;
  }
}
</style>