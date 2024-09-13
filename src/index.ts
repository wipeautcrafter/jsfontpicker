import './css/fontpicker.css'

import { FontPickerDialogElement } from './custom/FontPickerDialog'
import { FontPickerButtonElement } from './custom/FontPickerButton'

customElements.define('font-picker-dialog', FontPickerDialogElement)
customElements.define('font-picker', FontPickerButtonElement, {
  extends: 'button',
})
