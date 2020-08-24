<template>
  <div id="banshoushop" ref="shopbox">
    <indextop></indextop>
    <router-view></router-view>
    <indexfooter></indexfooter>
  </div>
</template>

<script>
import indextop from "../indextop/indextop";
import indexfooter from "../indexfooter/indexfooter";
import indexmain from "../indexmain/indexmain";
import "../../css/clear.css";
import "../../css/index.css";

export default {
  components: {
    indextop,
    indexmain,
    indexfooter,
  },
};
</script>


<style>
</style>