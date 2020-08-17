<template>
  <div style="margin:30px 0">
    <table>
        <thead>
            <tr>
                <td>商品</td>
                <td>订单总额</td>
                <td>订单状态</td>
                <td>操作</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="value in orders" :key="value._id">
                <td class="goods">
                    <div class="img">
                        <img :src="'http://localhost:3000/images/'+value.goodId.image" alt="">
                    </div>
                    <div class="tips">
                        <p class="p1">{{value.goodId.name}}</p>
                        <p class="p2">{{value.goodId.detail}}</p>
                        <p class="p3">类别：<span>{{value.goodId.type}}</span></p>
                    </div>
                </td>
                <td>
                   ￥<span class="price">{{value.goodId.price}}.00元</span>
                </td>
                <td>
                    {{value.status}}
                </td>
                <td>
                    <el-button type="danger">去付款</el-button>
                    <el-button type="primary">取消订单</el-button>
                </td>
            </tr>
        </tbody>
    </table>
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
  },
  async created() {
    const datas = (await this.getAllOrders()).data.data;
    this.orders = datas.filter(
      (value) => value.userId._id == localStorage.userId
    );
  },
  computed: {},
  data(){
      return {
          orders:[]
      }
  }
};
</script>

<style lang='less' scoped>
table{
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 13px;
    // line-height: 36px;
}
tr{
    width: 100%;
}
thead{
    background-color: white;
}
tbody{
    background-color: rgba(255, 255, 255, .5);
}
td{
padding: 15px;
}
.price{
    color: red;
    font-size: 17px;
}
.goods{
    display: flex;
    justify-content: center;
    .img{
        width: 100px;
        height: 100px;
        
        >img{
            width: 100%;
            border: 2px solid red;
        }
    }
}
.tips{
    flex-grow: 1;
    text-align: left;
    margin-left: 20px;
    .p1{
        color: orange;
        font-size: 14px;
    }
    .p2{
        color: gray;
        font-size: 12px;
    }
    .p3{
        color: gray;
        >span{
            color: blue;
            cursor: pointer;
        }
    }
    >p{
        padding: 3px;
    }
}
button{

}
</style>