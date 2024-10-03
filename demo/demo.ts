import type { FontPicker } from '../src/custom/FontPicker'
import '../src/index'

document.addEventListener('DOMContentLoaded', () => {
  const picker = document.querySelector<FontPicker>('#picker')
  if (!picker) return

  picker.configure({
    font: 'Open Sans:800i',
    defaultSubset: 'latin',
    defaultCategories: ['sans-serif', 'display'],
    language: 'en',
    verbose: true,
  })

  picker.addEventListener('open', () => console.log('Picker open!'))
  picker.addEventListener('pick', () => console.log('Picker pick!', picker.font))
  picker.addEventListener('cancel', () => console.log('Picker cancel!'))
  picker.addEventListener('close', () => console.log('Picker close!'))
})
