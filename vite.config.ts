import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/History_Project",
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
})
