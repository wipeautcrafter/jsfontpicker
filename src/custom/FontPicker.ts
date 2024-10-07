import { PickerDialog } from './PickerDialog'
import { FontLoader } from '../helpers/FontLoader'
import { googleFonts, systemFonts } from '../data/fonts'
import { Font } from '../helpers/Font'

import type { Category, Criterion, Metric, Subset, translations } from '../data/translations'
import { FontFamily } from '../helpers/FontFamily'

export interface PickerConfig {
  language: keyof typeof translations
  container: HTMLElement
  previewText?: string

  font: string
  verbose: boolean
  variants: boolean

  favourites: string[]
  saveFavourites: boolean
  storageKey: string

  defaultSubset: Subset
  defaultCategories: Category[]
  defaultWidth: Metric
  defaultThickness: Metric
  defaultComplexity: Metric
  defaultCurvature: Metric

  sortBy: Criterion
  sortReverse: boolean

  googleFonts: string[] | null
  systemFonts: string[] | null
  extraFonts: FontFamily[] | null
}

interface PickerEventMap extends HTMLElementEventMap {
  open: Event
  pick: Event
  cancel: Event
  close: Event
}

export interface FontPicker {
  addEventListener<K extends keyof PickerEventMap>(
    type: K,
    listener: (this: FontPicker, ev: PickerEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
}

export class FontPicker extends HTMLButtonElement {
  static dialog: PickerDialog | null = null

  font: Font
  families: Map<string, FontFamily>
  favourites: Set<FontFamily>

  private initialized = false

  config: PickerConfig = {
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
    extraFonts: null,
  }

  connectedCallback() {
    this.disabled = true
    this.classList.add('form-select')
    this.addEventListener('click', this.open.bind(this))
  }

  configure(options: Partial<PickerConfig>) {
    Object.assign(this.config, options)

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
      this.setFont(this.config.font)
    }

    if (!this.initialized) this.initialize()
  }

  private initialize() {
    this.initialized = true
    this.disabled = false

    // load favourites
    const favourites: string[] = this.config.favourites.slice()
    if (this.config.saveFavourites) {
      const names = localStorage.getItem(this.config.storageKey)
      if (names) favourites.push(...JSON.parse(names))
    }
    this.favourites = new Set(favourites.map((name) => this.getFamily(name)))
  }

  private updateFamilies() {
    const families = [
      ...googleFonts.filter((font) => this.config.googleFonts?.includes(font.name) ?? true),
      ...systemFonts.filter((font) => this.config.systemFonts?.includes(font.name) ?? true),
      ...(this.config.extraFonts ?? []),
    ]

    this.families = new Map<string, FontFamily>()
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
      this.font = font
    } else if (typeof font === 'string') {
      // set font parsed from name
      const [name, variant] = font.split(':')
      const family = this.getFamily(name)
      this.font = Font.parse(family, variant)
    } else {
      // set font from font family
      this.font = Font.parse(font)
    }

    // check if font variant is supported by font family
    if (!this.font.family.variants.includes(this.font.variant)) {
      throw new Error(`Variant ${this.font.variant} not supported by '${this.font.family.name}'!`)
    }

    this.textContent = this.config.verbose ? this.font.toString() : this.font.toId()

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
    if (this.config.saveFavourites) {
      const data = Array.from(this.favourites).map((font) => font.name)
      localStorage.setItem(this.config.storageKey, JSON.stringify(data))
    }

    return value
  }

  async open() {
    // close existing fontpicker
    this.close()

    FontPicker.dialog = document.createElement('font-picker-dialog') as PickerDialog
    this.config.container.append(FontPicker.dialog)

    await FontPicker.dialog.open(this)

    FontPicker.dialog.remove()
    FontPicker.dialog = null

    return this.font
  }

  async close() {
    FontPicker.dialog?.close()
  }
}
