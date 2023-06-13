// 对外暴露配置路由（常量路由）
export const constantRoute = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true, // true为隐藏，false为不隐藏
      icon: 'ChatSquare',
    },
  },
  {
    // 首页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Home',
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'User',
        },
      },
    ],
  },
  {
    // 404页面
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'SwitchButton',
    },
  },
  {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Promotion',
    },
  },
]
