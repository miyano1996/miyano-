<template>
  <div style="position:relative">
    <div class="car">
      <div class="head">
        <div class="head-1">购物车</div>
        <div class="head-2"></div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <td>商品</td>
          <td>商品单价</td>
          <td>商品数量</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in carOrder" :key="value._id">
          <td class="goods">
            <div class="img">
              <img :src="'http://localhost:3000/images/'+value.goodId.image" alt />
            </div>
            <div class="tips">
              <p class="p1">{{value.goodId.name}}</p>
              <p class="p2">{{value.goodId.detail}}</p>
              <p class="p3">
                类别：
                <span>{{value.goodId.type}}</span>
              </p>
            </div>
          </td>
          <td>
            ￥
            <span class="price">{{value.goodId.price}}.00元</span>
          </td>
          <td>
            <button style="background:none;border:1px solid gray;outline:none">-</button>1
            <button style="background:none;border:1px solid gray;outline:none">+</button>
          </td>
          <td>
            <el-button type="danger" @click="addOrder(value._id)">立即下单</el-button>
            <el-button type="primary" @click="del(value._id)">移除</el-button>
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
  async created() {
    this.getAllOrders();
  },
  computed: {
    ...mapState(["carOrder"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getAllOrders", "delOrder", "updateOrderSync"]),
    addOrder(_id) {
      this.updateOrderSync({ _id, status: "未付款" });
      this.$notify({
        title: "成功",
        message: "下单成功",
        type: "success",
      });
    },
    del(_id) {
      this.$confirm("将该商品移除购物车, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.delOrder({ id: _id, success: true });
          this.getAllOrders();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang='less' scoped>
.car {
  position: absolute;
  width: 100%;
  //   min-height: 200px;
  top: -60px;
  left: 0;
  background-color: white;
}
.head {
  width: 100%;
  display: flex;
  .head-1 {
    font-size: 20px;
    color: #f10180;
    font-weight: bold;
    padding: 10px 18px;
    border-bottom: 3px solid #f10180;
  }
  .head-2 {
    flex-grow: 1;
    border-bottom: 1px solid gainsboro;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 100px;
  // line-height: 36px;
}
tr {
  width: 100%;
}
thead {
  background-color: white;
}
tbody {
  // background-color: rgba(0, 0, 0, .5);
  background-color: white;
}
td {
  padding: 15px;
}
.price {
  color: red;
  font-size: 17px;
}
.goods {
  display: flex;
  justify-content: center;
  .img {
    width: 100px;
    height: 100px;

    > img {
      width: 100%;
      // height: 100%;
      border: 2px solid red;
    }
  }
}
.tips {
  flex-grow: 1;
  text-align: left;
  margin-left: 20px;
  .p1 {
    color: orange;
    font-size: 14px;
  }
  .p2 {
    color: gray;
    font-size: 12px;
  }
  .p3 {
    color: gray;
    > span {
      color: blue;
      cursor: pointer;
    }
  }
  > p {
    padding: 3px;
  }
}
</style>