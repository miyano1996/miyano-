<template>
  <div class="gooddeta-box">
    <div class="good-present">
      <div class="goodimg">
        <figure class="imgmini">
          <ul>
            <li v-for="(item,index) in goodimg" :key="index" @click="change(item)">
              <img :src="'http://localhost:3000/images/'+item" width="54px" height="54px" />
            </li>
          </ul>
        </figure>
        <figure class="img">
          <img :src="'http://localhost:3000/images/'+url" alt />
        </figure>
      </div>
      <div class="gooddetail">
        <div class="good-name">
          <h1>{{good.name}}</h1>
          <h5>{{good.detail}}</h5>
          <div class="price">
            <p>￥{{good.price}}</p>
            <p class="oldprice" v-show="good.issole">原价:￥{{good.price*2}}</p>
          </div>
        </div>
        <div class="sole">
          <div class="text">促销活动</div>
          <div class="sole-item">
            <span v-show="good.issole">直降</span>
            <span class="bot">包邮</span>
          </div>
        </div>
        <div class="sole">
          <div class="text">数量选择</div>
          <div class="num-item">
            <button class="btn" @click="subnum">-</button>
            <input type="text" v-model="num" />
            <button class="btn" @click="addnum">+</button>
          </div>
        </div>
        <div class="sole">
          <div class="text">服务</div>
          <div class="num-item">
            <span>全国联保,官方正品</span>
          </div>
        </div>
      </div>
    </div>
    <div class="good-detailimg">
      <header>
        <h5>推荐商品</h5>
      </header>
      <img
        :src="'http://localhost:3000/images/'+item"
        alt
        v-for="(item, index) in gooddetailimg"
        :key="index"
      />
    </div>
    <div class="good-footer" id="footer">
      <div class="footermain">
        <div class="name">
          <span class="text">您已选择了</span>
          <span>{{good.name}}</span>
        </div>
        <div class="price">
          <p>￥{{good.price*num}}</p>
          <p class="oldprice" v-show="good.issole">原价:￥{{good.price*num*2}}</p>
          <button class="btn buy" @click="pay(good._id)">立即购买</button>
          <button class="btn" @click="addtocar(good._id)">加入购物车</button>
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
      good: {},
      gooddetailimg: ["noimg.png"],
      url: "noimg.png",
      goodimg: ["noimg.png"],
      num: 1,
      scrollTop: 0,
      height: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
    const id = localStorage.goodid;
    this.getGood(id);
  },
  methods: {
    ...mapActions(["getGood"]),
    ...mapActionsOrder(["addOrderTocar"]),
    change(url) {
      this.url = url;
    },
    addnum() {
      if (this.num > 0 && this.num < 10) {
        this.num++;
      }
    },
    subnum() {
      if (this.num > 1) {
        this.num--;
      }
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    addtocar(id) {
      this.addOrderTocar({
        status: "未付款",
        goodId: `${localStorage.goodid}`,
        userId: `${localStorage.userId}`,
        num: this.num,
        removed: false,
        isPay: false,
      });
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    pay(id) {
      this.$router.push({
        path: "/banshoushop/userpay",
        query: {
          goodId: `${localStorage.goodid}`,
          userId: `${localStorage.userId}`,
          num: this.num,
        },
      });
    },
  },
  computed: {
    ...mapState(["goodone"]),
  },
  watch: {
    goodone(newValue) {
      this.good = newValue[0];
      this.goodimg = this.good.detailimg.slice(0, 4);
      this.gooddetailimg = this.good.detailimg.slice(4);
      this.url = this.goodimg[0];
    },
    scrollTop(newValue) {
      this.height = document.getElementById("banshoushop").offsetHeight;
      if (this.height - newValue <= 1200) {
        document.getElementById("footer").classList.add("fixedbottom");
      } else {
        document.getElementById("footer").classList.remove("fixedbottom");
      }
    },
  },
};
</script>

<style>
</style>