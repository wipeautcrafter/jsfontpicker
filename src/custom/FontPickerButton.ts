import { Font } from '../helpers/Font'
import { Fonts } from '../helpers/Fonts'
import { getDialog } from '../pickerDialog'
import type { FontPickerDialogElement } from './FontPickerDialog'

export class FontPickerButtonElement extends HTMLButtonElement {
  static observedAttributes = ['font']

  #font!: Font
  #dialog: FontPickerDialogElement
  #skipCallback = false

  // constructor
  constructor() {
    super()
    this.#dialog = getDialog()
  }

  connectedCallback() {
    this.classList.add('font-picker', 'form-select')
    this.setFont(this.getAttribute('font') ?? 'Arial')

    this.addEventListener('click', this.open.bind(this))
  }

  // setters and getters
  setFont(font: Font | string) {
    if (font instanceof Font) {
      this.#font = font
    } else {
      this.#font = Font.parse(font)
    }

    console.info('set font:', this.#font)
    this.textContent = this.#font.toString()

    this.#skipCallback = true
    this.setAttribute('font', this.#font.toId())

    this.style.fontFamily = `${this.#font.family}`
    this.style.fontWeight = this.#font.weight.toString()
    this.style.fontStyle = this.#font.style

    Fonts.load(this.#font.family)
  }

  // methods
  open() {
    this.#dialog.show()
  }

  // event handlers
  attributeChangedCallback(name: string, _prev: string, value: string) {
    if (this.#skipCallback) {
      this.#skipCallback = false
      return
    }

    if (name === 'font') this.setFont(value)
  }
}
