import { PickerDialog } from './PickerDialog'
import { FontLoader } from '../helpers/FontLoader'
import { googleFonts, systemFonts } from '../data/fonts'
import { Font } from '../helpers/Font'

import type { Category, Criterion, Metric, Subset, translations } from '../data/translations'
import type { FontFamily } from '../helpers/FontFamily'

interface PickerEventMap extends HTMLElementEventMap {
  open: Event
  pick: Event
  cancel: Event
  close: Event
}

export interface PickerConfig {
  language: keyof typeof translations
  container: HTMLElement
  previewText?: string

  font: string
  verbose: boolean

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

export interface FontPicker {
  addEventListener<K extends keyof PickerEventMap>(
    type: K,
    listener: (this: FontPicker, ev: PickerEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void
}

export class FontPicker extends HTMLButtonElement {
  static dialogs = new Set<PickerDialog>()

  font: Font
  families: Map<string, FontFamily>

  private initialized = false

  config: PickerConfig = {
    language: 'en',
    container: document.body,

    font: 'Arial',
    verbose: false,

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

  async open() {
    // close existing dialogs, which should be cleant up automatically
    // (when promise resolves, the open() script removes the element)
    FontPicker.dialogs.forEach((dialog) => dialog.close())

    const dialog = document.createElement('font-picker-dialog') as PickerDialog
    this.config.container.append(dialog)

    FontPicker.dialogs.add(dialog)
    await dialog.open(this)

    dialog.remove()
    FontPicker.dialogs.delete(dialog)

    return this.font
  }
}
