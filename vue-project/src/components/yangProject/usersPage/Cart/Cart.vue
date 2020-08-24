<template>
  <div>
    <h1>我的购物车</h1>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="商品">
        <template slot-scope="scope">
          <img
            :src="'http://localhost:3000/images/'+scope.row.image"
            alt
            width="80px"
            height="80px"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column label="单价" prop="price"></el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
          <el-input-number size="mini" v-model="scope.row.num"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          <span>{{scope.row.num*scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="warning" @click="deleteCart(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-footer">
      <span>
        合计：
        <strong class="price">{{totalPrice}}</strong> 元
      </span>
      <el-button type="danger" @click="settle">结算</el-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("cart");
const {
  mapState: goodMapState,
  mapMutations: goodMapMutations,
} = createNamespacedHelpers("goods");
const { mapActions: shopMapAction } = createNamespacedHelpers("shops");

export default {
  data() {
    return {
      shop: {},
      tableData: [],
      multipleSelection: [],
    };
  },
  computed: {
    ...goodMapState(["goodone"]),
    totalPrice() {
      let total = 0;
      this.multipleSelection.forEach(
        (item) => (total += item.num * item.price)
      );
      return total;
    },
  },
  async created() {
    await this.render();
  },

  mounted() {
    console.log(this.goodone);
    this.shop = this.goodone.shopId;
  },
  methods: {
    ...goodMapMutations(["renewGoodOneShop"]),
    ...mapActions(["getCartAsync", "updateCartAsync", "deleteCartAsync"]),
    ...shopMapAction(["addShopViewAsync"]),
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    async render() {
      const data = await this.getCartAsync(localStorage.userId);
      if (data.success) {
        const arr = [];
        data.row.forEach((item) =>
          arr.push({
            image: item.good.image,
            name: item.good.name,
            price: item.good.price,
            type: item.good.type,
            _id: item._id,
            num: item.num,
          })
        );
        this.tableData = arr;
      }
    },
   async deleteCart(_id) {
     await this.deleteCartAsync(_id);
     await this.render()
    },
    async settle() {
      let now = new Date().getTime();
      const arr = [];
      this.multipleSelection.forEach((item) => {
        arr.push({
          _id: item._id,
          num: item.num,
          time: now,
        });
      });
      const res = await this.updateCartAsync(arr);
      if (res.success) {
        console.log(this.shop);
        this.shop.chartsData.dailySales[
          this.shop.chartsData.dailySales.length - 1
        ] += this.totalPrice;
        this.shop.chartsData.todayUsers[
          this.shop.chartsData.todayUsers.length - 1
        ]++;
        this.shop.chartsData.totalOrders[
          this.shop.chartsData.totalOrders.length - 1
        ]++;
        console.log(this.shop);
        this.addShopViewAsync(this.shop);
        this.renewGoodOneShop(this.shop);
        this.$message({
          message: "您已付款成功！",
          type: "success",
        });
        this.$router.push("myOrders");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  padding-right: 180px;
  button {
    margin: 0 30px;
  }
  .price {
    color: crimson;
    font-size: 18px;
  }
}
</style>