<template>
  <el-card shadow="hover" :body-style="{padding:'10px'}">
    <img :src="'http://localhost:3000/images/'+image" 
    width="100%" 
    height="220px"
    @click="toGoodDetail"
     />
    <p class="title">{{title}}</p>
    <div class="line"></div>
    <div class="card-bottom">
      <div class="price">
        <span>￥{{price}}</span>
      </div>
      <div id="draw-border">
        <button>加入购物车</button>
      </div>
    </div>
  </el-card>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("goods");
export default {
  props:{
    title:String,
    price:String,
    image:String,
    goodIdProp:String
  },
  data(){
    return{
      goodId:this.goodIdProp
    }
  },
  methods:{
    ...mapMutations(['changeGoodOne']),
    toGoodDetail(){
      this.changeGoodOne(this.goodId)
      this.$router.push('goodDetail')
    }
  }
};
</script>

<style lang="scss" scoped>
img:hover{
  cursor: pointer;
}
.title {
  text-align: center;
  color: #414870;
}
.line {
  border-bottom: 1px solid #a8a4a4;
  margin-bottom:10px ;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price{
    color: crimson;
  }
}
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #cd1f25;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
  &:hover{
    cursor: pointer;
  }
}

button::before,
button::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before,
button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #cd1f25;
  border-right-color: #cd1f25;
  transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
}

button:hover::after {
  border-bottom-color: #cd1f25;
  border-left-color: #cd1f25;
  transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s,
    height 0.1s ease-out 0.3s;
}
</style>