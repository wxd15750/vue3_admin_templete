import { createApp } from 'vue'
import App from '@/App.vue'

// 引入elements-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 定义全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue';
// 引入自定义插件对象：注册整个项目的全局组件
import gloalComponent from '@/components'

// 引入路由
import router from '@/router'

//svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入pinia仓库
import pinia from './store'

// 清除默认样式
import '@/styles/index.scss'

// 引入路由鉴权的文件
import '@/permisstion'
// 引入暗黑模式的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)
// 国际化
app.use(ElementPlus, {
  locale: zhCn,
})

// 注册路由
app.use(router)
// 使用pinia
app.use(pinia)

// 全局注册
// app.component('SvgIcon',SvgIcon)
// 安装自定义插件
app.use(gloalComponent)

app.mount('#app')
