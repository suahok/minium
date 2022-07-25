import { resolve } from "path"
import { defineConfig } from "vite"
import viteReact from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      external: [""],
      output: {
        manualChunks(chunkId) {
          if (chunkId.includes("node_modules")) {
            return chunkId.split("node_modules/")[1].split("/")[0].toString()
          }
        },
        entryFileNames: "script/[name].[hash].js",
        chunkFileNames: "script/[name].[hash].js",
        assetFileNames({ name }) {
          const extname = name?.toString().split(".")[1]
          if (extname === "css") {
            return "styles/[name].[hash].[ext]"
          } else {
            return "assets/[ext]/[name].[hash].[ext]"
          }
        }
      }
    }
  }
})
