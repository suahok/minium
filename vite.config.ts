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
        manualChunks(chunkAlias) {
          if (/(node_modules)/g.exec(chunkAlias)) {
            return chunkAlias.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        },
        entryFileNames: "scripts/[name].[hash].js",
        chunkFileNames: "scripts/[name].[hash].js",
        assetFileNames({ name }) {
          const extname = name?.toString().split(".")[1]
          if (extname === "css") {
            return "styles/[name].[hash].[ext]"
          } else {
            return "[ext]/[name].[hash].[ext]"
          }
        }
      }
    }
  }
})
