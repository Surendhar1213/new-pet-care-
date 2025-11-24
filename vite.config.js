import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/', // Ensure base path is root for Netlify
  server: {
    host: '0.0.0.0', // Allow access from other devices on the network
    port: 5173,
    strictPort: false,
  },
  build: {
    // Ensure _redirects file is copied to dist
    copyPublicDir: true,
  },
})

