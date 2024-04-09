import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入Vite版本mock插件
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 引入Vite版本mock插件
    viteMockServe({
      // mock文件所在目录 相对于项目根目录
      mockPath: './src/mock',
      enable: true, // 设置为true即启用mock功能，false则关闭
      watchFiles: true, // 设置为true即监听mock文件变动并自动重启服务
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
