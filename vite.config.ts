import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AR-on-model-viewer/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three'; // three.js を専用のJSファイルに分離
            }
            if (id.includes('model-viewer')) {
              return 'model-viewer'; // model-viewer を専用のJSファイルに分離
            }
            return 'vendor'; // その他のライブラリをまとめる
          }
        }
      }
    },
  chunkSizeWarningLimit: 1000, // 1MB に変更（デフォルト500KB）
  }
});
