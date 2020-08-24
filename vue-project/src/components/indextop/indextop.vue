<template>
  <div class="home">
    <shopheader></shopheader>
    <shopnav></shopnav>
  </div>
</template>

<script>
// @ is an alias to /src
import shopheader from "./header";
import shopnav from "./shopnav";
export default {
  name: "indextop",
  components: {
    shopheader,
    shopnav,
  },
};
</script>
