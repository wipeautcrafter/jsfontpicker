import { FontPickerDialogElement } from './custom/FontPickerDialog'

let dialog: FontPickerDialogElement

export const getDialog = () => {
  if (dialog) return dialog

  dialog = document.createElement(
    'font-picker-dialog'
  ) as FontPickerDialogElement

  document.body.append(dialog)
  return dialog
}
