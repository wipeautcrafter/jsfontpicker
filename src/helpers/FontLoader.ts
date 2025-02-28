import { googleFonts } from '../data/fonts'
import type { FontFamily } from './FontFamily'

export class FontLoader {
  static #cache = new Map<string, Promise<void>>()

  static loaded(name: string) {
    return this.#cache.has(name)
  }

  static async #appendStylesheet(url: string) {
    const $link = document.createElement('link')
    $link.href = url
    $link.rel = 'stylesheet'
    $link.type = 'text/css'
    document.head.append($link)
  }

  static async #loadGoogleFont(font: FontFamily) {
    const url = new URL('https://fonts.googleapis.com/css')
    const name = font.name + ':' + font.variants.join(',')
    url.searchParams.set('family', name)
    url.searchParams.set('display', 'swap')

    this.#appendStylesheet(url.toString())
    await document.fonts.load(`1em "${font.name}"`)
  }

  static async load(name: string) {
    let promise = this.#cache.get(name)

    if (!promise) {
      const googleFont = googleFonts.find((font) => font.name === name)

      if (googleFont) {
        promise = this.#loadGoogleFont(googleFont)
      } else {
        // system and extra fonts are always loaded!
        promise = Promise.resolve()
      }

      this.#cache.set(name, promise)
    }

    await promise
  }
}
