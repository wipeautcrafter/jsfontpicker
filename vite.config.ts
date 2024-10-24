import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {
    open: '/demo/',
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'window',
      fileName: 'fontpicker',
      formats: ['iife', 'es'],
    },
    minify: true,
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        extend: true,
        globals: {
          bootstrap: 'bootstrap',
        },
        assetFileNames: 'fontpicker.[ext]',
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
