<template>
  <div class="paybox">
    <img :src="'http://localhost:3000/images/'+goodone[0].image" width="214px" height="214px" />
    <div class="gooddetail">
      <div class="good-name">
        <h1>{{goodone[0].name}}</h1>
        <h5>数量:{{num}}</h5>
        <div class="price">
          <p>单价:￥{{goodone[0].price}}</p>
          <p class="oldprice" v-show="goodone[0].issole">原价:￥{{goodone[0].price*2}}</p>
          <p style="margin-top:10px; font-size: 26px;">总价:￥{{goodone[0].price*num}}</p>
          <button class="btn" @click="pay()">确认支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("goods");
const { mapActions: mapActionsOrder } = createNamespacedHelpers("orders");

export default {
  data() {
    return {
      goodId: "",
      userId: "",
      num: 0,
    };
  },
  created() {
    this.goodId = this.$route.query.goodId;
    this.userId = this.$route.query.userId;
    this.num = this.$route.query.num;
    this.getGood(this.$route.query.goodId);
  },
  methods: {
    ...mapActions(["getGood"]),
    ...mapActionsOrder(["addOrderTocar"]),
    pay() {
      this.addOrderTocar({
        status: "已支付",
        goodId: this.goodId,
        userId: this.userId,
        num: this.num,
        removed: false,
        isPay: true,
      });
      this.$message({
        message: "购买成功",
        type: "success",
      });
    },
  },
  computed: {
    ...mapState(["goodone"]),
  },
};
</script>

<style>
</style>