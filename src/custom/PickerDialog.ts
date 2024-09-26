import dialogContent from '../templates/dialogContent.html?raw'

import * as bootstrap from 'bootstrap'
import * as DOM from '../util/DOMUtil'
import { familyFilter, familySort } from '../util/sortUtil'
import { Font } from '../helpers/Font'
import { FontLoader } from '../helpers/FontLoader'
import { translations } from '../data/translations'

import type { FontFamily } from '../data/fonts'
import type { FontPicker } from './FontPicker'
import type { Category, Criterion, Metric, Subset } from '../data/translations'
import type { Filters } from '../util/sortUtil'
import type { FontWeight } from '../helpers/Font'

export class PickerDialog extends HTMLElement {
  private opened = false
  private picker: FontPicker
  private fontList: FontFamily[]

  private modal: bootstrap.Modal
  private observer: IntersectionObserver

  private selectedVariant: {
    weight: number
    italic: boolean
  }

  private selectedFont: FontFamily
  private hoveredFont: FontFamily | null = null

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
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) return

        const $target = entry.target as HTMLDivElement
        const family = $target.dataset.family

        if (family) FontLoader.load(family)
        this.observer.unobserve($target)
      })
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

  private getFontFamily(family: string) {
    return this.fontList.find((font) => font.family === family)
  }

  private getElementFor(family: string) {
    return this.$fonts.querySelector(`[data-family="${family}"]`)
  }

  private getFontFor($element: HTMLElement) {
    return this.getFontFamily($element.dataset.family!)
  }

  private sortFonts(orderBy: Criterion, reverse = false) {
    const sorted = this.fontList.sort((a, b) => familySort(a, b, orderBy))
    if (reverse) sorted.reverse()
    sorted.forEach((font) => {
      const $element = this.getElementFor(font.family)
      if ($element) this.$fonts.appendChild($element)
    })
  }

  private filterFonts(filters: Filters) {
    const filtered = this.fontList.filter((a) => familyFilter(a, filters))
    const families = filtered.map((filtered) => filtered.family)
    Array.from(this.$fonts.children).forEach(($font) => {
      const family = ($font as HTMLElement).dataset.family!
      const hidden = !families.includes(family)
      $font.classList.toggle('d-none', hidden)
    })
  }

  private updateSort() {
    const orderBy = this.$sort.value as Criterion
    const reverse = this.$sortOrder.classList.contains('active')
    this.sortFonts(orderBy, reverse)
  }

  private updateFilter() {
    this.filterFonts({
      family: this.$search.value,
      subset: this.$subset.value as Subset,
      categories: DOM.getActiveBadges(this.$categories) as Category[],
      complexity: this.$complexity.value as Metric,
      curvature: this.$curvature.value as Metric,
      thickness: this.$thickness.value as Metric,
      width: this.$width.value as Metric,
    })
  }

  private updatePreview() {
    const font = this.hoveredFont ?? this.selectedFont
    this.$preview.style.fontFamily = `"${font.family}"`
  }

  private updateSelected() {
    // deselect previously selected fonts
    Array.from(this.$fonts.querySelectorAll('.fp__selected')).forEach(($font) =>
      $font.classList.remove('fp__selected'),
    )

    this.$variants.textContent = ''
    if (!this.selectedFont) return

    const $element = this.getElementFor(this.selectedFont.family)
    if (!$element) throw new TypeError('Could not find element for selected font.')

    $element.classList.add('fp__selected')

    this.$variants.append(...DOM.createVariants(this.selectedFont.variants))
    this.updateVariant()
  }

  private updateVariant() {
    const $variant = this.$variants.querySelector('.fp__weight:checked') as HTMLInputElement
    const $italic = this.$variants.querySelector('#fp__italic') as HTMLInputElement

    const weight = parseInt($variant.value)
    const italic = $italic.classList.contains('active')

    this.$preview.style.fontWeight = weight.toString()
    this.$preview.style.fontStyle = italic ? 'italic' : 'normal'
    this.selectedVariant = { weight, italic }

    // disable 'italic' button if font does not support it
    const hasItalic = this.selectedFont.variants.includes(weight + 'i')
    if (!hasItalic) $italic.classList.remove('active')
    $italic.disabled = !hasItalic
  }

  private createFonts() {
    this.fontList.forEach((font) => {
      const $item = DOM.createFont(font)
      this.$fonts.append($item)
      this.observer.observe($item)
    })
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

  private onFontHover(event: MouseEvent) {
    const font = this.getFontFor(event.target as HTMLElement)
    if (!font) return
    this.hoveredFont = font
    this.updatePreview()
  }

  private onFontUnhover(event: MouseEvent) {
    if (!this.getFontFor(event.target as HTMLElement)) return
    this.hoveredFont = null
    this.updatePreview()
  }

  private onFontClick(event: MouseEvent) {
    const font = this.getFontFor(event.target as HTMLElement)
    if (!font) return
    if (this.selectedFont === font) return
    this.selectedFont = font
    this.updateSelected()
    this.updatePreview()
  }

  private onFontDoubleClick(event: MouseEvent) {
    if (!this.getFontFor(event.target as HTMLElement)) return
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
    this.fontList = picker.getFontList()

    const defaultFont = this.getFontFamily(picker.font.family)
    if (!defaultFont) throw new TypeError('Could not find the picked font!')
    this.selectedFont = defaultFont

    this.createFonts()
    this.applyTranslations()
    this.bindEvents()

    this.assignDefaults()
    this.updateSort()
    this.updateFilter()
    this.updatePreview()
    this.updateSelected()

    this.modal.show()

    await new Promise<void>((resolve) => {
      this.$modal.addEventListener('hidden.bs.modal', () => resolve())
    })
  }

  submit() {
    const font = new Font(
      this.selectedFont.family,
      this.selectedVariant.weight as FontWeight,
      this.selectedVariant.italic,
    )
    this.picker.setFont(font)
    this.close()
  }

  cancel() {
    this.close()
  }

  close() {
    this.opened = false
    this.modal.hide()
  }
}
