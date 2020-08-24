<template>
  <div>
    <h1>我的订单</h1>
    <el-row>
      <el-col :span="3"><strong>下单时间</strong></el-col>
      <el-col :span="3"><strong>商品图片</strong></el-col>
      <el-col :span="3"><strong>商品名称</strong></el-col>
      <el-col :span="2"><strong>单价</strong></el-col>
      <el-col :span="2"><strong>购买数量</strong></el-col>
      <el-col :span="3"><strong>商品总价</strong></el-col>
      <el-col :span="3"><strong>订单总价</strong></el-col>
      <el-col :span="3"><strong>商家</strong></el-col>
      <el-col :span="2"><strong>操作</strong></el-col>
    </el-row>
    <el-row v-for="(item1,index1) of tableData" :key="index1">
      <el-col :span="3">{{item1[0].time}}</el-col>
      <el-col :span="3">
        <div v-for="child of item1" :key="child._id">
          <img
            :src="'http://localhost:3000/images/'+child.good.image"
            alt
            width="80px"
            height="80px"
          />
        </div>
      </el-col>
      <el-col :span="3">
        <div v-for="child of item1" :key="child._id">
          <p>{{child.good.name}}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <div v-for="child of item1" :key="child._id">
          <p>{{child.good.price}}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <div v-for="child of item1" :key="child._id">
          <p>{{child.num}}</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div v-for="child of item1" :key="child._id">
          <p>{{child.good.price*child.num}}</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <p class="total">￥{{total[index1]}}</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div v-for="child of item1" :key="child._id">
          <p>{{child.good.shopId.name}}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <el-button type="warning">删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    total() {
      const arr = [];
      this.tableData.forEach((item) => {
        let total = 0;
        item.forEach((ele) => {
          total += ele.good.price * ele.num;
        });
        arr.push(total);
      });
      return arr;
    },
  },
  async created() {
    const data = await this.getOrdersAsync(localStorage.userId);
    if (data.success) {
      const newArr = this.mergeArr(data.row);
      this.tableData = newArr;
      console.log(this.tableData);
    }
  },
  methods: {
    ...mapActions(["getOrdersAsync"]),
    mergeArr(arr) {
      let obj = {},
        newArr = [];
      arr.forEach((item, suffix) => {
        if (!obj[item.time]) {
          var arr1 = [];
          arr1.push(item);
          newArr.push(arr1);
          obj[item.time] = item;
        } else {
          newArr.forEach((value, index) => {
            if (value[0].time == item.time) {
              value.push(item);
            }
          });
        }
      });
      return newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
p{
  line-height: 80px;
  margin-top:-10px
}
.total{
  color: crimson;
  font-size: 18px;
}
button{
  margin-top:20px
}
.el-row{
  margin-top: 50px;
  border:1px solid #aaa;
  padding:10px
}
</style>