import { googleFonts, systemFonts } from '../data/fonts'
import { FontFamily } from './FontFamily'
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

  static async #loadExtraFont(font: FontFamily) {
    const fontFace = new FontFace(font.name, `url(${font.url})`)

    document.fonts.add(await fontFace.load())
    await document.fonts.load(`1em "${font.name}"`)
  }

  static async load(font: string | FontFamily) {
    const family = font instanceof FontFamily ? font : null
    const name = font instanceof FontFamily ? font.name : font

    let promise = this.#cache.get(name)

    if (!promise) {
      const systemFont = systemFonts.find((sf) => sf.name === name)
      const googleFont = googleFonts.find((gf) => gf.name === name)

      if (family && family.url) {
        promise = this.#loadExtraFont(family)
      } else if (systemFont) {
        promise = Promise.resolve()
      } else if (googleFont) {
        promise = this.#loadGoogleFont(googleFont)
      } else {
        console.error(`Could not load font ${name}!`)
        promise = Promise.resolve()
      }

      this.#cache.set(name, promise)
    }

    await promise
  }
}
