<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  background-image: url("./assets/home.png");
  background-size: 100%;
  background-repeat: repeat;
}
</style>
