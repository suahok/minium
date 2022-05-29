import { resolve } from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import viteReact from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [viteReact(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
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
