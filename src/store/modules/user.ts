// 创建用户相关的小仓库
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
import { loginType } from '@/api/user/type'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'
import { UserState } from './userType'
import { constantRoute } from '@/router/router'

const useUserStore = defineStore('User', {
  state(): UserState {
    return {
      token: '' || GET_TOKEN(),
      // 用户信息相关
      avatar: '',
      buttons: [],
      name: '',
      roles: [],
      routes: [],
      menuRoutes: constantRoute,
    }
  },
  actions: {
    // 设置token
    async userLogin(loginForm: loginType) {
      const res = await reqLogin(loginForm)
      // console.log(res)
      if (res.code === 20000) {
        this.token = res.data.token
        // 将token存储到本地
        SET_TOKEN(res.data.token)
        return 'ok'
      }
    },

    // 获取用户信息
    async userInfo() {
      const res = await reqUserInfo()
      // console.log(res)
      if (res.code === 20000) {
        this.avatar = 'https://img.zcool.cn/community/010a8959717638a8012193a3b02a14.gif'
        this.buttons = res.data.buttons
        this.name = res.data.name
        this.roles = res.data.roles
        this.routes = res.data.routes
      }
    },
    // 清空用户信息
    async resetUserInfo() {
      this.token = ''
      this.avatar = ''
      this.buttons = []
      this.name = ''
      this.roles = []
      this.routes = []
      REMOVE_TOKEN()
    },
    // 用户退出登录
    async userLayout() {
      await reqLogout()
      // console.log(res)
      // if ((res).code === 20000) {
      this.resetUserInfo()
      return 'ok'
      // }
    },
  },
  getters: {},
})

export default useUserStore
