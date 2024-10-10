import type { Language, Category, Criterion, Metric, Subset } from '../types/translations'
import type { FamilyProps } from '../types/fonts'

export interface PickerConfig {
  language: Language
  container: HTMLElement
  previewText?: string

  font: string
  verbose: boolean
  variants: boolean

  favourites: string[]
  saveFavourites: boolean
  storageKey: string

  defaultSubset: Subset
  defaultCategories: Category[]
  defaultWidth: Metric
  defaultThickness: Metric
  defaultComplexity: Metric
  defaultCurvature: Metric

  sortBy: Criterion
  sortReverse: boolean

  googleFonts: string[] | null
  systemFonts: string[] | null

  extraFonts: FamilyProps[]
}

export interface PickerEventMap extends HTMLElementEventMap {
  open: Event
  pick: Event
  cancel: Event
  close: Event
}
