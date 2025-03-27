import FontPicker from '../src/index'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#sampleCanvas')!
  const ctx = canvas.getContext('2d')!

  document.querySelector<HTMLButtonElement>('#getFont1Btn')!.onclick = () => {
    console.log(picker4button.font)
  }

  document.querySelector<HTMLButtonElement>('#getFont2Btn')!.onclick = () => {
    console.log(picker4input.font)
  }

  document.querySelector<HTMLButtonElement>('#setFont1Btn')!.onclick = () => {
    picker4button.setFont('Quicksand', true)
  }

  document.querySelector<HTMLButtonElement>('#clearFont1Btn')!.onclick = () => {
    picker4button.clear()
  }

  document.querySelector<HTMLButtonElement>('#setFont2Btn')!.onclick = () => {
    const picker = document.querySelector<HTMLInputElement>('#pickerInput')!
    picker.value = 'Quicksand'
    picker.dispatchEvent(new Event('change'))
  }

  document.querySelector<HTMLButtonElement>('#destroy1Btn')!.onclick = () => {
    picker4button.destroy()
  }

  document.querySelector<HTMLButtonElement>('#destroy2Btn')!.onclick = () => {
    picker4input.destroy()
  }

  const picker4button = new FontPicker('#pickerButton', {
    variants: true,
    verbose: true,
    googleFonts: ['Pacifico', 'Open Sans', 'Poppins'],
  }).on('pick', (font) => {
    console.log(font)
    const $sample = document.querySelector<HTMLElement>('#sampleText')!
    if (!font) return

    $sample.style.fontFamily = font.family.name
    $sample.style.fontWeight = font.weight.toString()
    $sample.style.fontStyle = font.italic ? 'italic' : 'normal'
  })

  const picker4input = new FontPicker('#pickerInput', {
    //font: 'Open Sans',
    //defaultSubset: 'latin',
    //defaultCategories: ['sans-serif', 'display', 'handwriting'],
    language: 'nl',
    verbose: true,
    variants: true,
    favourites: ['Open Sans'],
  })
    .on('open', () => console.log('Picker open'))
    .on('pick', async (font) => {
      if (!font) {
        console.log('font clear')
        return
      }

      console.log('Picker pick', font, font.toId(), font.toString())
      const fontName = font.toString()

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.textBaseline = 'top'
      ctx.fillStyle = '#000'
      ctx.font = `2em ${fontName}`
      ctx.fillText(fontName + ' normal', 10, 0)

      await document.fonts.load(`700 1em "${fontName}"`)
      ctx.font = `700 2em ${fontName}`
      ctx.fillText(fontName + ' bold', 10, 50)

      await document.fonts.load(`900 italic 1em "${fontName}"`)
      ctx.font = `900 italic 2em ${fontName}`
      ctx.fillText(fontName + ' extrabold italic ', 10, 100)
    })
    .on('cancel', () => console.log('Picker cancel'))
    .on('close', () => console.log('Picker close'))
})
