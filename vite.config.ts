import { resolve } from 'path'
import { defineConfig } from 'vite'

import dts from 'vite-plugin-dts'
import viteHTML from './plugins/viteHTML'

export default defineConfig({
  server: {
    open: '/dev/',
    allowedHosts: ['cure']
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'FontPicker',
      fileName: 'fontpicker',
      formats: ['iife', 'es'],
    },
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap',
        },
        assetFileNames: 'fontpicker.[ext]',
      },
    },
    minify: false,
    cssMinify: false,
  },
  plugins: [dts({ rollupTypes: true }), viteHTML()],
})
