import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

//引入svg需要用到插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      // 配置svg图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // @ts-expect-error
        localEnabled: (command === 'build') | 'serve', //保证开发阶段可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // 样式全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    // 配置代理服务器
   //代理跨域
   server: {
    proxy: {
      [env.VITE_APP_BASE_API]: {
        //获取数据的服务器地址设置
        target: env.VITE_SERVE,
        //需要代理跨域
        changeOrigin: true,
        //路径重写
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
  }
})
