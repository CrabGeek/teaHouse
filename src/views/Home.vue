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
    <div>
      Recommended today
    </div>
    <carousel-3d :inverse-scaling="1500" :space="600" :width="400" :height="400">
      <slide v-for="(item, i) in recommand" :key="i" :index="item.iid">
        <img :src="item.image" class="theimage"  @click="itemClick(item)">
      </slide>
    </carousel-3d>
    <div>
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
    <toast :theItem="theItem" :theShow="theShow"></toast>
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
      subCategoryDataList: {
        f1: {image: require("../assets/food/soup/download.jpg"), iid: 0},
        f2: {image: require("../assets/food/soup/images.jpg"),iid: 1},
        f3: {image: require("../assets/food/soup/images (1).jpg"), iid: 2},
        f4:{image: require("../assets/food/soup/images (2).jpg"), iid: 3},
        f5: {image: require("../assets/food/soup/images (3).jpg"),iid: 4},
        f6: {image: require("../assets/food/soup/images (4).jpg"), iid: 5},
        f7: {image: require("../assets/food/soup/images (5).jpg"), iid: 6},
        f8: {image: require("../assets/food/soup/images (6).jpg"), iid: 7},
        f9: {image: require("../assets/food/soup/images (7).jpg"), iid: 8},
        f10: {image: require("../assets/food/soup/images (8).jpg"), iid: 9},
        f11: {image: require("../assets/food/soup/images (9).jpg"), iid: 10},
        f12: {image: require("../assets/food/soup/images (10).jpg"), iid: 11},
      },
      recommand: {
        f1: {image: require("../assets/food/rec/images.jpg"), iid: 0},
        f2: {image: require("../assets/food/rec/images (1).jpg"), iid: 1},
        f3: {image: require("../assets/food/rec/images (2).jpg"), iid: 2},
        f4: {image: require("../assets/food/rec/images (3).jpg"), iid: 3},
        f5: {image: require("../assets/food/rec/images (4).jpg"), iid: 4},
        f6: {image: require("../assets/food/rec/images (5).jpg"), iid: 5},
        f7: {image: require("../assets/food/rec/images (6).jpg"), iid: 6},
        f8: {image: require("../assets/food/rec/images (7).jpg"), iid: 7},
      },
      theItem: {},
      theShow: false,
    }
  },
  methods :{
    titleClick(index) {
      console.log(index);
      if (index == 0) {
          this.subCategoryDataList = {
          f1: {image: require("../assets/food/soup/download.jpg"), iid: 0},
        f2: {image: require("../assets/food/soup/images.jpg"),iid: 1},
        f3: {image: require("../assets/food/soup/images (1).jpg"), iid: 2},
        f4:{image: require("../assets/food/soup/images (2).jpg"), iid: 3},
        f5: {image: require("../assets/food/soup/images (3).jpg"),iid: 4},
        f6: {image: require("../assets/food/soup/images (4).jpg"), iid: 5},
        f7: {image: require("../assets/food/soup/images (5).jpg"), iid: 6},
        f8: {image: require("../assets/food/soup/images (6).jpg"), iid: 7},
        f9: {image: require("../assets/food/soup/images (7).jpg"), iid: 8},
        f10: {image: require("../assets/food/soup/images (8).jpg"), iid: 9},
        f11: {image: require("../assets/food/soup/images (9).jpg"), iid: 10},
        f12: {image: require("../assets/food/soup/images (10).jpg"), iid: 11},
        }
      }
      if (index == 1) {
        this.subCategoryDataList = {
          f1: {image: require("../assets/food/appetizer/download.jpg") , iid: 12},
        f2: {image: require("../assets/food/appetizer/download (1).jpg"), iid: 13},
        f3: {image: require("../assets/food/appetizer/download (2).jpg"), iid: 14},
        f4:{image: require("../assets/food/appetizer/download (3).jpg"), iid: 15},
        f5: {image: require("../assets/food/appetizer/images.jpg"), iid: 16},
        f6: {image: require("../assets/food/appetizer/images (1).jpg"), iid: 17},
        f7: {image: require("../assets/food/appetizer/images (2).jpg"), iid: 18},
        f8: {image: require("../assets/food/appetizer/images (3).jpg"), iid: 19},
        f9: {image: require("../assets/food/appetizer/images (4).jpg"), iid: 20},
        f10: {image: require("../assets/food/appetizer/images (5).jpg"), iid: 21},
        f11: {image: require("../assets/food/appetizer/images (6).jpg"), iid: 22},
        f12: {image: require("../assets/food/appetizer/images (7).jpg"), iid: 23},
        }
      } 
    },
    toCartBtn() {
      this.$router.push("/shopcart").catch(err => err);
      console.log(this.$store);
    },
    itemClick(item) {
      this.theItem = item;
      this.theShow = true;
      console.log(this.theItem);
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
.menu {
  background-color: #e2e0e0;
  height: calc(100vh - 49px);
  width: 23%;
  float: left;
}
.theimage {
  height: 400px;
  width: 400px;
}
</style>
