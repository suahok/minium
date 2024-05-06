import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import importToCDN from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer'

const modules = [
  { name: 'vue', var: 'Vue', version: '3.4.23' },
  { name: 'vue-demi', var: 'VueDemi', version: '0.14.7' },
  { name: 'vue-router', var: 'VueRouter', version: '4.3.2' },
  { name: 'pinia', var: 'Pinia', version: '2.1.7' }
]

export default defineConfig({
  plugins: [
    vue(),
    unocss(),
    importToCDN({
      prodUrl: 'https://unpkg.com/{name}@{path}',
      generateScriptTag() {
        return { attrs: { crossorigin: true }, injectTo: 'head' }
      },
      modules: modules.map(item => {
        return { name: item.name, var: item.var, path: item.version }
      })
    }),
    visualizer({ open: false })
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  }
})
