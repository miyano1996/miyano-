<template>
  <div class="box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{shop.name}}</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{oneGood.name}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="content-l">
        <img width="100%" height="400px" :src="'http://localhost:3000/images/'+oneGood.image" alt />
        <div class="smallImage">
          <div>
            <img src="../../views/images/first/small1.jpg" alt />
          </div>
          <div>
            <img src="../../views/images/first/small2.jpg" alt />
          </div>
          <div>
            <img src="../../views/images/first/small3.jpg" alt />
          </div>
          <div>
            <img src="../../views/images/first/small4.jpg" alt />
          </div>
        </div>
        <p class="p1">商品编码：{{oneGood._id}}</p>
        <div class="hr1"></div>
        <img src="../../views/images/first/hrbottom.png" alt />
      </div>
      <div class="content-r">
        <h2 style="color:blue">{{shop.name}}</h2>
        <p style="font-weight:bold;font-size:18px;margin-top:10px">
          <span class="p2">爆款</span>
          {{oneGood.name}}
        </p>
        <div class="pricebox">
          <span>￥</span>
          <span id="price">{{oneGood.price}}</span>
          <span>3.0折</span>
          <div class="credit">店铺信用:{{shop.credit}}</div>
        </div>
        <div>
          <span class="p1">配送</span>
          <select name id>
            <option value="成都">成都</option>
            <option value="绵阳">绵阳</option>
            <option value="攀枝花">攀枝花</option>
          </select>
        </div>
        <div class="color">
          <div>
            <span class="p1">颜色</span>
          </div>
          <div>
            <p class="p3 p4" style="margin-bottom:0">原色</p>
          </div>
        </div>
        <div class="size">
          <div>
            <span class="p1">尺寸</span>
          </div>
          <div class="p-size">
            <p class="p3">小号（适合小学生）</p>
            <p class="p3" style="border:2px solid red">中号（适合中学生）</p>
            <p class="p3">大号（适合大学生）</p>
            <p class="p3">超大号（适合绿巨人）</p>
          </div>
        </div>
        <div class="num">
          <span class="p1">数量</span>
          单人仅限一件
        </div>
        <div>
          <el-button type="danger" @click="toCar">加入购物车</el-button>
        </div>
        <div class="hr1"></div>
        <div>
          <span class="p1">客服</span>
          <span class="p1" style="color:red">在线客服</span>
          <span class="p1">(09:00-23:00)</span>
        </div>
        <div>
          <span class="p1">服务</span>
          <span class="p1">商家发货及售后</span>
          <span class="p1">七天包退换</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers("goods");
const { mapActions: mapAction } = createNamespacedHelpers("shops");
const { mapActions: order } = createNamespacedHelpers("orders");
export default {
  computed: {
    ...mapState(["oneGood"]),
  },
  methods: {
    ...mapAction(["getOwnShopsSync"]),
    ...order(["addOrderSync"]),
    toCar() {
      // console.log(this.shop);
      this.addOrderSync({status:'未付款',goodId:this.oneGood._id,userId:localStorage.userId,removed:false});
      this.$router.push('/orders')
    },
  },
  async created() {
    this.shop = (
      await this.getOwnShopsSync({ _id: this.oneGood.shopId })
    ).data[0];
    // console.log({ _id: this.oneGood.shopId });
    const size = document.querySelectorAll(".p-size>p");
    size.forEach((value) => {
      value.onclick = function () {
        size.forEach(item=>{item.style.border = ''})
        // console.log(value.style.border);
        value.style.border = "2px solid red"
      };
    });
  },
  data() {
    return {
      shop: {},
    };
  },
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
.box {
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
}
.content {
  margin-top: 20px;
  display: flex;
  .content-l {
    width: 40%;
    .smallImage {
      width: 100%;
      margin: 10px 30px;
      display: flex;
      justify-content: space-around;
      width: 70%;
      > div {
        border: 1px solid gainsboro;
        width: 20%;
        &:hover {
          border: 1px solid red;
        }
        > img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
    .hr1 {
      border-bottom: 1px dashed gainsboro;
      margin: 15px 0;
    }
    img {
      cursor: pointer;
    }
  }
  .p1 {
    font-size: 12px;
    color: gray;
  }
  .content-r {
    width: 60%;
    box-sizing: border-box;
    padding: 0 30px;
    > * {
      margin: 0;
      padding: 0;
    }
    .p1 {
      margin-right: 20px;
    }
    > div {
      margin-top: 15px;
    }
    .p2 {
      color: white;
      background-color: yellowgreen;
      padding: 2px 8px;
      font-size: 12px;
      font-weight: 400;
      margin-right: 12px;
    }
    .pricebox {
      background-image: url("../../views/images/first/priceback.png");
      width: 100%;
      background-size: cover;
      padding: 25px 30px;
      position: relative;
      color: white;
      font-size: 20px;
      .credit {
        position: absolute;
        right: 50px;
        bottom: 20px;
        font-size: 16px;
      }
      #price {
        font-size: 32px;
        margin-right: 12px;
      }
    }
    select {
      width: 30%;
      border: 1px solid gainsboro;
      outline: none;
      height: 30px;
    }
    .color,
    .size {
      display: flex;
    }

    .p3 {
      height: 30px;
      width: 200px;
      border: 1px solid gainsboro;
      font-size: 14px;
      line-height: 30px;
      margin-bottom: 10px;
      padding-left: 20px;
      cursor: pointer;
    }
    .p4 {
      border: 2px solid red;
    }
    .num {
      font-size: 14px;
      color: red;
    }
  }
}
</style>