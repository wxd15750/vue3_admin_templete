// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import loginApi from '@/api/user/index'
// 引入类型
import type { loginFormType } from '@/api/user/type'
// 创建用户小仓库
const useUserStore = defineStore('User', {
  state: () => {
    return {}
  },
  // 异步逻辑
  actions: {
    // 用户登录的方法
    async userLogin(data:loginFormType) {
      let res = await loginApi.reqLogin(data)
      console.log(res);
      
    },
  },
  getters: {},
})

// 对外暴漏获取小仓库的方法
export default useUserStore
