<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" style="border-radius: 50%" />
    <p>{{ setting.title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Logo',
})
</script>
<script lang="ts" setup>
// 引入设置标题于logo的配置文件
import setting from '@/setting'
import { set } from 'nprogress'
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
