import dialogContent from '../templates/dialogContent.html?raw'

import * as bootstrap from 'bootstrap'
import * as DOM from '../util/DOMUtil'
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

export class PickerDialog extends HTMLElement {
  private opened = false
  private picker: FontPicker
  private config: PickerConfig

  private modal: bootstrap.Modal
  private observer: IntersectionObserver

  private selected: Font
  private hovered: Font | null = null

  private $modal: HTMLDivElement
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
    const $font = this.$fonts.querySelector(`[data-family="${family.name}"]`)
    if (!$font) throw new Error(`Could not find element for '${family.name}'!`)
    return $font
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
    this.getElementFor(font.family).classList.add('fp__selected')

    if (!this.config.variants) return

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
  }

  private favouriteFont(font: Font) {
    const $family = this.getElementFor(font.family)
    const value = $family.classList.toggle('fp__fav')
    this.picker.markFavourite(font.family, value)
    this.updateSort()
  }

  private updateVariant() {
    if (!this.config.variants) return

    const $weight = this.$variants.querySelector<HTMLInputElement>('.fp__weight:checked')
    const $italic = this.$variants.querySelector<HTMLButtonElement>('#fp__italic')

    if (!$weight) throw new Error('Could not find weight button for selected font.')
    if (!$italic) throw new Error('Could not find italic button for selected font.')

    let weight = parseInt($weight.value) as FontWeight
    let italic = $italic.classList.contains('active')

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

  private createFonts() {
    for (const font of this.getFamilies()) {
      const $item = DOM.createFont(font)
      this.$fonts.append($item)
      this.observer.observe($item)
    }
  }

  private applyTranslations() {
    const dict = translations[this.config.language]

    this.$search.placeholder = dict.search
    this.querySelector('#fp__title')!.textContent = dict.selectFont

    this.$subset.append(...DOM.createOptions(dict.subsets))
    this.$categories.append(...DOM.createBadges(dict.categories))

    this.$width.append(...DOM.createOptions(dict.widths))
    this.$thickness.append(...DOM.createOptions(dict.thicknesses))
    this.$complexity.append(...DOM.createOptions(dict.complexities))
    this.$curvature.append(...DOM.createOptions(dict.curvatures))
    this.$sort.append(...DOM.createOptions(dict.sorts))

    this.$preview.textContent = this.config.previewText ?? dict.sampleText

    this.querySelector('#fp__t-filters')!.textContent = dict.filters
    this.querySelector('#fp__t-metrics')!.textContent = dict.metrics
    this.querySelector('#fp__t-sort')!.textContent = dict.sort
    this.querySelector('#fp__t-cancel')!.textContent = dict.cancel
    this.querySelector('#fp__t-pick')!.textContent = dict.select
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
    DOM.setActiveBadges(this.$categories, this.config.defaultCategories)

    this.$subset.value = this.config.defaultSubset
    this.$width.value = this.config.defaultWidth
    this.$thickness.value = this.config.defaultThickness
    this.$complexity.value = this.config.defaultComplexity
    this.$curvature.value = this.config.defaultCurvature

    this.$sort.value = this.config.sortBy
    this.$sortOrder.classList.toggle('active', this.config.sortReverse)

    // set favourites
    this.picker.favourites.forEach((family) => this.getElementFor(family).classList.add('fp__fav'))

    // hide variants
    this.$variants.classList.toggle('d-none', !this.config.variants)
  }

  async open(picker: FontPicker) {
    if (this.opened) return

    this.opened = true
    this.picker = picker
    this.config = this.picker.getConfig()

    this.createFonts()
    this.applyTranslations()
    this.bindEvents()

    this.selectFont(picker.font)

    this.assignDefaults()
    this.updateSort()
    this.updateFilter()

    this.modal.show()
    this.$modal.focus() // prevent previously opened dialog from taking focus
    this.picker.dispatchEvent(new Event('open'))

    await new Promise<void>((resolve) => {
      this.$modal.addEventListener('hidden.bs.modal', () => resolve())
    })

    this.picker.dispatchEvent(new Event('close'))
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
    this.opened = false
    this.modal.hide()
  }
}
