import './css/fontpicker.css'

import { PickerDialog } from './custom/PickerDialog'
import { FontPicker } from './custom/FontPicker'
import { FontLoader } from './helpers/FontLoader'

customElements.define('font-picker-dialog', PickerDialog)
customElements.define('font-picker', FontPicker, {
  extends: 'button',
})

export { FontPicker, FontLoader }
