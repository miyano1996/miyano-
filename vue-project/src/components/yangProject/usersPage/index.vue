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
        <i>欢迎您: </i>
        <span>{{username}} </span>
        <a href="#" class="quit">[退出]</a>
        <div class="cart">
        <img src="../../../assets/yangSrc/images/购物车.png" alt="" width="24px">
        </div>
      </div>
    </el-header>
      <first-nav></first-nav>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import FirstNav from './main/FirstNav'
export default {
  components: {
FirstNav
  },
  data() {
    return {
      username: "",
      input: '',
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
    width: 180px;
    justify-content: space-around;
    i {
      color: #333;
    }
    .quit {
      color: red;
    }
    .cart{
        margin: 0 3px 0 5px;
    }
  }
}
.el-footer{
    background-color: grey;

}
</style>