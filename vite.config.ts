import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  }
})
