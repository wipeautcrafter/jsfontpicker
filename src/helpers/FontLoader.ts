import { googleFonts, systemFonts } from '../data/fonts'
import type { FontFamily } from './FontFamily'

export class FontLoader {
  static #wrapper: HTMLElement
  static #cache = new Map<string, Promise<void>>()

  static loaded(name: string) {
    return this.#cache.has(name)
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
    const name = font.name + ':' + font.variants.join(',')
    url.searchParams.set('family', name)
    url.searchParams.set('display', 'swap')

    this.#appendStylesheet(url.toString())
    await document.fonts.load(`1em "${font.name}"`)
  }

  static async load(name: string) {
    let promise: Promise<void>

    const googleFont = googleFonts.find((font) => font.name === name)
    const systemFont = systemFonts.find((font) => font.name === name)

    if (googleFont) {
      promise = this.#loadGoogleFont(googleFont)
    } else if (systemFont) {
      throw new Error('System font loading is not implemented yet!')
    } else {
      throw new Error(`Font '${name}' does not exist!`)
    }

    this.#cache.set(name, promise)
    await promise
  }
}
