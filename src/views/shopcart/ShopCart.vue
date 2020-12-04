<template>
  <div class="shopcart">
    <div class="right-side">
      <scroll class="content" ref="scroll">
        <cart-list class="cart-list"></cart-list>
      </scroll>
    </div>
    <cart-buttom-bar></cart-buttom-bar>
    <div class="left-size">

    </div>
  </div>
</template>

<script>
import Scroll from "../../components/Scroll";
import CartList from '@/views/shopcart/childComponts/CartList';
import CartListItem from '@/views/shopcart/childComponts/CartListItem';
import CartButtomBar from '@/views/shopcart/childComponts/CartButtomBar'

import { mapGetters } from "vuex";

export default {
  name: "ShopCart",
  components: {
    Scroll,
    CartList,
    CartListItem,
    CartButtomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },

}
</script>

<style scoped>

</style>