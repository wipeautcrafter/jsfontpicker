document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#picker')
  if (!button) return

  const picker = new FontPicker(element, {
    font: 'Open Sans',
    defaultSubset: 'latin',
    defaultCategories: ['sans-serif', 'display'],
    language: 'en',
    verbose: true,
    variants: true,
    favourites: ['Open Sans'],
  })

  picker.on('open', () => console.log('Picker open!'))
  picker.on('pick', (font) => console.log('Picker pick!', font))
  picker.on('cancel', () => console.log('Picker cancel!'))
  picker.on('close', () => console.log('Picker close!'))
})
