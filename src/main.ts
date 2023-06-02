import { createApp } from 'vue'

import App from '@/App.vue'

// 引入elements-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 定义全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue';
// 引入自定义插件对象：注册整个项目的全局组件
// @ts-ignore
import gloalComponent from '@/components'
//svg插件需要配置代码
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})

// 全局注册 
// app.component('SvgIcon',SvgIcon)
// 安装自定义插件
app.use(gloalComponent)

app.mount('#app')
