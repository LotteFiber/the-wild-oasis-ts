import react from '@vitejs/plugin-react'

import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'src/data'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
