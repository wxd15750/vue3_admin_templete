// 商品相关的路由前缀
const product = '/product'
export const productRouter = [
  {
    path: `${product}/attr`,
    component: () => import('@/views/product/attr/index.vue'),
    meta: {
      title: '商品属性',
      hidden: false,
      icon: 'UserFilled',
    },
  },
  {
    path: `${product}/sku`,
    component: () => import('@/views/product/sku/index.vue'),
    meta: {
      title: 'SKU管理',
      hidden: false,
      icon: 'Calendar',
    },
  },
  {
    path: `${product}/spu`,
    component: () => import('@/views/product/spu/index.vue'),
    meta: {
      title: 'SPU管理',
      hidden: false,
      icon: 'UserFilled',
    },
  },
  {
    path: `${product}/pro`,
    component: () => import('@/views/product/attr/index.vue'),
    meta: {
      title: '产品属性',
      hidden: false,
      icon: 'UserFilled',
    },
  },
]
