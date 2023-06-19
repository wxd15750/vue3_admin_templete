// 定义路由前缀
const acl_pre = '/acl_mannger'
// 暴露权限相关的路由
export const aclRouter = [
  {
    path: `${acl_pre}/user`,
    component: () => import('@/views/acl/user/index.vue'),
    meta: {
      title: '用户管理',
      hidden: false,
      icon: 'UserFilled',
    },
  },
  {
    path: `${acl_pre}/role`,
    component: () => import('@/views/acl/role/index.vue'),
    meta: {
      title: '角色管理',
      hidden: false,
      icon: 'Calendar',
    },
  },
  {
    path: `${acl_pre}/menulist`,
    component: () => import('@/views/acl/permission/index.vue'),
    meta: {
      title: '菜单管理',
      hidden: false,
      icon: 'UserFilled',
    },
  },
]
