import dialogContent from '../templates/dialogContent.html?raw'
import styleContent from '../css/fontpicker.css?raw'

import * as DOM from '../util/DOMUtil'
import { Modal, Accordion } from '../util/FPB'

import { familyFilter, familySort } from '../util/sortUtil'
import { Font } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { translations } from '../data/translations'

import type { FontFamily } from '../helpers/FontFamily'
import type { FontPicker } from './FontPicker'
import type { Filters } from '../types/util'
import type { FontWeight } from '../types/fonts'
import type { Category, Criterion, Metric, Subset } from '../types/translations'
import type { PickerConfig } from '../types/fontpicker'

export class PickerDialog {
  private opened = false
  private picker: FontPicker
  private config: PickerConfig

  private observer: IntersectionObserver

  private selected: Font
  private hovered: Font | null = null

  private modal: Modal

  private $host: HTMLDivElement
  private $modal: HTMLDivElement
  private $modalBackdrop: HTMLButtonElement
  private $closeBtn: HTMLButtonElement

  private $search: HTMLInputElement
  private $subset: HTMLSelectElement
  private $categories: HTMLDivElement
  private $width: HTMLSelectElement
  private $thickness: HTMLSelectElement
  private $complexity: HTMLSelectElement
  private $curvature: HTMLSelectElement
  private $sort: HTMLSelectElement
  private $sortOrder: HTMLInputElement
  private $preview: HTMLDivElement
  private $fonts: HTMLDivElement
  private $variants: HTMLDivElement
  private $clearBtn: HTMLButtonElement
  private $cancelBtn: HTMLButtonElement
  private $pickBtn: HTMLButtonElement

