// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由器
const router = createRouter({
  // 设置路由模式
  history: createWebHashHistory(),
  routes: [
    {
      // 登录
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'Login',
    },
    {
      // 首页
      path: '/',
      component: () => import('@/views/home/index.vue'),
      name: 'Home',
    },
    {
      // 404页面
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },
    {
      // 任意路由
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any',
    },
  ],
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
