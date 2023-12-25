import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { defineConfig, splitVendorChunkPlugin, loadEnv, BuildOptions, ServerOptions } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { insertHtml, h } from 'vite-plugin-insert-html'
import { viteMockServe } from 'vite-plugin-mock'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, 'env', 'VITE_')
  const { VITE_BASE_URL, VITE_CESIUM_BASE_URL, VITE_MOCK_ENABLED, VITE_API_URL } = env
  const base = VITE_BASE_URL
  const IS_PROD = command === 'build'
  const CESIUM_SCRIPT_SRC = `${VITE_BASE_URL}${VITE_CESIUM_BASE_URL}Cesium.js`
  const IS_PROD_ENABLED = IS_PROD && VITE_MOCK_ENABLED === 'true'

  const plugins = [
    vue(),
    unocss(),
    splitVendorChunkPlugin(),
    viteExternalsPlugin({ cesium: 'Cesium' }),
    insertHtml({ head: [h('script', { src: CESIUM_SCRIPT_SRC })] }),
    viteMockServe({
      mockPath: './mock',
      prodEnabled: IS_PROD_ENABLED,
      logger: true,
      injectCode: `
        import { setupProdMockServer } from './mock-prod-server';
        setupProdMockServer();
      `
    }),
    Components({ resolvers: [AntDesignVueResolver({ importStyle: false })] })
  ]

  if (IS_PROD) {
    const CESIUM_COPY_FROM_PATH = 'node_modules/cesium/Build/CesiumUnminified/'
    const CESIUM_COPY_TO_PATH = 'libs/cesium/'
    const CESIUM_DIR_LIST = ['Assets', 'ThirdParty', 'Workers', 'Widgets']
    const CESIUM_STATIC = CESIUM_DIR_LIST.map(dirName => ({
      src: `${CESIUM_COPY_FROM_PATH}${dirName}/*`,
      dest: `${CESIUM_COPY_TO_PATH}${dirName}`
    }))
    const CESIUM_ENTRY = { src: `${CESIUM_COPY_FROM_PATH}Cesium.js`, dest: CESIUM_COPY_TO_PATH }
    plugins.push(
      viteStaticCopy({
        targets: [CESIUM_ENTRY, ...CESIUM_STATIC]
      })
    )
  }

  const resolve = {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@cesium': VITE_CESIUM_BASE_URL
    }
  }

  const build: BuildOptions = {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(moduleId) {
          if (moduleId.includes('node_modules')) {
            const module = moduleId.split('node_modules/')[1].split('/')[0]
            return module.replace('@', '').toString()
          }
        }
      }
    }
  }

  const server: ServerOptions = {
    proxy: {
      [VITE_API_URL]: {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }

  return { mode, base, envDir: 'env', plugins, resolve, build, server }
})
