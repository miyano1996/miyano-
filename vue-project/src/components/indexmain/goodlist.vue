<template>
  <div class="goodlist">
    <!-- 热门商品 -->
    <div class="list-model">
      <header>
        <h5>热门商品</h5>
        <div class="aside">
          <button class="btn left" @click="toleft"></button>
          <button class="btn right" @click="toright"></button>
        </div>
      </header>
      <div class="model-body" ref="modelbody">
        <div class="item" v-for="(item) in goods" :key="item._id" @click="gooddetail(item._id)">
          <figure>
            <img :src="'http://localhost:3000/images/'+item.image" width="216px" height="216px" />
          </figure>
          <div class="goodname">
            <h3>{{item.name}}</h3>
            <h5>{{item.detail}}</h5>
          </div>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span class="oldprice" v-show="item.issole">￥{{item.price*1.2}}</span>
          </div>
          <div class="sole" v-show="item.issole">
            <span>直降</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐商品 -->
    <div class="list-model">
      <header>
        <h5>推荐商品</h5>
      </header>
      <div class="model-body nowarp">
        <div class="item double-img">
          <img
            src="https://resource.smartisan.com/resource/a74b17fb442afa0a45111e4e65de3501.png?x-oss-process=image/resize,w_600/format,webp"
          />
        </div>
        <div class="item" v-for="(item) in goodlist" :key="item._id" @click="gooddetail(item._id)">
          <figure>
            <img :src="'http://localhost:3000/images/'+item.image" width="216px" height="216px" />
          </figure>
          <div class="goodname">
            <h3>{{item.name}}</h3>
            <h5>{{item.detail}}</h5>
          </div>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span class="oldprice" v-show="item.issole">￥{{item.price*1.2}}</span>
          </div>
          <div class="sole" v-show="item.issole">
            <span>直降</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("goods");

export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    ...mapActions(["getGoods"]),
    gooddetail(id) {
      localStorage.goodid = id;
      this.$router.push({ path: "/banshoushop/gooddetail" });
    },
    toleft() {
      this.$refs.modelbody.classList.remove("itemmove");
    },
    toright() {
      this.$refs.modelbody.classList.add("itemmove");
    },
  },
  computed: {
    ...mapState(["goods"]),
    goodlist() {
      return this.goods.slice(0, 6);
    },
  },
};
</script>

<style>
</style>