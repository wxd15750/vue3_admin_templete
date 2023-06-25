<template>
  <div class="box">
    <div class="bgcImg"></div>
    <div class="btn" @click="toIndex">点我返回首页</div>
    <!-- <img src="../../assets/images/error_images/404.png" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
let $router = useRouter()

// 点击返回首页
const toIndex = () => {
  $router.replace('/home')
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/error_images/404.jpg') no-repeat center;
  background-size: cover;
  overflow: hidden;
  .btn {
    width: 120px;
    height: 30px;
    line-height: 30px;
    background-color: #253a4a;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 30px;
    color: #fff;
  }
}
</style>
