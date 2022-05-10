import { defineConfig } from "vite"
import viteReact from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [viteReact()],
  build: {
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/(node_modules)/g.exec(id)) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        }
      }
    }
  }
})
