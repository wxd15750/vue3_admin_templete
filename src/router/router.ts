// 对外暴露配置路由（常量路由）
export const constantRoute = [
  // 登录路由
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
  // 首页路由
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
    redirect: '/home',
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
  // 数据大屏路由
  {
    path: '/big_screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据可视化大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  // 权限管理
  {
    path: '/acl_mannger',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Calendar',
    },
    children: [
      {
        path: '/acl_mannger/user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl_mannger/user',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
      {
        path: '/acl_mannger/user',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Present',
        },
      },
    ],
  },
  // 404路由
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
  // 任意路由
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
