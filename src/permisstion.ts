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
import { requestListMap } from './utils/request'

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
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title} - ${to.meta.title}`
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数

  nprogress.start()
  //获取token,去判断用户登录、还是未登录
  let token = userStore.token
  //获取用户名字
  let username = userStore.name

  requestListMap.forEach(({ pathname, cancel }, key) => {
    if (pathname !== to.path) {
      cancel()
      requestListMap.delete(key)
    }
  })

  //用户登录判断
  if (token) {
    //登录成功,访问login,不能访问,指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      //登录成功访问其余六个路由(登录排除)
      //有用户信息
      if (username) {
        //放行
        next()
      } else {
        //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
        try {
          //获取用户信息
          await userStore.userInfo()
          //放行
          //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
          next({ ...to })
        } catch (error) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          await userStore.userLayout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    //用户未登录判断
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
