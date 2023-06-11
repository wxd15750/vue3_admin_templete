// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入类型
import type { loginFormType } from '@/api/user/type'
// 引入接口
import { reqLogin } from '@/api/user'
// 导入本地存储
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import type { UserState } from './userType'
// 引入路由（常量路由）
import { constantRoute } from '@/router/router'
// 创建用户小仓库
const useUserStore = defineStore('User', {
  // 存储数据的
  state: (): UserState => {
    return {
      token: '' || GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoute, // 仓库存储生成菜单需要数组（路由）
    }
  },
  // 异步逻辑
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormType) {
      // 登录请求
      const res = await reqLogin(data)
      // 登录请求：成功200 -> token
      //          失败201 -> 登录失败错误提示信息
      if (res.code === 200) {
        // 使用pinia存储token
        this.token = res.data.token as string
        // 将获取到的token设置到本地
        SET_TOKEN(res.data.token as string)
        // 保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
      // console.log(res.data.token);
    },
  },
  getters: {},
})

// 对外暴漏获取小仓库的方法
export default useUserStore
