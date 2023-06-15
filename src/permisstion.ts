// 路由鉴权：鉴权。项目当中路由能不能被权限的设置（某一个路由什么条件下可以访问、什么条件下不可以访问）
import router from '@/router'

// 用户相关的小仓库，通过token判断用户是否登录,必须先引入大仓库
import pinia from './store'
import useUserStore from './store/modules/user'
// 引入setting组件
import setting from './setting'
// 引入进度条相关的插件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 关闭小圆圈
nprogress.configure({ showSpinner: false })

let userStore = useUserStore(pinia)
// 路由鉴权
/**
 * 1. 用户未登录，可以访问login，其余路由均不可访问
 * 2. 用户登录成功，不能访问登录页（指向首页），其余路由都可以访问
 * 3.
 */

// 全局守卫：项目当中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 标题
  document.title = setting.title + to.meta.title
  // to:将要访问的路由
  // from: 从那个路由而来
  // next: 路由的放行函数
  nprogress.start()
  // 获取token判断用户是否登录
  let token = userStore.token
  // 获取用户的名字
  let { username, avatar } = userStore
  if (token) {
    // 登录成功访问login,不能访问指向首页
    if (to.path == '/login') {
      next({ path: '/' })
      nprogress.done()
    } else {
      // 登录成功访问其他路由
      if (username) {
        next()
      } else {
        // 如果没有用户信息，在守卫中发请求获取到用户信息在放行
        try {
          // 获取用户信息
          await userStore.userInfo()
          next()
          nprogress.done()
        } catch (error) {
          // token过期
          // 用户手动更改了本地存储token
          // 退出登录，清除用户相关的数据
          userStore.userLayout()
          next({ path: '/login', query: { redirect: to.path } })
          nprogress.done()
        }
      }
    }
  } else {
    // 用户未登录
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
  next()
})

// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
