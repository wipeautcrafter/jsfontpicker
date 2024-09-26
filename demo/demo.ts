import type { FontPicker } from '../src/custom/FontPicker'
import '../src/index'

document.addEventListener('DOMContentLoaded', () => {
  const picker = document.querySelector<FontPicker>('#picker')
  if (!picker) return

  picker.configure({
    font: 'Open Sans:900',
    defaultSubset: 'latin',
    defaultCategories: ['sans-serif', 'display'],
    language: 'en',
    verbose: true,
  })
})
