export type Language = 'en' | 'nl' | 'de' | 'es' | 'fr'

export type Subset =
  | 'all'
  | 'arabic'
  | 'bengali'
  | 'chinese-hongkong'
  | 'chinese-simplified'
  | 'chinese-traditional'
  | 'cyrillic'
  | 'cyrillic-ext'
  | 'devanagari'
  | 'greek'
  | 'greek-ext'
  | 'gujarati'
  | 'gurmukhi'
  | 'hebrew'
  | 'japanese'
  | 'kannada'
  | 'khmer'
  | 'korean'
  | 'latin'
  | 'latin-ext'
  | 'malayalam'
  | 'myanmar'
  | 'oriya'
  | 'sinhala'
  | 'tamil'
  | 'telugu'
  | 'thai'
  | 'tibetan'
  | 'vietnamese'

export type Category = 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace'
export type Metric = 'all' | '0!' | '1!' | '2!' | '3!' | '4!'
export type Criterion = 'name' | 'popularity' | 'width' | 'thickness' | 'complexity' | 'curvature'

type Subsets = { [subset in Subset]: string }
type Categories = { [category in Category]: string }
type Metrics = { [metric in Metric]: string }
type Criteria = { [criterion in Criterion]: string }

export interface Translation {
  selectFont: string
  sampleText: string

  filters: string
  search: string

  subsets: Subsets
  categories: Categories

  metrics: string
  widths: Metrics
  thicknesses: Metrics
  complexities: Metrics
  curvatures: Metrics

  sort: string
  sorts: Criteria

  clear: string
  cancel: string
  select: string
}

export type Translations = { [lang in Language]: Translation }
