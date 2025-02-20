import { resolve } from 'path'
import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'
import viteHTML from './plugins/viteHTML'

export default defineConfig({
  server: {
    open: '/dev/',
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'FontPicker',
      fileName: 'fontpicker',
      formats: ['iife', 'es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'fontpicker.[ext]',
      },
    },
    minify: false,
    cssMinify: false,
  },
  plugins: [dts({ rollupTypes: true }), viteHTML()],
})
