import dialogContent from '../templates/dialogContent.html?raw'

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
  private override: Partial<PickerConfig>

  private observer: IntersectionObserver

  private selected: Font | null
  private hovered: Font | null = null

  private modal: Modal

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

  private $filtersText: HTMLSpanElement
  private $metricsText: HTMLSpanElement
  private $sortText: HTMLSpanElement

  private $clearFiltersBtn: HTMLButtonElement

  private $cancelBtn: HTMLButtonElement
  private $clearBtn: HTMLButtonElement
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
    parent.insertAdjacentHTML('afterbegin', dialogContent)

    this.$modal = document.querySelector('#fp__modal')!
    this.$modalBackdrop = document.querySelector('#fp__backdrop')!
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

    this.$clearFiltersBtn = this.$modal.querySelector('#fp__clear-filters')!

    this.$cancelBtn = this.$modal.querySelector('#fp__cancel')!
    this.$clearBtn = this.$modal.querySelector('#fp__clear')!
    this.$pickBtn = this.$modal.querySelector('#fp__pick')!

    this.$filtersText = this.$modal.querySelector('#fp__t-filters')!
    this.$metricsText = this.$modal.querySelector('#fp__t-metrics')!
    this.$sortText = this.$modal.querySelector('#fp__t-sort')!

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

    if (this.selected) {
      const $selected = this.getElementFor(this.selected.family)
      this.$fonts.prepend($selected)
    }

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

    if (font) {
      this.$preview.style.fontFamily = `"${font.family}"`
      this.$preview.style.fontWeight = font.weight.toString()
      this.$preview.style.fontStyle = font.style
    } else {
      this.$preview.style.removeProperty('font-family')
      this.$preview.style.removeProperty('font-weight')
      this.$preview.style.removeProperty('font-style')
    }
  }

  private selectFont(font: Font | null) {
    // deselect previously selected fonts
    for (const $font of this.$fonts.querySelectorAll('.fp__selected')) {
      $font.classList.remove('fp__selected')
    }

    // set selected font
    this.selected = font
    if (!font) return

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
    if (!this.selected) return

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
    $italic.checked = italic

    this.selected = new Font(this.selected.family, weight, italic)
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

    this.$filtersText.textContent = dict.filters
    this.$metricsText.textContent = dict.metrics
    this.$sortText.textContent = dict.sort

    this.$modal.querySelector('#fp__t-clear-filters')!.textContent = dict.clearFilters

    this.$modal.querySelector('#fp__t-cancel')!.textContent = dict.cancel
    this.$modal.querySelector('#fp__t-clear')!.textContent = dict.clear
    this.$modal.querySelector('#fp__t-pick')!.textContent = dict.select
  }

  private onFontHover(event: MouseEvent) {
    const family = this.getFamilyFor(event.target!)
    if (!family) return

    // to prevent different variant for selected font being previewed
    if (family === this.selected?.family) {
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
    if (!family || family === this.selected?.family) return
    this.selectFont(Font.parse(family))
  }

  private onFontDoubleClick(event: MouseEvent) {
    if (!this.getFamilyFor(event.target!)) return
    this.submit()
  }

  private selectClosestFont(excluded: boolean, reverse: boolean, $from?: Element | null) {
    if (!this.selected) {
      ;(this.$fonts.firstElementChild as HTMLButtonElement).click()
      return
    }

    let $target = $from ? ($from as HTMLElement) : this.getElementFor(this.selected.family)

    while (excluded || $target.classList.contains('fpb__hidden')) {
      excluded = false

      const $next = reverse ? $target.previousElementSibling : $target.nextElementSibling
      if (!$next) return

      $target = $next as HTMLElement
    }

    this.hovered = null

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
      if (this.selected) this.favouriteFont(this.selected)
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
    const filtersCallback = () => {
      this.filtersChanged(this.$filtersText)
      this.updateFilter()
    }

    this.$categories.addEventListener('input', filtersCallback)
    this.$search.addEventListener('input', filtersCallback)
    this.$subset.addEventListener('input', filtersCallback)

    const metricsCallback = () => {
      this.filtersChanged(this.$metricsText)
      this.updateFilter()
    }

    this.$width.addEventListener('input', metricsCallback)
    this.$thickness.addEventListener('input', metricsCallback)
    this.$complexity.addEventListener('input', metricsCallback)
    this.$curvature.addEventListener('input', metricsCallback)

    const sortCallback = () => {
      this.filtersChanged(this.$sortText)
      this.updateSort()
    }

    this.$sort.addEventListener('input', sortCallback)
    this.$sortOrder.addEventListener('input', sortCallback)

    this.$fonts.addEventListener('mouseover', (event) => this.onFontHover(event))
    this.$fonts.addEventListener('mouseout', (event) => this.onFontUnhover(event))
    this.$fonts.addEventListener('click', (event) => this.onFontClick(event))
    this.$fonts.addEventListener('dblclick', (event) => this.onFontDoubleClick(event))

    this.$variants.addEventListener('input', () => this.updateVariant())

    this.$clearFiltersBtn.addEventListener('click', () => {
      this.override = {}
      this.assignDefaults()
    })

    this.$pickBtn.addEventListener('click', () => this.submit())

    this.$clearBtn?.addEventListener('click', () => this.clear())
    this.$cancelBtn?.addEventListener('click', () => this.cancel())

    this.$modalBackdrop.addEventListener('click', () => this.cancel())
    this.$closeBtn.addEventListener('click', () => this.cancel())

    this.$modal.addEventListener('keydown', (event) => this.onKeyPressed(event))
  }

  private applyConfiguration() {
    // set favourites
    this.picker.favourites.forEach((family) => this.getElementFor(family).classList.add('fp__fav'))

    // hide variants
    this.$variants.classList.toggle('fpb__hidden', !this.config.variants)

    // hide buttons
    if (!this.config.showClearButton) this.$clearBtn.remove()
    if (!this.config.showCancelButton) this.$cancelBtn.remove()
  }

  private filtersChanged($target: HTMLElement | null) {
    if ($target) {
      $target.classList.add('fp__changed')
    } else {
      this.$filtersText.classList.remove('fp__changed')
      this.$metricsText.classList.remove('fp__changed')
      this.$sortText.classList.remove('fp__changed')
    }

    this.$clearFiltersBtn.classList.toggle('fpb__hidden', !$target)
  }

  private assignDefaults() {
    const config = { ...this.config, ...this.override }

    this.$search.value = config.defaultSearch

    DOM.setActiveBadges(this.$categories, config.defaultCategories)
    this.$subset.value = config.defaultSubset
    this.$width.value = config.defaultWidth
    this.$thickness.value = config.defaultThickness
    this.$complexity.value = config.defaultComplexity
    this.$curvature.value = config.defaultCurvature
    this.$sort.value = config.sortBy
    this.$sortOrder.checked = config.sortReverse

    // Apply changed defaults
    this.updateSort()
    this.updateFilter()

    // If no overrides were passed, don't check
    this.filtersChanged(null)
    if (!Object.values(this.override).length) return

    // Update filters clear button
    const filters = [
      this.config.defaultSearch !== this.override.defaultSearch,
      JSON.stringify(this.config.defaultCategories.toSorted()) !==
        JSON.stringify(this.override.defaultCategories?.toSorted()),
      this.config.defaultSubset !== this.override.defaultSubset,
    ]

    if (filters.some((v) => v)) this.filtersChanged(this.$filtersText)

    const metrics = [
      this.config.defaultWidth !== this.override.defaultWidth,
      this.config.defaultThickness !== this.override.defaultThickness,
      this.config.defaultComplexity !== this.override.defaultComplexity,
      this.config.defaultCurvature !== this.override.defaultCurvature,
    ]

    if (metrics.some((v) => v)) this.filtersChanged(this.$metricsText)

    const sort = [
      this.config.sortBy !== this.override.sortBy,
      this.config.sortReverse !== this.override.sortReverse,
    ]

    if (sort.some((v) => v)) this.filtersChanged(this.$sortText)
  }

  private storeDefaults() {
    const config: Partial<PickerConfig> = {
      defaultSearch: this.$search.value,
      defaultCategories: DOM.getActiveBadges(this.$categories) as Category[],
      defaultSubset: this.$subset.value as Subset,
      defaultWidth: this.$width.value as Metric,
      defaultThickness: this.$thickness.value as Metric,
      defaultComplexity: this.$complexity.value as Metric,
      defaultCurvature: this.$curvature.value as Metric,
      sortBy: this.$sort.value as Criterion,
      sortReverse: this.$sortOrder.checked,
    }

    this.picker.setOverride(config)
  }

  async open(picker: FontPicker) {
    if (this.opened) return

    this.opened = true
    this.picker = picker

    this.config = this.picker.getConfig()
    this.override = this.picker.getOverride()

    this.applyTranslations()
    this.bindEvents()

    this.createLazyFontList()
    this.selectFont(picker.font)

    this.applyConfiguration()
    this.assignDefaults()

    requestAnimationFrame(() => {
      this.modal.open()
      this.picker.emit('open')
      this.modal.once('opened', () => {
        this.picker.emit('opened')
        this.$fonts.focus()
      })
    })

    // Destroy elements without blocking
    this.modal.once('closed', () => {
      this.picker.emit('close')
      this.$modal.remove()
      this.$modalBackdrop.remove()
    })

    // Resolve when modal starts closing
    await new Promise<void>((resolve) => {
      this.modal.once('closing', () => resolve())
    })

    this.storeDefaults()
  }

  submit() {
    this.picker.setFont(this.selected, true /* Emit events */)
    //this.picker.emit('pick', this.selected)
    this.close()
  }

  clear() {
    this.picker.clear(true /* Emit events */)
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
    this.$modal.remove()
  }
}
