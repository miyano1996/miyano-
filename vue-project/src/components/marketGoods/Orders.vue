<template>
  <div>
      <div v-for="value in orders" :key="value._id">
          <h1>订单</h1>{{value}}
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers("orders");
export default {
    methods:{
        ...mapActions(['getAllOrders']),
        ddd(){
            console.log(this.orders);
        }
    },
    async created(){
        const datas = (await this.getAllOrders()).data.data;
        this.orders = datas.filter(value=>value.userId._id == localStorage.userId)
    },
    computed:{
        
    },
    data(){
        return {
            orders:[]
        }
    }
}
</script>

<style>

</style>