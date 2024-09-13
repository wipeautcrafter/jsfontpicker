import { googleFonts, type GoogleFont } from '../data/fonts'

export class Fonts {
  static #cache = new Map<string, Promise<void>>()

  static loaded(family: string) {
    return this.#cache.has(family)
  }

  static async #loadGoogleFont(font: GoogleFont) {
    const url = new URL('https://fonts.googleapis.com/css')
    const family = font.family + ':' + font.variants.join(',')
    url.searchParams.set('family', family)
    url.searchParams.set('display', 'swap')

    const link = document.createElement('link')
    link.href = url.toString()
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    await document.fonts.load('1em ' + font.family)
  }

  static async load(family: string) {
    let promise: Promise<void>

    const googleFont = googleFonts.find((font) => font.family === family)

    if (googleFont) {
      promise = this.#loadGoogleFont(googleFont)
    } else {
      throw new ReferenceError(`Font '${family}' does not exist!`)
    }

    this.#cache.set(family, promise)
    await promise
  }
}
