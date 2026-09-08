import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain mdev.thermalunderground.org serves from root.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
