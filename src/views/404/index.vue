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
  background: url('@/assets/images/error_images/404.jpg') no-repeat center;
  background-size: cover;
}
</style>
