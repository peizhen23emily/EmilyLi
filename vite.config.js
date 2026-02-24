import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/EmilyLi/',
  plugins: [react()],
  server: {
    port: 3000
  }
})