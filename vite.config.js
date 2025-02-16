import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tech-quiz/', // Deve ser igual ao nome do repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})