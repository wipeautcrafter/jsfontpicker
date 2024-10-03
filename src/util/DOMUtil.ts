import type { FontFamily } from '../helpers/FontFamily'

export const createFont = (font: FontFamily) => {
  const $item = document.createElement('div')
  $item.className = 'px-3 py-1 fp__font-item rounded-pill user-select-none'
  $item.role = 'button'

  $item.dataset.family = font.name

  const $family = document.createElement('span')
  $family.className = 'fs-6 pe-none'
  $family.textContent = font.name
  $family.style.fontFamily = `"${font.name}"`

  $item.append($family)
  return $item
}

export const createVariants = (variants: string[]) => {
  // convert variants to numbers (strips i suffix), then convert to set and parse as array
  const weights = Array.from(new Set(variants.map((v) => parseInt(v))))

  const $badge = document.createElement('button')
  $badge.className = 'btn btn-outline-secondary fp__btn-badge'
  $badge.dataset.bsToggle = 'button'
  $badge.textContent = 'Italic'
  $badge.id = 'fp__italic'

  return [
    ...weights.flatMap((weight) => {
      const id = `fp__weight-${weight}`

      const $radio = document.createElement('input')
      $radio.type = 'radio'
      $radio.className = 'btn-check fp__weight'
      $radio.value = weight.toString()
      $radio.id = id
      $radio.name = 'fp__weight'

      const $label = document.createElement('label')
      $label.className = 'btn btn-outline-primary fp__btn-badge'
      $label.htmlFor = id
      $label.textContent = weight.toString()

      return [$radio, $label]
    }),
    $badge,
  ]
}

export const createOption = (key: string, label: string) => {
  const $option = document.createElement('option')
  $option.value = key
  $option.textContent = label
  return $option
}

export const createOptions = (options: { [key: string]: string }) => {
  return Object.entries(options).map(([key, label]) => createOption(key, label))
}

export const createBadge = (key: string, label: string) => {
  const $badge = document.createElement('button')
  $badge.className = 'btn btn-outline-primary fp__btn-badge'
  $badge.dataset.value = key
  $badge.dataset.bsToggle = 'button'
  $badge.textContent = label
  return $badge
}

export const createBadges = (badges: { [key: string]: string }) => {
  return Object.entries(badges).map(([key, label]) => createBadge(key, label))
}

export const setActiveBadges = ($parent: HTMLElement, values: string[]) => {
  for (const $category of $parent.children) {
    const value = ($category as HTMLElement).dataset.value!
    $category.classList.toggle('active', values.includes(value))
  }
}

export const getActiveBadges = ($parent: HTMLElement) => {
  return Array.from($parent.querySelectorAll('.active')).map(
    (item) => (item as HTMLElement).dataset.value,
  )
}
