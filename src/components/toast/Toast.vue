<template>
  <div class="toast">
    <div class="theimage">
      <img :src="theItem.image">
    </div>
    <div>
      {{theItem.describe}}
    </div>
    <div>
      <button @click="addToCart">Add to Cart</button>
    </div>
    <div>
      <button @click="canBtn">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      item: {},
    };
  },
  props: {
    theItem: {
      type: Object,
      default() {
        return {};
      }
    },
    theShow: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    canBtn() {
      this.$emit("toastBtn", false);
    },
    addToCart() {
      const product = {};
      product.title = this.theItem.title;
      product.image = this.theItem.image;
      product.price = this.theItem.price;
      product.iid = this.theItem.iid;
      console.log(product);
      this.$store.dispatch("addCart", product).then((res) => {
        this.$emit("toastBtn", false);
      });
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 600px;
  width: 600px;
  transform: translate(-50%, -50%);
  color: white;
  padding: 8px 10px;
  background-color: rgba(155, 139, 139, 0.7);
  z-index: 999;
}
</style>
