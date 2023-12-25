/// <reference types="vite/client" />
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component = DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    theme: TinyThemeTool
  }
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_ROUTE: string
  readonly VITE_CESIUM_BASE_URL: string
  readonly VITE_MOCK_ENABLED: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
