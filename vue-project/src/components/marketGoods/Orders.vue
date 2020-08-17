<template>
  <div style="background-color:#f5f6f8">
    <div class="pink" style="width:100vw">
      <div class="nav">
        <div class="left">
          <span class="p1">我的唯品会</span>
          <span class="p2">安全中心</span>
        </div>
        <div class="right">
          <router-link tag='span' to='/marketGoods' class="p2">首页</router-link>
          <span style="color:gainsboro;">|</span>
          <span class="p2">我的特卖</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="real">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#fff"
              text-color="#1e1e1e"
              active-text-color="#f10180"
              width="300px"
              router
              :default-openeds="['1']"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-shopping-cart-2"></i>
                  <span>我的交易</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item @click="toCar">购物车</el-menu-item>
                  <el-menu-item @click="toOrders">订单管理</el-menu-item>
                  <el-menu-item>退换/售后</el-menu-item>
                  <el-menu-item>收货地址</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>我的资产</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item>零钱</el-menu-item>
                  <el-menu-item>唯品金融</el-menu-item>
                  <el-menu-item>银行卡</el-menu-item>
                  <el-menu-item>唯品卡</el-menu-item>
                  <el-menu-item>优惠券</el-menu-item>
                  <el-menu-item>唯品币</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>我的账户</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item>我的资料</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
        <div class="main">
          <el-breadcrumb style="font-size:13px;margin-top:5px" separator="/">
            <el-breadcrumb-item>我的唯品会</el-breadcrumb-item>
            <el-breadcrumb-item>{{path}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="warning">
            <div class="xuebi"></div>
            <div class="tips">
              安全提醒：唯品会不会以任何理由要求您提供银行卡信息或支付额外费用，请谨防钓鱼链接或诈骗电话。
              *为保障您的信息安全，订单信息中的联系电话已被加密隐藏。
            </div>
          </div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="rgba(255, 255, 255, 0)"
            active-text-color="#f10180"
          >
            <el-menu-item index="1">全部订单</el-menu-item>
            <el-menu-item index="2">待付款</el-menu-item>
            <el-menu-item index="3">待收货</el-menu-item>
            <el-menu-item index="4">已完成</el-menu-item>
            <el-menu-item index="5">已取消</el-menu-item>
          </el-menu>
          <div class="line"></div>
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-for="value in orders" :key="value._id">
      <h1>订单</h1>
      {{value}}
    </div> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "orders"
);
export default {
  methods: {
    ...mapActions(["getAllOrders"]),
    toCar(){
      this.path = '购物车'
      this.$router.push('/car')
    },
    toOrders(){
      this.path = '订单管理'
      this.$router.push('/orders')
    }
  },
  async created() {
    //   const msg = await this.getAllOrders();
    //   console.log(msg);
    const datas = (await this.getAllOrders()).data.data;
    this.orders = datas.filter(
      (value) => value.userId._id == localStorage.userId
    );
  },
  computed: {},
  data() {
    return {
      orders: [],
      activeIndex: "1",
      activeIndex2: "1",
      path:'订单管理'
    };
  },
};
</script>

<style lang='less' scoped>
.pink {
  width: 100%;
  height: 42px;
  background-color: #f10180;
  position: absolute;
  z-index: 1;
  top: 130px;
  left: 0;
  .p1,
  .p2 {
    cursor: pointer;
    padding: 10px 15px;
    line-height: 42px;
    &:hover {
      background-color: #db0a76;
    }
  }
  .p1 {
    background-color: #db0a76;
    font-weight: bold;
  }
}
.nav {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 16px;
}
.content {
  background-image: url("../../views/images/first/orderback.png");
  background-repeat: no-repeat;
  background-size: 133%;
  background-position: 50% 0;
  min-height: 500px;
  width: 100%;
  padding-top: 30px;
}
.real {
  width: 70%;
  margin: 0 auto;
  display: flex;
}
.el-col {
  width: 200px;
  font-size: 12px;
}
.main {
  margin-left: 20px;
  flex-grow: 1;
}
.warning {
  padding: 15px;
  width: 100%;
  height: 80px;
  background-color: white;
  margin-top: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  // display: flex;
  .xuebi {
    display: inline-block;
    width: 37px;
    height: 36px;
    background-image: url("../../views/images/first/xuebi-1.png");
  }
  .tips {
    margin-left: 20px;
    width: 70%;
    font-size: 13px;
    display: inline-block;
  }
}
</style>