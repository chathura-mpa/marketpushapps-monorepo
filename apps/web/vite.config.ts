import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@marketpushapps/shared': resolve(__dirname, '../../packages/shared/src'),
      '@marketpushapps/ui': resolve(__dirname, '../../packages/ui/src'),
      '@marketpushapps/utils': resolve(__dirname, '../../packages/utils/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
