<template>
  <div class="box">
    <div class="bgcImg"></div>
    <!-- <img src="../../assets/images/error_images/404.png" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
let $router = useRouter()
const goHome = () => {
  $router.push('/home')
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background: url('@/assets/images/error_images/404.jpg') no-repeat center;
  background-size: cover;

  // .bgcImg {
  //   width: 800px;
  //   height: 400px;
  //   margin: auto;
  //   background: url('@/assets/images/error_images/404.jpg') no-repeat center;
  //   background-size: cover;
  // }
  // img {
  //   width: 800px;
  //   // height: 400px;
  // }
}
</style>
