<template>
  <div>
    <el-card>
      <h1>我是首页</h1>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
})
</script>
<script lang="ts" setup>
// import { onMounted } from 'vue'
// // 引入仓库
// import useUserStore from '@/store/modules/user'
// // 获取仓库
// let userStore = useUserStore()
// // 首页挂载完获取用户信息
// onMounted(() => {
//   userStore.userInfo()
// })
</script>

<style lang="scss" scoped>
.box-card2 {
  margin-top: 30px;
}
</style>
