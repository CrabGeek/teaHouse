<template>
  <div>
    <div class="upper">
      <span class="upper-text1">We have received your order Thank you!</span>
      <span class="upper-text2">Your order number: </span>
      <span class="upper-text3">#HSIOH-277WQO-SADH</span>
    </div>
    <div class="middle">
      <span class="middle-text">Estimate time for your order to be ready:</span>
      <img src="../../assets/Rectangle 13.png" class="middle-img">
    </div>
    <div class="bottom">
      <img src="../../assets/Rectangle 15.png" class="bottom-img1" @click="toCart">
      <img src="../../assets/Rectangle 14.png" class="bottom-img2" @click="toHome">
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkpage",
  methods: {
    toCart() {
      this.$router.push("/shopcart").catch(err => err);
    },
    toHome() {
      this.$router.push("/").catch(err => err);
    }
  }

}
</script>

<style scoped>
.upper-text1 {
  position: absolute;
  width: 1157px;
  height: 91px;
  left: 35px;
  top: 55px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  text-align: center;

  color: #000000;
}
.upper-text2 {
  position: absolute;
  width: 614px;
  height: 70px;
  left: 90px;
  top: 179px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  text-align: center;

  color: #000000;
}
.upper-text3 {
  position: absolute;
  width: 1043px;
  height: 67px;
  left: 752px;
  top: 183px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  text-align: center;

  color: #000000;
}
.middle-text {
  position: absolute;
  width: 692px;
  height: 113px;
  left: 35px;
  top: 314px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  text-align: center;

  color: #000000;
}
.middle-img {
  position: absolute;
  width: 413px;
  height: 75px;
  left: 861px;
  top: 342px;

}
.bottom-img1 {
  position: absolute;
  width: 413px;
  height: 68px;
  left: 1364px;
  top: 796px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #C4C4C4;
}
.bottom-img2 {
  position: absolute;
  width: 413px;
  height: 67px;
  left: 1364px;
  top: 915px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #C4C4C4;
}
</style>