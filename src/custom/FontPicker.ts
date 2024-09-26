import { PickerDialog } from './PickerDialog'
import { FontLoader } from '../helpers/FontLoader'
import { Font } from '../helpers/Font'
import { googleFonts, systemFonts } from '../data/fonts'

import type { FontFamily } from '../data/fonts'
import type { Category, Criterion, Metric, Subset, translations } from '../data/translations'

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

export class FontPicker extends HTMLButtonElement {
  static dialogs = new Set<PickerDialog>()

  font: Font
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
    // when font hasn't been assigned, or a new one has been passed
    if (!this.font || options.font) this.setFont(this.config.font)
    if (!this.initialized) this.initialize()
  }

  private initialize() {
    this.initialized = true
    this.disabled = false
  }

  getFontList() {
    return [
      ...googleFonts.filter((font) => this.config.googleFonts?.includes(font.family) ?? true),
      ...systemFonts.filter((font) => this.config.systemFonts?.includes(font.family) ?? true),
      ...(this.config.extraFonts ?? []),
    ]
  }

  setFont(font: Font | string) {
    if (font instanceof Font) {
      this.font = font
    } else {
      this.font = Font.parse(font)
    }

    this.textContent = this.config.verbose ? this.font.toString() : this.font.toId()

    this.style.fontFamily = `${this.font.family}`
    this.style.fontWeight = this.font.weight.toString()
    this.style.fontStyle = this.font.style

    FontLoader.load(this.font.family)
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
  }
}
