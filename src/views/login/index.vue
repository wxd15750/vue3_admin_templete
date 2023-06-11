<template>
  <div class="login_container">
    <!-- 使用element的山歌系统 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到登录页</h2>
          <el-form-item>
            <el-input type="text" :prefix-icon="User" v-model="loginFrom.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginFrom.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <!-- 登录的表单 -->
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
})
</script>
<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
// 收集表单数据
import { reactive, ref } from 'vue'
// 消息提示
import { ElNotification } from 'element-plus'
// 导入路由
import {useRouter} from 'vue-router'
// 引入用户相关的小仓库
import useUserStore from '@/store/user'
const userStore = useUserStore()
// 第一种方法：通过ref去定义数据
// const username = ref('')
// const password = ref('')
// 第二种：通过reactive去定义数据
const loginFrom = reactive({ username: 'admin', password: '111111' })
// loadin效果
const loading = ref(false)
// 获取路由器
const $router = useRouter()
// 去登陆
const login = async () => {
  // 开启loading加载效果
  loading.value = true
  // 1.通知仓库发请求
  // 2.请求成功->首页展示数据
  // 3.请求失败-> 弹出登录失败的消息提示
  try {
    // 保证登录成功
    await userStore.userLogin(loginFrom)
    $router.push('/')
    ElNotification({
      // title: 'success',
      message: '登录成功',
      type: 'success',
    })
    loading.value = false

  } catch (error) {
    ElNotification({
      // title: 'error',
      message: (error as Error).message,
      type: 'error',
    })
    loading.value = false

  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: #fff;
    }
    h2 {
      font-size: 20px;
      color: #fff;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
