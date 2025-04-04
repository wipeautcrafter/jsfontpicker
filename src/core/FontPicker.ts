import EventEmitter from 'events'
import { PickerDialog } from './PickerDialog'
import { Font } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { FontFamily } from '../helpers/FontFamily'
import { translations } from '../data/translations'
import { googleFonts, systemFonts } from '../data/fonts'

import type { PickerConfig } from '../types/fontpicker'

let pickerDialog: PickerDialog | null = null

export class FontPicker extends EventEmitter<{
  open: []
  opened: []
  pick: [font: Font | null]
  clear: []
  cancel: []
  close: []
  closed: []
}> {
  static FontLoader = FontLoader

  private $el: HTMLButtonElement | HTMLInputElement | HTMLDivElement
  private $inputEl: HTMLInputElement
  private orgInputType: string

  private _font: Font | null
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

    font: null,
    verbose: false,
    variants: true,

    favourites: [],
    saveFavourites: true,
    storageKey: 'fp__favourites',

    defaultSearch: '',
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

    showCancelButton: true,
    showClearButton: false,
  }

  getConfig() {
    return { ...this._config }
  }

  private _override: Partial<PickerConfig> = {}

  getOverride() {
    return { ...this._override }
  }

  setOverride(override: Partial<PickerConfig>) {
    this._override = override
  }

  private clickHandler?: () => void
  private changeHandler?: () => void

  constructor(
    el: HTMLButtonElement | HTMLInputElement | string,
    config: Partial<PickerConfig> = {},
  ) {
    super()
    this.$el = typeof el === 'string' ? document.querySelector(el)! : el

    if (this.$el instanceof HTMLInputElement) {
      // This is an <input> element. Wrap inside <div>.
      this.orgInputType = this.$el.type
      if (this.$el.value) {
        config.font = this.$el.value
      }
      const $wrap = document.createElement('button')
      this.$el.after($wrap)

      this.$inputEl = this.$el
      this.$inputEl.type = 'hidden'

      this.$el = $wrap

      this.changeHandler = () => this.setFont(this.$inputEl.value)
      this.$inputEl.addEventListener('change', this.changeHandler)
    } else if (this.$el.dataset.font) {
      config.font = this.$el.dataset.font
    }

    this.$el.classList.add('font-picker', 'fpb__input', 'fpb__dropdown')
    this.clickHandler = this.open.bind(this)
    this.$el.addEventListener('click', this.clickHandler)

    this.configure(config)
    this.initialize()
  }

  configure(options: Partial<PickerConfig>) {
    if (
      'container' in options &&
      options.container &&
      !(options.container instanceof HTMLElement)
    ) {
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

  setFont(font: Font | FontFamily | string | null, emit: boolean = false) {
    if (!font) {
      this._font = null
    } else if (font instanceof Font) {
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

    if (this.font) {
      // check if font variant is supported by font family
      if (!this.font.family.variants.includes(this.font.variant)) {
        const variant = this.font.family.getDefaultVariant()
        console.warn(
          `Variant ${this.font.variant} not supported by '${this.font.family.name}', falling back to ${variant}.`,
        )
        this._font = Font.parse(this.font.family, variant)
      }

      const text = this._config.verbose ? this.font.toString() : this.font.toConcise()
      this.$el.textContent = text
      this.$el.dataset.font = this.font.toId()
      if (this.$inputEl) {
        this.$inputEl.value = this.font.toId()
      }

      this.$el.style.fontFamily = `"${this.font.family}"`
      this.$el.style.fontWeight = this.font.weight.toString()
      this.$el.style.fontStyle = this.font.style

      FontLoader.load(this.font.family)
    } else {
      this.$el.textContent = translations[this._config.language].pickHint
      this.$el.dataset.font = ''
      if (this.$inputEl) {
        this.$inputEl.value = ''
      }

      this.$el.style.removeProperty('font-family')
      this.$el.style.removeProperty('font-weight')
      this.$el.style.removeProperty('font-style')
    }

    if (emit) {
      this.emit('pick', this.font)
      if (this.$inputEl) {
        this.$inputEl.dispatchEvent(new Event('change'))
      }
    }
  }

  clear(emit?: boolean) {
    this.setFont(null, emit)
    if (emit) this.emit('clear')
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
    this.$el.removeAttribute('data-font')
    this.$el.style.removeProperty('font-family')
    this.$el.style.removeProperty('font-weight')
    this.$el.style.removeProperty('font-style')

    if (this.$inputEl) {
      this.$inputEl.type = this.orgInputType
      this.$el.remove()
    }
  }
}
