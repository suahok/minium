import { defineConfig } from "vite"
import viteReact from "@vitejs/plugin-react"
import * as path from "path"

export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src")
    }
  },
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
