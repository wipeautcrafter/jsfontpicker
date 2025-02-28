import type { FontFamily } from '../helpers/FontFamily'

// Font list items
const heartSVG = `<div class="fp__heart" role="button"><svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" viewBox="0 0 18 18"><path d="M9 2.314 C13.438-2.248 24.534 5.735 9 16-6.534 5.736 4.562-2.248 9 2.314z" /></svg></div>`

export const createLazyFont = (font: FontFamily) => {
  const $item = document.createElement('div')
  $item.className = 'fp__font-item'
  $item.role = 'button'

  $item.dataset.family = font.name

  return $item
}

export const hydrateFont = ($item: HTMLElement, font: FontFamily) => {
  const $family = document.createElement('span')
  $family.className = 'fp__font-family'
  $family.textContent = font.name
  $family.style.fontFamily = `"${font.name}"`

  $item.append($family)
  $item.insertAdjacentHTML('beforeend', heartSVG)
}

// Toggle buttons
const createRadioToggle = ({
  id,
  name,
  value,
  label,
  classes,
  checked,
}: {
  id: string
  name: string
  value: string
  label: string
  classes?: string[]
  checked?: boolean
}) => {
  const $input = document.createElement('input')
  $input.className = 'fpb__hidden-input'
  $input.type = 'radio'
  $input.name = name
  $input.id = id
  $input.value = value
  $input.autocomplete = 'off'
  if (checked) $input.checked = true

  const $label = document.createElement('label')
  $label.className = 'fpb__btn fpb__btn-pill fpb__btn-small fpb__btn-toggle'
  $label.htmlFor = id
  $label.textContent = label
  if (classes) $label.classList.add(...classes)

  return [$input, $label]
}

const createCheckToggle = ({
  id,
  value,
  label,
  classes,
  checked,
}: {
  id: string
  label: string
  value?: string
  classes?: string[]
  checked?: boolean
}) => {
  const $input = document.createElement('input')
  $input.className = 'fpb__hidden-input'
  $input.type = 'checkbox'
  $input.id = id
  $input.autocomplete = 'off'
  if (value) $input.value = value
  if (checked) $input.checked = true

  const $label = document.createElement('label')
  $label.className = 'fpb__btn fpb__btn-pill fpb__btn-small fpb__btn-toggle'
  $label.htmlFor = id
  $label.textContent = label
  if (classes) $label.classList.add(...classes)

  return [$input, $label]
}

// Toggle applications
export const createVariants = (variants: string[]) => {
  // convert variants to numbers (strips i suffix), then convert to set and parse as array
  const weights = Array.from(new Set(variants.map((v) => parseInt(v))))

  return [
    ...weights.flatMap((weight) =>
      createRadioToggle({
        id: `fp__weight-${weight}`,
        name: 'fp__weight',
        label: weight.toString(),
        value: weight.toString(),
      }),
    ),
    ...createCheckToggle({ id: 'fp__italic', label: 'Italic', classes: ['fpb__btn-secondary'] }),
  ]
}

export const createBadges = (badges: { [key: string]: string }) => {
  return Object.entries(badges).flatMap(([value, label]) =>
    createCheckToggle({
      id: `fp__category-${value}`,
      value,
      label,
    }),
  )
}

export const setActiveBadges = ($parent: HTMLElement, values: string[]) => {
  const $inputs = $parent.querySelectorAll<HTMLInputElement>('.fpb__hidden-input')
  for (const $input of $inputs) {
    $input.checked = values.includes($input.value)
  }
}

export const getActiveBadges = ($parent: HTMLElement) => {
  const $inputs = $parent.querySelectorAll<HTMLInputElement>('.fpb__hidden-input:checked')
  return [...$inputs].map(($input) => $input.value)
}

// Select options
const createOption = (key: string, label: string) => {
  const $option = document.createElement('option')
  $option.value = key
  $option.textContent = label
  return $option
}

export const createOptions = (options: { [key: string]: string }) => {
  return Object.entries(options).map(([key, label]) => createOption(key, label))
}
