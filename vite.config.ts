import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import packageJson from './package.json'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: '@alitajs/vdform',
      // the proper extensions will be added
      fileName: '@alitajs/vdform',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // @ts-ignore
      external: ['vue', ...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {  // 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./src"), // path记得引入
      // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  }
})
