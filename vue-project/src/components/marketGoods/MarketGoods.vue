<template>
  <div>
    <article class="bannerBack">
      <div class="block">
        <el-carousel height="360px">
          <el-carousel-item v-for="item in 2" :key="item">
            <!-- <h3 class="small">{{  }}</h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </article>
    <div class="goodsShow">
      <div class="first">
        <img width="100%" src="../../views/images/first/15973935362178.jpg.webp" alt />
        <div class="first-goods">
          <img src="../../views/images/first/1.jpg" alt />
          <img src="../../views/images/first/2.jpg" alt />
          <img src="../../views/images/first/3.jpg" alt />
        </div>
      </div>
      <div class="second">
        <img width="100%" src="../../views/images/first/15344789862278.jpg" alt />
        <div class="second-goods">
          <div class="second-1">
            <div>
              <img src="../../views/images/first/b11.jpg" alt />
              <p>
                <span class="p1">疯抢价</span>￥98
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b12.jpg" alt />
              <p>
                <span class="p1">疯抢价</span>￥198
              </p>
            </div>
            <div style="margin-right:40px">
              <img src="../../views/images/first/b13.jpg" alt />
              <p>
                <span class="p1">疯抢价</span>￥298
              </p>
            </div>
          </div>
          <div class="second-2">
            <div>
              <img src="../../views/images/first/b21.jpg" alt />
              护肤套装
              <div>榜</div>
            </div>
            <div>
              <img src="../../views/images/first/b22.jpg" alt />
              护肤套装
              <div>榜</div>
            </div>
            <div style="margin-right:px">
              <img src="../../views/images/first/b23.jpg" alt />
              护肤套装
              <div>榜</div>
            </div>
          </div>
          <div class="second-3">
            <div>
              <img src="../../views/images/first/b31.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥98
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b32.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥29
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b33.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥698
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b34.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥328
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b35.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥233
              </p>
            </div>
            <div>
              <img src="../../views/images/first/b36.jpg" alt />
              <p>
                <span class="p1">快抢价</span>￥75
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="myGoods" style="margin-top:20px">
        <!-- <img width="100%" src="../../views/images/first/推荐.png" alt=""> -->
        <div v-for="value in goods" :key="value._id" @click="toDetail(value)">
          <img width="100%" height="75%" :src="'http://localhost:3000/images/'+value.image" alt />
          <p>
            <span class="p1">爆款</span> {{value.name}}
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>{{value.price}}00
          </p>
        </div>
        <!-- <div>
          <img width="100%" src="../../views/images/first/test1.jpg" alt />
          <p>
            <span class="p1">爆款</span> 的就是卡机看来当时卡看到快撒打开打算
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>434.00
          </p>
        </div>
        <div>
          <img width="100%" src="../../views/images/first/test1.jpg" alt />
          <p>
            <span class="p1">爆款</span> 的就是卡机看来当时卡看到快撒打开打算
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>434.00
          </p>
        </div>
        <div>
          <img width="100%" src="../../views/images/first/test1.jpg" alt />
          <p>
            <span class="p1">爆款</span> 的就是卡机看来当时卡看到快撒打开打算
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>434.00
          </p>
        </div>
        <div>
          <img width="100%" src="../../views/images/first/test1.jpg" alt />
          <p>
            <span class="p1">爆款</span> 的就是卡机看来当时卡看到快撒打开打算
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>434.00
          </p>
        </div>
        <div>
          <img width="100%" src="../../views/images/first/test1.jpg" alt />
          <p>
            <span class="p1">爆款</span> 的就是卡机看来当时卡看到快撒打开打算
          </p>
          <p class="p2">
            <span style="font-size:16px">￥</span>434.00
          </p>
        </div> -->
        <div id="space"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapActions,mapState} = createNamespacedHelpers('goods')
export default {
    created(){
        this.getMarketGoods();
        // console.log(this.goods);
    },
    data(){
        return {
       
        }
    },
    computed:{
        ...mapState(['goods']),
    },
    methods:{
        ...mapActions(['getMarketGoods']),
        ...mapMutations(['chooseGood']),
        toDetail(value){
            this.chooseGood(value)
            this.$router.push("/detail")
        }
    }
};
</script>

<style lang="less" scoped>
.bannerBack {
  width: 100%;
  background-image: url("../../views/images/15965248243687(2).jpg");
  height: 420px;
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: 50% 0;
  padding-top: 20px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
    background-image: url("../../views/images/15972813497110(2).jpg");
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(2n + 1) {
    // background-color: #d3dce6;
    background-image: url("../../views/images/15973984060767(2).jpg");
    background-repeat: no-repeat;
    // background-size: 100% 79.6%;
  }
  .block {
    width: 67%;
    margin: 0 auto;
    border: 15px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 5px gainsboro;
  }
}
.goodsShow {
  width: 70%;
  margin: 0 auto;
  .first-goods {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > img {
      cursor: pointer;
      width: 32%;
    }
  }
  .p1 {
    background-color: #ff3d6e;
    padding: 0 5px;
    color: white;
    border-radius: 5px;
    font-size: 13px;
  }
  .second {
    margin-top: 40px;

    .second-goods {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        //   min-height: 300px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 20px;
        //   border: 1px solid gray;
        box-sizing: border-box;
        //   margin-bottom: 20px;
      }
      .second-1 {
        width: 50%;
        background-image: url("../../views/images/first/b1.jpg");
        background-size: 100% 98%;
        background-repeat: no-repeat;
        //   padding-right: 20px;
        > div {
          width: 28%;
          > img {
            width: 100%;
          }
        }
      }
      .second-2 {
        width: 50%;
        background-image: url("../../views/images/first/b2.jpg");
        background-size: 100% 98%;
        background-repeat: no-repeat;
        > div {
          width: 28%;
          background-color: gainsboro;
          position: relative;
          cursor: pointer;
          > img {
            width: 100%;
          }
          > div {
            position: absolute;
            color: white;
            background-color: #ff3d6e;
            right: 5px;
            bottom: 2px;
            font-size: 13px;
            padding: 0 2px;
          }
        }
      }
      .second-3 {
        width: 100%;
        background-image: url("../../views/images/first/b3.png");
        background-size: 100% 98%;
        background-repeat: no-repeat;
        padding-top: 90px;
        > div {
          width: 15%;

          > img {
            width: 100%;
          }
        }
      }
    }
  }
  .myGoods {
    background-color: #f2f2f2;
    background-image: url("../../views/images/first/推荐.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 80px;
    // padding-bottom: 40px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 10px;
    > div {
      box-sizing: border-box;
      width: 25%;
      padding: 20px;
      background-color: white;
      cursor: pointer;
    //   border-radius: 12px;
      margin-bottom: 20px;
      border-right: 10px solid #f2f2f2;
      > p {
        margin-top: 10px;
      }
      .p2 {
        font-size: 24px;
        color: red;
      }
    }
  }
}
#space {
  flex-grow: 1;
  background-color: #f2f2f2;
}
</style>