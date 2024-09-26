import { googleFonts, systemFonts, type FontFamily } from '../data/fonts'

export class FontLoader {
  static #wrapper: HTMLElement
  static #cache = new Map<string, Promise<void>>()

  static loaded(family: string) {
    return this.#cache.has(family)
  }

  static async #appendStylesheet(url: string) {
    if (!this.#wrapper) {
      document.body.insertAdjacentHTML('beforeend', '<!-- FontPicker Fonts -->')
      this.#wrapper = document.createElement('div')
      document.body.appendChild(this.#wrapper)
    }

    const link = document.createElement('link')
    link.href = url
    link.rel = 'stylesheet'
    link.type = 'text/css'
    this.#wrapper.appendChild(link)
  }

  static async #loadGoogleFont(font: FontFamily) {
    const url = new URL('https://fonts.googleapis.com/css')
    const family = font.family + ':' + font.variants.join(',')
    url.searchParams.set('family', family)
    url.searchParams.set('display', 'swap')

    this.#appendStylesheet(url.toString())
    await document.fonts.load(`1em "${font.family}"`)
  }

  static async load(family: string) {
    let promise: Promise<void>

    const googleFont = googleFonts.find((font) => font.family === family)
    const systemFont = systemFonts.find((font) => font.family === family)

    if (googleFont) {
      promise = this.#loadGoogleFont(googleFont)
    } else if (systemFont) {
      throw new Error('System font loading is not implemented yet!')
    } else {
      throw new ReferenceError(`Font '${family}' does not exist!`)
    }

    this.#cache.set(family, promise)
    await promise
  }
}
