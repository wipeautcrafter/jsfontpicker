import dialogContent from '../templates/dialogContent.html?raw'

import * as bootstrap from 'bootstrap'
import * as DOM from '../util/DOMUtil'
import { familyFilter, familySort } from '../util/sortUtil'
import { Font, type FontWeight } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { translations } from '../data/translations'

import type { FontFamily } from '../helpers/FontFamily'
import type { FontPicker } from './FontPicker'
import type { Category, Criterion, Metric, Subset } from '../data/translations'
import type { Filters } from '../util/sortUtil'

export class PickerDialog extends HTMLElement {
  private opened = false
  private picker: FontPicker

  private modal: bootstrap.Modal
  private observer: IntersectionObserver

  private selected: Font
  private hovered: Font | null = null

  private $modal: HTMLDivElement
  private $title: HTMLDivElement
  private $search: HTMLInputElement
  private $subset: HTMLSelectElement
  private $categories: HTMLDivElement
  private $width: HTMLSelectElement
  private $thickness: HTMLSelectElement
  private $complexity: HTMLSelectElement
  private $curvature: HTMLSelectElement
  private $sort: HTMLSelectElement
  private $sortOrder: HTMLButtonElement
  private $preview: HTMLDivElement
  private $fonts: HTMLDivElement
  private $variants: HTMLDivElement
  private $cancelBtn: HTMLButtonElement
  private $pickBtn: HTMLButtonElement

  connectedCallback() {
    this.createLayout()

    this.modal = new bootstrap.Modal(this.$modal)
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio <= 0) return

        const $target = entry.target as HTMLDivElement
        const family = $target.dataset.family

