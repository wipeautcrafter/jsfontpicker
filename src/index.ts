import './css/fontpicker.css'

import { PickerDialog } from './custom/PickerDialog'
import { FontPicker } from './custom/FontPicker'

customElements.define('font-picker-dialog', PickerDialog)
customElements.define('font-picker', FontPicker, {
  extends: 'button',
})
