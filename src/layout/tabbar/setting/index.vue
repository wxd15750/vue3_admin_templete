<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>

  <el-popover placement="bottom" title="主题设置" :width="260" trigger="hover">
    <!-- 放置表单组件 -->
    <el-form>
      <el-from-item label="主题颜色">
        <el-color-picker v-model="color" size="small" show-alpha :predefine="predefineColors" />
      </el-from-item>
      <el-from-item label="暗黑模式">
        <el-switch
          v-model="dark"
          size="small"
          class="mt-2"
          style="margin-left: 24px"
          inline-prompt
          active-icon="MoonNight"
          inactive-icon="Sunny"
          @change="changeDark"
        />
      </el-from-item>
    </el-form>

    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>

  <img :src="avatar" style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ username }}123
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="layout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Setting',
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'

// 获取组件的小仓库
import useLayoutSettingStore from '@/store/modules/setting'
// 引入路由器
import { useRouter, useRoute } from 'vue-router'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
const layoutSettingStore = useLayoutSettingStore()
const userStore = useUserStore()
const { username, avatar } = userStore
// 获取路由器对象
const $router = useRouter()
const $route = useRoute()
// 点击刷新的方法
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}
// 点击全屏的方法
const fullScreen = () => {
  // DOM对象的一个属性：可以用来判断当前是不是全屏模式[全屏：true,不是全屏:false]
  let full = document.fullscreenElement
  // 切换为全屏模式
  if (!full) {
    // 文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏模式
    document.exitFullscreen()
  }
}

// 退出登陆
const layout = () => {
  // 需要向服务器发请求[退出登陆接口]
  // 清空用户相关的信息
  // 跳转到登录页
  userStore.userLayout()
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  })
}

// 颜色组件的数据

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

// 收集开关的数局
let dark = ref<boolean>(false)
// switch开关的change事件
const changeDark = () => {
  // 获取HTML的根节点
  let html = document.documentElement
  // 判断HTML标签是否有类名dark
  dark.value ? (html.className = 'dark') : (html.className = '')
}
</script>

<style lang="scss" scoped></style>
