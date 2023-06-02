import { createApp } from 'vue'
// @ts-ignore
import App from '@/App.vue'

// 引入elements-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
