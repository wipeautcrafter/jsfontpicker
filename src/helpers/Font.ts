import type { FontFamily } from './FontFamily'

export type FontWeight = keyof typeof Font.weightNames

export class Font {
  static weightNames = {
    100: 'Thin',
    200: 'Extra Light',
    300: 'Light',
    400: 'Normal',
    500: 'Medium',
    600: 'Semi Bold',
    700: 'Bold',
    800: 'Extra Bold',
    900: 'Black',
  }

  family: FontFamily
  weight: FontWeight
  italic: boolean

  constructor(family: FontFamily, weight: FontWeight, italic: boolean) {
    this.family = family
    this.weight = weight
    this.italic = italic
  }

  get style() {
    return this.italic ? 'italic' : 'normal'
  }

  get variant() {
    return this.weight + (this.italic ? 'i' : '')
  }

  toId() {
    return `${this.family}:${this.variant}`
  }

  toString() {
    // if this is the default variant, return that
    if (this.family.getDefaultVariant() === this.variant) return this.family.name

    const entries = [this.family.name]

    entries.push(Font.weightNames[this.weight])
    if (this.italic) entries.push('Italic')
    entries.push(`(${this.variant})`)

    return entries.join(' ')
  }

  static parse(family: FontFamily, variant = family.getDefaultVariant()) {
    const weight = parseInt(variant) as FontWeight
    const italic = variant.endsWith('i')
    return new Font(family, weight, italic)
  }
}
