import { resolve } from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import type { Plugin } from "vite"
import viteReact from "@vitejs/plugin-react"
import viteCompression from "vite-plugin-compression"

export default defineConfig({
  plugins: [viteReact(), splitVendorChunkPlugin(), configCompressPlugin("gzip")],
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
        // manualChunks(chunkId) {
        //   if (chunkId.includes("node_modules")) {
        //     return chunkId.split("node_modules/")[1].split("/")[0].toString()
        //   }
        // },
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

function configCompressPlugin(compress: "gzip" | "brotli" | "none", deleteOriginFile = false): Plugin | Plugin[] {
  const compressList = compress.split(",")
  const plugins: Plugin[] = []

  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        threshold: 1024,
        deleteOriginFile
      })
    )
  }

  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        threshold: 1024,
        deleteOriginFile
      })
    )
  }

  return plugins
}
