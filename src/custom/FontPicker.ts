import { PickerDialog } from './PickerDialog'
import { Font } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { FontFamily } from '../helpers/FontFamily'
import { googleFonts, systemFonts } from '../data/fonts'

import type { PickerConfig, PickerEventMap } from '../types/fontpicker'

export interface FontPicker {
  addEventListener<K extends keyof PickerEventMap>(
    type: K,
    listener: (this: FontPicker, ev: PickerEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
}

let pickerDialog: PickerDialog | null = null

export class FontPicker extends HTMLButtonElement {
  private initialized = false

  private _font: Font
  get font() {
    return this._font
  }

  private _families: Map<string, FontFamily>
  get families() {
    return this._families
  }

  private _favourites: Set<FontFamily>
  get favourites() {
    return this._favourites
  }

  private _config: PickerConfig = {
    language: 'en',
    container: document.body,

    font: 'Arial',
    verbose: false,
    variants: true,

    favourites: [],
    saveFavourites: true,
    storageKey: 'fp__favourites',

    defaultSubset: 'all',
    defaultCategories: ['display', 'handwriting', 'monospace', 'sans-serif', 'serif'],
    defaultWidth: 'all',
    defaultThickness: 'all',
    defaultComplexity: 'all',
    defaultCurvature: 'all',

    sortBy: 'popularity',
    sortReverse: false,

    googleFonts: null,
    systemFonts: null,

    extraFonts: [],
  }
  getConfig() {
    return { ...this._config }
  }

  connectedCallback() {
    this.disabled = true
    this.classList.add('font-picker', 'form-select')
    this.addEventListener('click', this.open.bind(this))
  }

  configure(options: Partial<PickerConfig>) {
    Object.assign(this._config, options)

    const keys = Object.keys(options)

    // when family list hasn't been assigned, or a new one has been passed
    if (
      !this.families ||
      keys.includes('googleFonts') ||
      keys.includes('systemFonts') ||
      keys.includes('extraFonts')
    ) {
      this.updateFamilies()
    }

    // when font hasn't been assigned, or a new one has been passed
    if (!this.font || keys.includes('font')) {
      this.setFont(this._config.font)
    }

    if (!this.initialized) this.initialize()
  }

  private initialize() {
    this.initialized = true
    this.disabled = false

    // load favourites
    const favourites: string[] = this._config.favourites.slice()

    if (this._config.saveFavourites) {
      const names = localStorage.getItem(this._config.storageKey)
      if (names) favourites.push(...JSON.parse(names))
    }

    this._favourites = new Set()

    for (const name of favourites) {
      try {
        const family = this.getFamily(name)
        this._favourites.add(family)
      } catch (error) {
        console.warn(`Font from favourites is not available: '${name}'!`)
      }
    }
  }

  private updateFamilies() {
    const families = [
      ...googleFonts.filter((font) => this._config.googleFonts?.includes(font.name) ?? true),
      ...systemFonts.filter((font) => this._config.systemFonts?.includes(font.name) ?? true),
      ...this._config.extraFonts.map((font) => new FontFamily(font)),
    ]

    this._families = new Map<string, FontFamily>()
    families.forEach((family) => this.families.set(family.name, family))
  }

  getFamily(name: string) {
    const family = this.families.get(name)
    if (!family) throw new Error(`Could not find font family '${name}'!`)
    return family
  }

  setFont(font: Font | FontFamily | string) {
    if (font instanceof Font) {
      // directly set font
      this._font = font
    } else if (typeof font === 'string') {
      // set font parsed from name
      const [name, variant] = font.split(':')
      const family = this.getFamily(name)
      this._font = Font.parse(family, variant)
    } else {
      // set font from font family
      this._font = Font.parse(font)
    }

    // check if font variant is supported by font family
    if (!this.font.family.variants.includes(this.font.variant)) {
      throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`)
    }

    this.textContent = this._config.verbose ? this.font.toString() : this.font.toId()

    this.style.fontFamily = `${this.font.family}`
    this.style.fontWeight = this.font.weight.toString()
    this.style.fontStyle = this.font.style

    FontLoader.load(this.font.family.name)
  }

  markFavourite(family: FontFamily, value?: boolean) {
    if (value === undefined) value = !this.favourites.has(family)

    if (value) {
      this.favourites.add(family)
    } else {
      this.favourites.delete(family)
    }

    // save to storage
    if (this._config.saveFavourites) {
      const data = Array.from(this.favourites).map((font) => font.name)
      localStorage.setItem(this._config.storageKey, JSON.stringify(data))
    }

    return value
  }

  async open() {
    // close existing fontpicker
    this.close()

    pickerDialog = document.createElement('font-picker-dialog') as PickerDialog
    this._config.container.append(pickerDialog)

    await pickerDialog.open(this)

    pickerDialog.remove()
    pickerDialog = null

    return this.font
  }

  async close() {
    pickerDialog?.close()
  }
}
