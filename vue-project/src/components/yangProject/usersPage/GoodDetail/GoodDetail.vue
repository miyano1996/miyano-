<template>
  <div class="container">
    <el-row :gutter="50">
      <el-col :span="12">
        <div class="bigPicContainer">
          <img :src="'http://localhost:3000/images/'+bigPicSrc" alt height="100%" width="100%" />
        </div>
        <div class="smallPicContainer">
          <img
            v-for="(item,index) of indexPic"
            :key="index"
            :src="'http://localhost:3000/images/'+item"
            width="80px"
            height="80px"
            @click="changeBigPic(item)"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <p class="goodName">【{{goodone.type}}】{{goodone.name}}</p>
        <p class="detail">[{{goodone.detail}}]</p>
        <p class="price">￥{{goodone.price}}</p>
        <p class="store">
          数量 库存
          <span>{{goodone.store}}</span>件
        </p>
        <p>
          <el-input-number size="small" v-model="num" :min="min" :max="max"></el-input-number>
        </p>
        <div class="buttonContainer">
          <el-button class="buyNow">立刻购买</el-button>
          <el-button type="danger" class="addToCart" @click="addToCart">加入购物车</el-button>
        </div>
        <div class="connect">
          <h5>联系商家：</h5>
          <div class="shopMsg">
            <i class="el-icon-phone"></i>
            <span>{{goodone.shopId.name}}</span>
            <el-rate v-model="value" disabled text-color="#ff9900" score-template="{value}"></el-rate>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="good-detail-container">
      <el-tabs type="border-card">
        <el-tab-pane label="商品详情">
          <div class="detail-images">
            <img
              v-for="(item,index) of detailPic"
              :key="index"
              :src="'http://localhost:3000/images/'+item"
              alt
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户评价（99+）">在做了</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: goodMapState,mapMutations:goodMapMutations } = createNamespacedHelpers("goods");
const { mapState: userMapSatate } = createNamespacedHelpers("users");
const { mapActions: cartMapActions } = createNamespacedHelpers("cart");
const { mapActions:shopMapAction } = createNamespacedHelpers("shops")
export default {
  data() {
    return {
      bigPicSrc: "",
      userId: "",
      num: 1,
      min: 1,
      max: 4,
      value:1
    };
  },
  computed: {
    indexPic() {
      return this.goodone.detailimg.slice(0, 4);
    },
    detailPic() {
      return this.goodone.detailimg.slice(4);
    },
    ...goodMapState(["goodone"]),
  },
  created() {
    this.userId = localStorage.userId;
    console.log(this.goodone);
  },
  async mounted() {
    this.bigPicSrc = this.indexPic[0];
    this.max = parseInt(this.goodone.store);
    const shop = this.goodone.shopId
    shop.chartsData.dailyViews[shop.chartsData.dailyViews.length-1]++
    const msg = await this.addShopViewAsync(shop)
    this.renewGoodOneShop(shop)
  },
  methods: {
    ...goodMapMutations(['renewGoodOneShop']),
    ...cartMapActions(["addCartAsync"]),
    ...shopMapAction(['addShopViewAsync']),
    changeBigPic(str) {
      this.bigPicSrc = str;
    },
    async addToCart() {
      const msg = await this.addCartAsync({
        good: this.goodone,
        userId: this.userId,
        num: this.num,
        status: false,
        time: new Date().getTime()
      });
      if (msg.success) {
        this.$message({
          message: "添加购物车成功",
          type: "success",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  padding: 30px;
  margin: 0 auto;

  .bigPicContainer {
    width: 500px;
    height: 500px;
    border: 1px solid #aaa;
  }
  .smallPicContainer {
    margin-top: 10px;
    display: flex;
    img {
      margin-right: 10px;
      border: 1px solid #ccc;
    }
  }
  .goodName {
    font-weight: 500;
    font-size: 24px;
  }
  .detail {
    color: #333;
    font-weight: 14px;
  }
  .price {
    color: crimson;
    font-weight: 500;
    font-size: 24px;
  }
  .store {
    font-size: 13px;
    color: #888;
    span {
      color: crimson;
    }
  }
  .buttonContainer {
    button {
      margin-right: 10px;
    }
  }
  .connect {
    margin-top: 30px;
    span {
      color: #888;
      &:hover {
        color: #000;
        cursor: pointer;
      }
    }
    .shopMsg {
      display: flex;
      align-items: center;
    }
  }
  .good-detail-container {
    margin-top: 50px;
    .detail-images {
    }
  }
}
</style>