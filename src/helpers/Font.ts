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

  static parse(input: string) {
    const [family, style = '400'] = input.split(':')
    const weight = parseInt(style) as FontWeight
    const italic = style.endsWith('i')
    return new Font(family, weight, italic)
  }

  family: string
  weight: FontWeight
  italic: boolean

  constructor(family: string, weight: FontWeight = 400, italic: boolean = false) {
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
    const entries = [this.family]

    if (this.weight !== 400) entries.push(Font.weightNames[this.weight])
    if (this.italic) entries.push('Italic')
    if (this.weight !== 400 || this.italic) {
      entries.push(`(${this.variant})`)
    }

    return entries.join(' ')
  }
}
