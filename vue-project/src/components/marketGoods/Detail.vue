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
        <h2 style="color:blue;font-size:22px">{{shop.name}}</h2>
        <p style="font-weight:bold;font-size:18px;margin-top:10px">
          <span class="p2">爆款</span>
          <span style="font-size:24px">{{oneGood.name}}</span>
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
    <ul class="list">
      <li style="border-bottom:3px solid #f10180;color:#f10180">规格参数</li>
      <li>商品展示</li>
      <li>全部口碑</li>
      <li>商品咨询</li>
      <li style="flex-grow:1">关于我们</li>
    </ul>
    <div class="one">
      <h3 class="title">
        商品参数
        <span class="eng">DETAIL</span>
      </h3>
      <div class="hr2"></div>
      <table>
        <tr>
          <td class="td-1">层数：</td>
          <td>2层</td>
          <td class="td-3">包装：</td>
          <td>箱装</td>
        </tr>
        <tr>
          <td class="td-1">国产进口：</td>
          <td>国产</td>
          <td class="td-3">净含量：</td>
          <td>220g以上</td>
        </tr>
        <tr>
          <td class="td-1">原料成分：</td>
          <td>原生浆</td>
          <td class="td-3">量贩装：</td>
          <td>否</td>
        </tr>
        <tr>
          <td class="td-1">类型：</td>
          <td>抽取式</td>
          <td class="td-3">抽/段数：</td>
          <td>130抽</td>
        </tr>
        <tr>
          <td class="td-1">商品款号：</td>
          <td>JK201-12E</td>
          <td class="td-3">商品编码：</td>
          <td>COLOR75抽12包</td>
        </tr>
      </table>
    </div>
    <div class="two">
      <h3 class="title">
        商品展示
        <span class="eng">IMAGE</span>
      </h3>
      <div class="hr2"></div>
      <div class="two-img">
        <img src="../../views/images/哈哈哈/03bb1cf8-68a5-4803-9504-03dd5c6b67cb.jpg" alt />
        <img src="../../views/images/哈哈哈/3bd44ddc-ca97-4b08-bce8-b441dd8dfa6e.jpg" alt />
        <img src="../../views/images/哈哈哈/3e24d692-4e7e-40da-bcfb-87d2de8e35b4.jpg" alt />
        <img src="../../views/images/哈哈哈/3fe9cc24-beea-4336-aacf-566290b3c3cb.jpg" alt />
        <img src="../../views/images/哈哈哈/50c38066-d771-4985-b96d-97edbcd01731.jpg" alt />
        <img src="../../views/images/哈哈哈/5ab46293-7be4-4a2c-8c96-1667da8d97db.jpg" alt />
        <img src="../../views/images/哈哈哈/5ab46293-7be4-4a2c-8c96-1667da8d97db_525x525_90.jpg" alt />
        <img src="../../views/images/哈哈哈/a47dc2ca-6411-46f9-9f99-5ad0f714094b_525x525_90.jpg" alt />
        <img src="../../views/images/哈哈哈/b6d65c1e-c7b4-47ab-9a02-bb36667fb5eb.jpg" alt />
        <img src="../../views/images/哈哈哈/c8296d44-02a6-4fd7-8930-392292b94fc0.jpg" alt />
        <img src="../../views/images/哈哈哈/dbb5f1e8-3ef2-4c28-b22c-e27b1385da1b_525x525_90.jpg" alt />
        <img src="../../views/images/哈哈哈/ef3b8254-8f9a-4d61-bfd3-043bbbd57307.jpg" alt />
        <!-- <img src="../../views/images/哈哈哈/share-sef3db69c23.png" alt /> -->
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
      this.addOrderSync({
        status: "未付款",
        goodId: this.oneGood._id,
        userId: localStorage.userId,
        removed: false,
      });
      this.$router.push("/orders");
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
        size.forEach((item) => {
          item.style.border = "";
        });
        // console.log(value.style.border);
        value.style.border = "2px solid red";
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
.title {
  color: #f10180;
  font-weight: 400;
  margin: 15px 0 5px 0;
  padding: 0px;
}
.eng {
  color: #a69999;
  margin-left: 10px;
}
.hr2 {
  width: 100%;
  height: 5px;
  background-image: url("../../views/images/first/xuebi-2.png");
}
.list {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: black;
  display: flex;
  border: 1px solid gainsboro;
  border-left: none;

  margin-top: 40px;
  > li {
    padding: 0 10px;
    font-size: 16px;
    border-left: 1px solid gainsboro;
    border-bottom: 3px solid black;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid gainsboro;
  margin-top: 20px;
  margin-bottom: 40px;
}
td {
  padding: 5px;
  color: #999999;
  border: 1px solid gainsboro;
}
.td-1,
.td-3 {
  background-color: gainsboro;
  font-weight: bold;
  text-align: right;
  width: 10%;
  color: gray;
}
.two {
  > .two-img {
    padding: 0px 150px;
    padding-top: 80px;
    >img{
      max-width: 100%;
      margin: 0;
      padding: 0;
      margin: 0 auto;
    }
  }
}
</style>