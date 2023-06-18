<template>
  <el-card>
    <div class="box">
      <!-- <img
        class="avatar"
        src="https://img.zcool.cn/community/010a8959717638a8012193a3b02a14.gif"
        alt=""
        srcset=""
      /> -->
      <img class="avatar" :src="userStore.avatar" alt="" srcset="" />
      <div class="bottom">
        <h3 class="title">{{ getTime() }} 好呀 {{ userStore.name }}</h3>
        <p class="subtitle">{{ setting.title }}</p>
      </div>
    </div>
  </el-card>
  <div class="bgcImg">
    <svg-icon name="welcome" width="600px" height="400px"></svg-icon>
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
// 引入时间相关的文件
import { getTime } from '@/utils/timer'
// 引入setting文件
import setting from '@/setting'
// 引入仓库
import useUserStore from '@/store/modules/user'
// 获取仓库
let userStore = useUserStore()
// // 首页挂载完获取用户信息
// onMounted(() => {
//   userStore.userInfo()
// })
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .bottom {
    margin-left: 20px;
    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }
  }
  .subtitle {
    font-style: italic;
    color: #76cf86;
  }
}
.bgcImg {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
</style>
