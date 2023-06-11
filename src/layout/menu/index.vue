<template>
  <div>
    <h1>{{menuList}}</h1>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name:''
  })
</script>
<script lang="ts" setup>
// 接受父组件传递的全部路由数据
defineProps(['menuList'])
</script>

<style lang="scss" scoped>
</style>
