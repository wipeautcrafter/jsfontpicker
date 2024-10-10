import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'FontPicker',
      fileName: 'fontpicker',
      formats: ['iife', 'es'],
    },
    minify: true,
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
