<template>
  <div class="home">
    <div class="upper-nar">
      <div class="left">
        <img :src="tealogo.path">
      </div>
      <div class="center">
        <span>Tea House</span>
      </div>
      <div class="right">
        <button @click="toCartBtn">Cart({{cartLength}})</button>
      </div>
    </div>
    <div class="rec">
      Recommended today
    </div>
    <carousel-3d :inverse-scaling="1000" :space="600" :width="400" :height="400">
      <slide v-for="(item, i) in recommand" :key="i" :index="item.iid">
        <img :src="item.image" class="theimage"  @click="itemClick(item)">
      </slide>
    </carousel-3d>
    <div class="tm">
      Menu
    </div>
    <div class="menu">
      <left-control-bar :title="title" @titleClick="titleClick"></left-control-bar>
    </div>
    <div class="right-part">
      <scroll class="right-scroll">
        <menu-item :maitItem="subCategoryDataList"></menu-item>
      </scroll>
    </div>
    <toast :theItem="theItem" @toastBtn="toastBtn" v-show="theShow"></toast>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel3d, Slide } from 'vue-carousel-3d';
import LeftControlBar from './childComponts/LeftControlBar.vue';
import Scroll from '@/components/Scroll'
import menuItem from '@/views/childComponts/menuItem'
import MenuItem from './childComponts/menuItem.vue';
import Toast from '@/components/toast/Toast'

import { mapGetters } from "vuex";

import food from '@/common/food'

export default {
  name: 'Home',
  components: {
    Carousel3d,
    Slide,
    LeftControlBar,
    Scroll,
    menuItem,
    MenuItem,
    Toast,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  data() {
    return {
      tealogo: {
        index : 0,
        path: require("../assets/thlogo.png")
      },
      title : ["Soup", "Appetizer", "Pork", "Sea Food"],
      subCategoryDataList: food.soup,
      recommand: food.recommand,
      theItem: {},
      theShow: false,
    }
  },
  methods :{
    titleClick(index) {
      console.log(index);
      if (index == 0) {
          this.subCategoryDataList = food.soup;
      } else if (index == 1) {
        this.subCategoryDataList = food.appetizer;
      } else if (index == 2) {
        this.subCategoryDataList = food.pork;
      } else {
        this.subCategoryDataList = food.seafood;
      }
    },
    toCartBtn() {
      this.$router.push("/shopcart").catch(err => err);
      console.log(this.$store);
    },
    itemClick(item) {
      this.theItem = item;
      this.theShow = true;
      console.log(this.theShow);
    },
    toastBtn(s) {
      this.theShow = s;
    }
  }
}
</script>

<style scoped>
.upper-nar {
  display: flex;
}
.left,
.right,
.center {
  flex: 1;
  margin-left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
}
.rec {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  text-align: center;
}
.tm {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
}
.menu {
  background-color: #e2e0e0;
  height: calc(100vh - 49px);
  width: 5%;
  float: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
}
.theimage {
  height: 400px;
  width: 400px;
}
</style>
