import FontPicker from '../src/index'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector<HTMLButtonElement>('#picker')
  if (!button) return

  const canvas = document.querySelector('#canvas'), ctx = canvas.getContext('2d');

  const picker = new FontPicker(button, {
    font: 'Open Sans',
    defaultSubset: 'latin',
    defaultCategories: ['sans-serif', 'display', 'handwriting'],
    language: 'en',
    verbose: true,
    variants: false,
    favourites: ['Open Sans'],
  })

  picker.on('open', () => console.log('Picker open'))
  picker.on('pick', async (font) => {
    console.log('Picker pick', font, font.toId(), font.toString())

    const fontName = font.toString()

    // await Promise.all([
    //   document.fonts.load(`700 1em "${fontName}"`),
    //   document.fonts.load(`900 italic 1em "${fontName}"`)
    // ])

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.textBaseline = 'top'
    ctx.fillStyle = '#fff'
    ctx.font = `2em ${fontName}`
    ctx.fillText(fontName + ' normal', 10, 0)

    await document.fonts.load(`700 1em "${fontName}"`);
    ctx.font = `700 2em ${fontName}`
    ctx.fillText(fontName + ' bold', 10, 50)

    await document.fonts.load(`900 italic 1em "${fontName}"`);
    ctx.font = `900 italic 2em ${fontName}`
    ctx.fillText(fontName + ' extrabold italic ', 10, 100)
  }
)
  picker.on('cancel', () => console.log('Picker cancel'))
  picker.on('close', () => console.log('Picker close'))
})
