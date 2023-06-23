import products from '@/lang/product'

// 商品相关的路由前缀
const product = '/product'
export const productRouter = [
  {
    path: `${product}/attr`,
    component: () => import('@/views/product/attr/index.vue'),
    meta: {
      title: products.attr,
      hidden: false,
      icon: 'UserFilled',
    },
  },
  {
    path: `${product}/sku`,
    component: () => import('@/views/product/sku/index.vue'),
    meta: {
      title: products.sku,
      hidden: false,
      icon: 'Calendar',
    },
  },
  {
    path: `${product}/spu`,
    component: () => import('@/views/product/spu/index.vue'),
    meta: {
      title: products.spu,
      hidden: false,
      icon: 'UserFilled',
    },
  },
  {
    path: `${product}/produ`,
    component: () => import('@/views/product/attr/index.vue'),
    meta: {
      title: products.produ,
      hidden: false,
      icon: 'UserFilled',
    },
  },
]
