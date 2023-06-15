<template>
  <div class="login_container">
    <!-- 使用element的山歌系统 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginFrom" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到登录页</h2>
          <el-form-item prop="username">
            <el-input type="text" :prefix-icon="User" v-model="loginFrom.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginFrom.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
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
import { useRouter } from 'vue-router'
// 或去当前时间的函数
import { getTime } from '@/utils/timer'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
// 第一种方法：通过ref去定义数据
// const username = ref('')
// const password = ref('')
// 第二种：通过reactive去定义数据
const loginFrom = reactive({ username: '', password: '' })
// loadin效果
const loading = ref(false)
// 获取路由器
const $router = useRouter()

// 自定义校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  // rule即为数组的校验对象
  // value 即为表单元素的文本内容
  // callback 是一个函数，如果符合条件callback放行通过即可，如果不符合条件callback方法，注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少为5位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6 && value.length <= 15) {
    callback()
  } else {
    callback(new Error('密码长度至少为6位'))
  }
}

// 定义表单校验的配置对象，表单的单个校验
const rules = {
  username: [
    // { required: true, message: '用户名不能为空', trigger: 'blur' },
    // { required: true, min: 6, max: 10, message: '账号的长度至少六位', trigger: 'change' },
    // 自定义校验规则
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, message: '密码不能为空', trigger: 'blur' },
    // { required: true, min: 6, max: 15, message: '密码的长度至少六位', trigger: 'change' },
    { trigger: 'change', validator: validatorPassword },
  ],
}

// 获取表单组件
const loginForms = ref()

// 去登陆
const login = async () => {
  // 表单的最终校验
  // 保证所有的表单组件都通过才发请求
  const result = await loginForms.value.validate()

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
      title: `HI,${getTime()}好 `,
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
