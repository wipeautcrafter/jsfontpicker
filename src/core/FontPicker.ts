import EventEmitter from 'events'
import { PickerDialog } from './PickerDialog'
import { Font } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { FontFamily } from '../helpers/FontFamily'
import { googleFonts, systemFonts } from '../data/fonts'

import type { PickerConfig } from '../types/fontpicker'

let pickerDialog: PickerDialog | null = null

export class FontPicker extends EventEmitter<{
  open: []
  pick: [font: Font]
  cancel: []
  close: []
}> {
  static FontLoader = FontLoader

  private $el: HTMLButtonElement | HTMLInputElement
  private isInput: boolean

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
    previewText: null,

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

  private clickHandler?: () => void
  private changeHandler?: () => void

  constructor(
    el: HTMLButtonElement | HTMLInputElement | string,
    config: Partial<PickerConfig> = {},
  ) {
    super()
    this.$el = typeof el === 'string' ? document.querySelector(el)! : el

    this.$el.classList.add('font-picker', 'fpb__input', 'fpb__dropdown')
    this.clickHandler = this.open.bind(this)
    this.$el.addEventListener('click', this.clickHandler)

    if ((this.isInput = this.$el instanceof HTMLInputElement)) {
      this.$el.readOnly = true
      this.$el.role = 'button'
      if (this.$el.value) { config.font = this.$el.value }
      this.changeHandler = () => this.setFont(this.$el.value)
      this.$el.addEventListener('change', this.changeHandler)
    }

    this.configure(config)
    this.initialize()
  }

  configure(options: Partial<PickerConfig>) {
    if ('container' in options && options.container && !(options.container instanceof HTMLElement)) {
      // container can be a DOM element or a string
      options.container = document.querySelector(options.container) ?? undefined
    }

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
  }

  private initialize() {
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

  setFont(font: Font | FontFamily | string, fireOnChange: boolean = false) {
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

    this.$el.dataset.font = this.font.toId()
    const text = this._config.verbose ? this.font.toString() : this.font.toId()
    this.$el.textContent = text
    if (this.isInput) {
      this.$el.value = this.font.toId()
      if (fireOnChange) {
        this.$el.dispatchEvent(new Event('change'))
      }
    }

    this.$el.style.fontFamily = `${this.font.family}`
    this.$el.style.fontWeight = this.font.weight.toString()
    this.$el.style.fontStyle = this.font.style

    FontLoader.load(this.font.family)
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

    pickerDialog = new PickerDialog(this._config.container)
    await pickerDialog.open(this)
    pickerDialog = null

    return this.font
  }

  async close() {
    pickerDialog?.close()
  }

  destroy() {
    this.close()
    pickerDialog?.destroy()

    if (this.changeHandler) this.$el.removeEventListener('change', this.changeHandler)
    if (this.clickHandler) this.$el.removeEventListener('click', this.clickHandler)

    this.$el.classList.remove('font-picker', 'fpb__input', 'fpb__dropdown')
    this.$el.value = ''
    this.$el.removeAttribute('data-font')
    this.$el.style.removeProperty('font-family')
    this.$el.style.removeProperty('font-weight')
    this.$el.style.removeProperty('font-style')

    if (this.isInput) {
      this.$el.removeAttribute('role')
      this.$el.removeAttribute('readOnly')
    }
  }
}
