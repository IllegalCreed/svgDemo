import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    UnpluginSvgComponent({
      iconDir: [fileURLToPath(new URL('./src/icons', import.meta.url))],
      dts: true,
      prefix: 'icon',
      vueVersion: 3,
      treeShaking: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
