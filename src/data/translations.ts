type Subsets = {
  all: string
  arabic: string
  bengali: string
  'chinese-hongkong': string
  'chinese-simplified': string
  'chinese-traditional': string
  cyrillic: string
  'cyrillic-ext': string
  devanagari: string
  greek: string
  'greek-ext': string
  gujarati: string
  gurmukhi: string
  hebrew: string
  japanese: string
  kannada: string
  khmer: string
  korean: string
  latin: string
  'latin-ext': string
  malayalam: string
  myanmar: string
  oriya: string
  sinhala: string
  tamil: string
  telugu: string
  thai: string
  tibetan: string
  vietnamese: string
}
type Categories = {
  serif: string
  'sans-serif': string
  display: string
  handwriting: string
  monospace: string
}
type Metrics = {
  all: string
  '0.1': string
  '0.3': string
  '0.5': string
  '0.7': string
  '0.9': string
}
type Criteria = {
  name: string
  popularity: string
  width: string
  thickness: string
  complexity: string
  curvature: string
}

export type Subset = keyof Subsets
export type Category = keyof Categories
export type Metric = keyof Metrics
export type Criterion = keyof Criteria

interface Translation {
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

  cancel: string
  select: string
}

interface Translations {
  en: Translation
}
export type Language = keyof Translations

export const translations: Translations = {
  en: {
    selectFont: 'Select a font',
    sampleText: 'The quick brown fox jumps over the lazy dog.',

    filters: 'Filters',
    search: 'Search',

    subsets: {
      all: '(All Subsets)',
      arabic: 'Arabic',
      bengali: 'Bengali',
      'chinese-hongkong': 'Chinese (Hong Kong)',
      'chinese-simplified': 'Chinese (Simplified)',
      'chinese-traditional': 'Chinese (Traditional)',
      cyrillic: 'Cyrillic',
      'cyrillic-ext': 'Cyrillic Extended',
      devanagari: 'Devanagari',
      greek: 'Greek',
      'greek-ext': 'Greek Extended',
      gujarati: 'Gujarati',
      gurmukhi: 'Gurmukhi',
      hebrew: 'Hebrew',
      japanese: 'Japanese',
      kannada: 'Kannada',
      khmer: 'Khmer',
      korean: 'Korean',
      latin: 'Latin',
      'latin-ext': 'Latin Extended',
      malayalam: 'Malayalam',
      myanmar: 'Myanmar',
      oriya: 'Oriya',
      sinhala: 'Sinhala',
      tamil: 'Tamil',
      telugu: 'Telugu',
      thai: 'Thai',
      tibetan: 'Tibetan',
      vietnamese: 'Vietnamese',
    },

    categories: {
      serif: 'Serif',
      'sans-serif': 'Sans-serif',
      display: 'Display',
      handwriting: 'Handwriting',
      monospace: 'Monospace',
    },

    metrics: 'Metrics',
    widths: {
      all: '(All Widths)',
      '0.1': 'Very narrow',
      '0.3': 'Narrow',
      '0.5': 'Medium width',
      '0.7': 'Wide',
      '0.9': 'Very wide',
    },
    thicknesses: {
      all: '(All Thicknesses)',
      '0.1': 'Very thin',
      '0.3': 'Thin',
      '0.5': 'Medium thickness',
      '0.7': 'Thick',
      '0.9': 'Very thick',
    },
    complexities: {
      all: '(All Complexities)',
      '0.1': 'Very Simple',
      '0.3': 'Simple',
      '0.5': 'Medium complexity',
      '0.7': 'Complex',
      '0.9': 'Very complex',
    },
    curvatures: {
      all: '(All Curvatures)',
      '0.1': 'Very straight',
      '0.3': 'Straight',
      '0.5': 'Medium curvature',
      '0.7': 'Curvy',
      '0.9': 'Very Curvy',
    },

    sort: 'Sort',
    sorts: {
      name: 'Sort by Name',
      popularity: 'Sort by Popularity',
      width: 'Sort by Width',
      thickness: 'Sort by Thickness',
      complexity: 'Sort by Complexity',
      curvature: 'Sort by Curvature',
    },

    cancel: 'Cancel',
    select: 'Select',
  },
}