        if (family) FontLoader.load(family)
        this.observer.unobserve($target)
      }
    })
  }

  private createLayout() {
    this.innerHTML = dialogContent

    this.$modal = this.querySelector('#fp__modal')!
    this.$title = this.querySelector('#fp__title')!

    this.$search = this.querySelector('#fp__search')!
    this.$subset = this.querySelector('#fp__subsets')!
    this.$categories = this.querySelector('#fp__categories')!

    this.$width = this.querySelector('#fp__width')!
    this.$thickness = this.querySelector('#fp__thickness')!
    this.$complexity = this.querySelector('#fp__complexity')!
    this.$curvature = this.querySelector('#fp__curvature')!

    this.$sort = this.querySelector('#fp__sort')!
    this.$sortOrder = this.querySelector('#fp__sort-order')!

    this.$preview = this.querySelector('#fp__preview')!
    this.$fonts = this.querySelector('#fp__fonts')!
    this.$variants = this.querySelector('#fp__variants')!

    this.$cancelBtn = this.querySelector('#fp__cancel')!
    this.$pickBtn = this.querySelector('#fp__pick')!
  }

  private getElementFor(family: FontFamily) {
    return this.$fonts.querySelector(`[data-family="${family.name}"]`)
  }

  private getFamilyFor($element: HTMLElement) {
    const name = $element.dataset.family
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
      const $element = this.getElementFor(family)
      if ($element) this.$fonts.appendChild($element)
    }
  }

  private filterFamilies(filters: Filters) {
    const families = this.getFamilies()

    const filtered = families.filter((a) => familyFilter(a, filters))
    const familyNames = filtered.map((filtered) => filtered.name)

    for (const $font of this.$fonts.children) {
      const name = ($font as HTMLElement).dataset.family!
      const hidden = !familyNames.includes(name)
      $font.classList.toggle('d-none', hidden)
    }
  }

  private updateSort() {
    const orderBy = this.$sort.value as Criterion
    const reverse = this.$sortOrder.classList.contains('active')
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

    const $element = this.getElementFor(font.family)
    if (!$element) throw new Error('Could not find element for selected font.')
    $element.classList.add('fp__selected')

    // create variants
    this.$variants.textContent = ''
    this.$variants.append(...DOM.createVariants(font.family.variants))

    // set current variant
    const $weight = this.$variants.querySelector<HTMLInputElement>(`[value="${font.weight}"]`)
    const $italic = this.$variants.querySelector<HTMLButtonElement>('#fp__italic')
    if (!$weight) throw new Error('Could not find weight button for selected font.')
    if (!$italic) throw new Error('Could not find italic button for selected font.')

    $weight.checked = true
    $italic.classList.toggle('active', font.italic)

    this.updateVariant()
    this.updatePreview()
  }

  private updateVariant() {
    const $weight = this.$variants.querySelector<HTMLInputElement>('.fp__weight:checked')
    const $italic = this.$variants.querySelector<HTMLButtonElement>('#fp__italic')
    if (!$weight) throw new Error('Could not find weight button for selected font.')
    if (!$italic) throw new Error('Could not find italic button for selected font.')

    this.selected.weight = parseInt($weight.value) as FontWeight
    this.selected.italic = $italic.classList.contains('active')

    this.updatePreview()

    // disable 'italic' button if font does not support it
    const hasItalic = this.selected.family.variants.includes(this.selected.weight + 'i')
    if (!hasItalic) $italic.classList.remove('active')
    $italic.disabled = !hasItalic
  }

  private createFonts() {
    for (const font of this.getFamilies()) {
      const $item = DOM.createFont(font)
      this.$fonts.append($item)
      this.observer.observe($item)
    }
  }

  private applyTranslations() {
    const dict = translations[this.picker.config.language]

    this.$title.textContent = dict.selectFont
    this.$search.placeholder = dict.search

    this.$subset.append(...DOM.createOptions(dict.subsets))
    this.$categories.append(...DOM.createBadges(dict.categories))

    this.$width.append(...DOM.createOptions(dict.widths))
    this.$thickness.append(...DOM.createOptions(dict.thicknesses))
    this.$complexity.append(...DOM.createOptions(dict.complexities))
    this.$curvature.append(...DOM.createOptions(dict.curvatures))
    this.$sort.append(...DOM.createOptions(dict.sorts))

    this.$preview.textContent = this.picker.config.previewText ?? dict.sampleText
    this.$cancelBtn.textContent = dict.cancel
    this.$pickBtn.textContent = dict.select
  }

  private getEventTarget(event: MouseEvent) {
    return this.getFamilyFor(event.target as HTMLElement)
  }

  private onFontHover(event: MouseEvent) {
    const family = this.getEventTarget(event)
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
    if (!this.getEventTarget(event)) return

    this.hovered = null
    this.updatePreview()
  }

  private onFontClick(event: MouseEvent) {
    const family = this.getEventTarget(event)
    if (!family) return

    if (this.selected.family === family) return
    this.selectFont(Font.parse(family))
  }

  private onFontDoubleClick(event: MouseEvent) {
    if (!this.getEventTarget(event)) return
    this.submit()
  }

  private bindEvents() {
    const filterCallback = () => this.updateFilter()
    this.$categories.addEventListener('click', filterCallback)
    this.$search.addEventListener('input', filterCallback)
    this.$subset.addEventListener('input', filterCallback)
    this.$width.addEventListener('input', filterCallback)
    this.$thickness.addEventListener('input', filterCallback)
    this.$complexity.addEventListener('input', filterCallback)
    this.$curvature.addEventListener('input', filterCallback)

    const sortCallback = () => this.updateSort()
    this.$sort.addEventListener('input', sortCallback)
    this.$sortOrder.addEventListener('click', sortCallback)

    this.$fonts.addEventListener('mouseover', (event) => this.onFontHover(event))
    this.$fonts.addEventListener('mouseout', (event) => this.onFontUnhover(event))
    this.$fonts.addEventListener('click', (event) => this.onFontClick(event))
    this.$fonts.addEventListener('dblclick', (event) => this.onFontDoubleClick(event))

    this.$variants.addEventListener('click', () => this.updateVariant())
    this.$pickBtn.addEventListener('click', () => this.submit())
    this.$cancelBtn.addEventListener('click', () => this.cancel())
  }

  private assignDefaults() {
    DOM.setActiveBadges(this.$categories, this.picker.config.defaultCategories)

    this.$subset.value = this.picker.config.defaultSubset
    this.$width.value = this.picker.config.defaultWidth
    this.$thickness.value = this.picker.config.defaultThickness
    this.$complexity.value = this.picker.config.defaultComplexity
    this.$curvature.value = this.picker.config.defaultCurvature

    this.$sort.value = this.picker.config.sortBy
    this.$sortOrder.classList.toggle('active', this.picker.config.sortReverse)
  }

  async open(picker: FontPicker) {
    if (this.opened) return

    this.opened = true
    this.picker = picker

    this.createFonts()
    this.applyTranslations()
    this.bindEvents()

    this.assignDefaults()
    this.updateSort()
    this.updateFilter()

    this.selectFont(picker.font)

    this.modal.show()
    this.picker.dispatchEvent(new Event('open'))

    await new Promise<void>((resolve) => {
      this.$modal.addEventListener('hidden.bs.modal', () => resolve())
    })
  }

  submit() {
    this.picker.setFont(this.selected)
    this.picker.dispatchEvent(new Event('pick'))
    this.close()
  }

  cancel() {
    this.picker.dispatchEvent(new Event('cancel'))
    this.close()
  }

  close() {
    this.picker.dispatchEvent(new Event('close'))
    this.opened = false
    this.modal.hide()
  }
}