  constructor(parent: HTMLElement) {
    this.createLayout(parent)

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const $target = entry.target as HTMLDivElement

        if (entry.isIntersecting && !$target.childElementCount) {
          const family = this.getFamilyFor($target)
          if (!family) continue

          DOM.hydrateFont($target, family)
          FontLoader.load(family)
        } else if (!entry.isIntersecting && $target.childElementCount) {
          $target.textContent = ''
        }
      }
    })
  }

  private createLayout(parent: HTMLElement) {
    this.$host = document.createElement('div')
    const shadow = this.$host.attachShadow({ mode: 'open' })
    shadow.innerHTML = dialogContent

    const $style = document.createElement('style')
    $style.innerHTML = styleContent

    parent.append(this.$host)
    shadow.append($style)

    this.$modal = shadow.querySelector('#fp__modal')!
    this.$modalBackdrop = shadow.querySelector('#fp__backdrop')!
    this.$closeBtn = this.$modal.querySelector('#fp__close')!

    this.$search = this.$modal.querySelector('#fp__search')!
    this.$subset = this.$modal.querySelector('#fp__subsets')!
    this.$categories = this.$modal.querySelector('#fp__categories')!

    this.$width = this.$modal.querySelector('#fp__width')!
    this.$thickness = this.$modal.querySelector('#fp__thickness')!
    this.$complexity = this.$modal.querySelector('#fp__complexity')!
    this.$curvature = this.$modal.querySelector('#fp__curvature')!

    this.$sort = this.$modal.querySelector('#fp__sort')!
    this.$sortOrder = this.$modal.querySelector('#fp__sort-order')!

    this.$preview = this.$modal.querySelector('#fp__preview')!
    this.$fonts = this.$modal.querySelector('#fp__fonts')!
    this.$variants = this.$modal.querySelector('#fp__variants')!

    this.$clearBtn = this.$modal.querySelector('#fp__clear')!
    this.$cancelBtn = this.$modal.querySelector('#fp__cancel')!
    this.$pickBtn = this.$modal.querySelector('#fp__pick')!

    this.modal = new Modal(this.$modal)
    new Accordion(this.$modal.querySelector('.fpb__accordion')!)
  }

  private getElementFor(family: FontFamily) {
    const $font = this.$fonts.querySelector(`[data-family="${family.name}"]`)
    if (!$font) throw new Error(`Could not find element for '${family.name}'!`)
    return $font as HTMLElement
  }

  private getFamilyFor($element: Element | EventTarget) {
    const name = ($element as HTMLElement).dataset.family
    if (!name) return null
    return this.picker.getFamily(name)
  }

  private getFamilies() {
    return Array.from(this.picker.families.values())
  }

  private sortFamilies(orderBy: Criterion, reverse = false) {
    const families = this.getFamilies()

    const sorted = families.sort((a, b) => familySort(a, b, orderBy))
    if (reverse) sorted.reverse()

    for (const family of sorted) {
      this.$fonts.append(this.getElementFor(family))
    }

    // put selected and favourites at the top
    for (const favourite of this.picker.favourites) {
      const $favourite = this.getElementFor(favourite)
      this.$fonts.prepend($favourite)
    }

    const $selected = this.getElementFor(this.selected.family)
    this.$fonts.prepend($selected)

    this.$fonts.scrollTop = 0
  }

  private filterFamilies(filters: Filters) {
    const families = this.getFamilies()

    const filtered = families.filter((a) => familyFilter(a, filters))
    const familyNames = filtered.map((filtered) => filtered.name)

    for (const $font of this.$fonts.children) {
      const name = ($font as HTMLElement).dataset.family!
      const hidden = !familyNames.includes(name)
      $font.classList.toggle('fpb__hidden', hidden)
    }
  }

  private updateSort() {
    const orderBy = this.$sort.value as Criterion
    const reverse = this.$sortOrder.checked
    this.sortFamilies(orderBy, reverse)
  }

  private updateFilter() {
    this.filterFamilies({
      name: this.$search.value,
      subset: this.$subset.value as Subset,
      categories: DOM.getActiveBadges(this.$categories) as Category[],
      complexity: this.$complexity.value as Metric,
      curvature: this.$curvature.value as Metric,
      thickness: this.$thickness.value as Metric,
      width: this.$width.value as Metric,
    })
  }

  private updatePreview() {
    // only use selected variants for selected font, otherwise use defaults
    const font = this.hovered ?? this.selected

    this.$preview.style.fontFamily = `"${font.family}"`
    this.$preview.style.fontWeight = font.weight.toString()
    this.$preview.style.fontStyle = font.style
  }

  private selectFont(font: Font) {
    // deselect previously selected fonts
    for (const $font of this.$fonts.querySelectorAll('.fp__selected')) {
      $font.classList.remove('fp__selected')
    }

    // set selected font
    this.selected = font
    this.getElementFor(font.family).classList.add('fp__selected')

    if (!this.config.variants) return

    // create variants
    this.$variants.textContent = ''
    this.$variants.append(...DOM.createVariants(font.family.variants))

    // set current variant
    const $weight = this.$variants.querySelector<HTMLInputElement>(`#fp__weight-${font.weight}`)
    const $italic = this.$variants.querySelector<HTMLInputElement>('#fp__italic')
    if (!$weight) throw new Error('Could not find weight button for selected font.')
    if (!$italic) throw new Error('Could not find italic button for selected font.')

    $weight.checked = true
    $italic.checked = font.italic

    this.updateVariant()
  }

  private favouriteFont(font: Font) {
    const $family = this.getElementFor(font.family)
    const value = $family.classList.toggle('fp__fav')
    this.picker.markFavourite(font.family, value)
    this.updateSort()
  }

  private updateVariant() {
    if (!this.config.variants) return

    const $weight = this.$variants.querySelector<HTMLInputElement>('[name=fp__weight]:checked')
    const $italic = this.$variants.querySelector<HTMLInputElement>('#fp__italic')

    if (!$weight) throw new Error('Could not find weight button for selected font.')
    if (!$italic) throw new Error('Could not find italic button for selected font.')

    let weight = parseInt($weight.value) as FontWeight
    let italic = $italic.checked

    // check if font doesn't have italic/regular variants for current font
    const hasRegular = this.selected.family.variants.includes(`${weight}`)
    const hasItalic = this.selected.family.variants.includes(`${weight}i`)

    $italic.disabled = !hasRegular || !hasItalic
    if (!hasRegular) italic = true
    if (!hasItalic) italic = false
    $italic.classList.toggle('active', italic)

    this.selected.weight = weight
    this.selected.italic = italic

    this.updatePreview()
  }

  private createLazyFontList() {
    for (const font of this.getFamilies()) {
      const $item = DOM.createLazyFont(font)
      this.$fonts.append($item)
      this.observer.observe($item)
    }
  }

  private applyTranslations() {
    const dict = translations[this.config.language]

    this.$search.placeholder = dict.search
    this.$modal.querySelector('#fp__title')!.textContent = dict.selectFont

    this.$subset.append(...DOM.createOptions(dict.subsets))
    this.$categories.append(...DOM.createBadges(dict.categories))

    this.$width.append(...DOM.createOptions(dict.widths))
    this.$thickness.append(...DOM.createOptions(dict.thicknesses))
    this.$complexity.append(...DOM.createOptions(dict.complexities))
    this.$curvature.append(...DOM.createOptions(dict.curvatures))
    this.$sort.append(...DOM.createOptions(dict.sorts))

    this.$preview.textContent = this.config.previewText ?? dict.sampleText

    this.$modal.querySelector('#fp__t-filters')!.textContent = dict.filters
    this.$modal.querySelector('#fp__t-metrics')!.textContent = dict.metrics
    this.$modal.querySelector('#fp__t-sort')!.textContent = dict.sort
    this.$modal.querySelector('#fp__t-clear')!.textContent = dict.clear
    this.$modal.querySelector('#fp__t-cancel')!.textContent = dict.cancel
    this.$modal.querySelector('#fp__t-pick')!.textContent = dict.select
  }

  private onFontHover(event: MouseEvent) {
    const family = this.getFamilyFor(event.target!)
    if (!family) return

    // to prevent different variant for selected font being previewed
    if (family === this.selected.family) {
      this.hovered = null
    } else {
      this.hovered = Font.parse(family)
    }

    this.updatePreview()
  }

  private onFontUnhover(event: MouseEvent) {
    if (!this.getFamilyFor(event.target!)) return

    this.hovered = null
    this.updatePreview()
  }

  private onFontClick(event: MouseEvent) {
    const $target = event.target as HTMLElement

    // when favourite is clicked
    if ($target.classList.contains('fp__heart')) {
      const family = this.getFamilyFor($target.parentElement!)
      if (!family) return
      const font = Font.parse(family)
      this.selectFont(font)
      this.favouriteFont(font)
      return
    }

    // when font is clicked
    const family = this.getFamilyFor($target)
    if (!family || this.selected.family === family) return
    this.selectFont(Font.parse(family))
  }

  private onFontDoubleClick(event: MouseEvent) {
    if (!this.getFamilyFor(event.target!)) return
    this.submit()
  }

  private selectClosestFont(excluded: boolean, reverse: boolean, $from?: Element | null) {
    let $target = $from ? ($from as HTMLElement) : this.getElementFor(this.selected.family)

    while (excluded || $target.classList.contains('fpb__hidden')) {
      excluded = false

      const $next = reverse ? $target.previousElementSibling : $target.nextElementSibling
      if (!$next) return

      $target = $next as HTMLElement
    }

    $target.click()
    $target.scrollIntoView({
      behavior: 'instant',
      block: 'center',
    })
  }

  private selectClosestVariant(reverse: boolean) {
    const $origin = this.$variants.querySelector('[name=fp__weight]:checked')
    const $next = reverse
      ? $origin?.previousElementSibling?.previousElementSibling
      : $origin?.nextElementSibling?.nextElementSibling

    if (!$next) return

    const $target = $next as HTMLInputElement
    $target.checked = !$target.checked

    this.updateVariant()
  }

  private toggleVariantItalic() {
    const $target = this.$variants.querySelector<HTMLInputElement>('#fp__italic')
    if (!$target) return
    $target.checked = !$target.checked
    this.updateVariant()
  }

  private onKeyPressed(event: KeyboardEvent) {
    if (!this.opened) return

    const $target = event.target as HTMLElement | null
    if ($target && $target !== this.$modal && !this.$fonts.contains($target)) {
      return // an element is focused that requires keyboard input, don't handle.
    }

    let handled = true

    if (event.key === 'Escape') {
      // cancel font picker modal
      this.cancel()
    } else if (event.key === 'f') {
      // toggle favourite for selected font
      this.favouriteFont(this.selected)
    } else if (event.key === 'PageUp') {
      // select first font
      this.selectClosestFont(false, false, this.$fonts.firstElementChild)
    } else if (event.key === 'PageDown') {
      // select last font
      this.selectClosestFont(false, true, this.$fonts.lastElementChild)
    } else if (event.key === 'ArrowUp') {
      // select previous font
      this.selectClosestFont(true, true, null)
    } else if (event.key === 'ArrowDown') {
      // select next font
      this.selectClosestFont(true, false, null)
    } else if (event.key === 'ArrowLeft') {
      // select previous font variant
      this.selectClosestVariant(true)
    } else if (event.key === 'ArrowRight') {
      // select next font variant
      this.selectClosestVariant(false)
    } else if (event.key === 'i') {
      // toggle font italic
      this.toggleVariantItalic()
    } else if (event.key === '/') {
      // focus search input
      this.$search.focus()
    } else if (event.key === 'Enter') {
      // submit font picker modal
      this.submit()
    } else {
      handled = false
    }

    if (handled) event.preventDefault()
  }

  private bindEvents() {
    const filterCallback = () => {
      this.filtersChanged()
      this.updateFilter()
    }

    this.$categories.addEventListener('input', filterCallback)
    this.$search.addEventListener('input', filterCallback)
    this.$subset.addEventListener('input', filterCallback)
    this.$width.addEventListener('input', filterCallback)
    this.$thickness.addEventListener('input', filterCallback)
    this.$complexity.addEventListener('input', filterCallback)
    this.$curvature.addEventListener('input', filterCallback)

    const sortCallback = () => {
      this.filtersChanged()
      this.updateSort()
    }

    this.$sort.addEventListener('input', sortCallback)
    this.$sortOrder.addEventListener('input', sortCallback)

    this.$fonts.addEventListener('mouseover', (event) => this.onFontHover(event))
    this.$fonts.addEventListener('mouseout', (event) => this.onFontUnhover(event))
    this.$fonts.addEventListener('click', (event) => this.onFontClick(event))
    this.$fonts.addEventListener('dblclick', (event) => this.onFontDoubleClick(event))

    this.$variants.addEventListener('input', () => this.updateVariant())

    this.$clearBtn.addEventListener('click', () => this.assignDefaults())
    this.$pickBtn.addEventListener('click', () => this.submit())
    this.$cancelBtn.addEventListener('click', () => this.cancel())

    this.$modalBackdrop.addEventListener('click', () => this.cancel())
    this.$closeBtn.addEventListener('click', () => this.cancel())

    this.$modal.addEventListener('keydown', (event) => this.onKeyPressed(event))
  }

  private applyConfiguration() {
    // set favourites
    this.picker.favourites.forEach((family) => this.getElementFor(family).classList.add('fp__fav'))

    // hide variants
    this.$variants.classList.toggle('fpb__hidden', !this.config.variants)
  }

  private filtersChanged(changed = true) {
    this.$clearBtn.classList.toggle('fpb__hidden', !changed)
  }

  private assignDefaults() {
    DOM.setActiveBadges(this.$categories, this.config.defaultCategories)

    this.$search.value = ''

    this.$subset.value = this.config.defaultSubset
    this.$width.value = this.config.defaultWidth
    this.$thickness.value = this.config.defaultThickness
    this.$complexity.value = this.config.defaultComplexity
    this.$curvature.value = this.config.defaultCurvature

    this.$sort.value = this.config.sortBy
    this.$sortOrder.classList.toggle('active', this.config.sortReverse)

    // Apply changed defaults
    this.updateSort()
    this.updateFilter()

    // Hide filter clear button
    this.filtersChanged(false)
  }

  async open(picker: FontPicker) {
    if (this.opened) return

    this.opened = true
    this.picker = picker
    this.config = this.picker.getConfig()

    this.applyTranslations()
    this.bindEvents()

    this.createLazyFontList()
    this.selectFont(picker.font)

    this.applyConfiguration()
    this.assignDefaults()

    requestAnimationFrame(() => {
      this.modal.open()
      this.modal.once('opened', () => this.picker.emit('open'))
    })

    await new Promise<void>((resolve) => {
      // TODO: bind new closing event
      this.modal.once('closed', () => resolve())
    })

    this.picker.emit('close')
    this.$modal.remove()
    this.$modalBackdrop.remove()
  }

  submit() {
    this.picker.setFont(this.selected, true /* Fire `change` event */)
    this.picker.emit('pick', this.selected)
    this.close()
  }

  cancel() {
    this.picker.emit('cancel')
    this.close()
  }

  close() {
    this.opened = false
    this.modal.close()
  }

  destroy() {
    this.$host.remove()
  }
}
