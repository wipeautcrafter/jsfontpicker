import leven from 'leven'

import type { FontFamily } from '../data/fonts'
import type { Category, Criterion, Metric, Subset } from '../data/translations'

export type Filters = {
  family: string
  subset: Subset
  categories: Category[]
  width: Metric
  thickness: Metric
  complexity: Metric
  curvature: Metric
}

export const familySort = (a: FontFamily, b: FontFamily, key: Criterion) => {
  // direct properties
  if (key === 'family') return a.family.localeCompare(b.family)
  if (key === 'popularity') {
    if (a.popularity === undefined && b.popularity === undefined) return 0
    if (a.popularity === undefined) return Infinity
    if (b.popularity === undefined) return -Infinity
    return a.popularity - b.popularity
  }

  // metrics properties
  if (a.metrics === undefined && b.metrics === undefined) return 0
  if (a.metrics === undefined) return Infinity
  if (b.metrics === undefined) return -Infinity

  if (key === 'complexity') return b.metrics.complexity - a.metrics.complexity
  if (key === 'curvature') return b.metrics.curvature - a.metrics.curvature
  if (key === 'thickness') return b.metrics.thickness - a.metrics.thickness
  if (key === 'width') return b.metrics.width - a.metrics.width

  // fallback
  return 0
}

const compareMetric = (value: number | undefined, target: Metric) => {
  if (target === 'all') return true
  if (value === undefined) return false
  return Math.abs(value - parseFloat(target)) < 0.1
}

export const familyFilter = (a: FontFamily, filters: Filters) => {
  // direct properties
  if (filters.family) {
    const difference = leven(a.family.toLowerCase(), filters.family.toLowerCase())
    const threshold = [...a.family].length - [...filters.family].length
    if (difference > threshold) return false
  }

  if (filters.subset !== 'all' && !a.subsets.includes(filters.subset)) return false
  if (!filters.categories.includes(a.category)) return false

  // metrics properties
  if (!compareMetric(a.metrics?.width, filters.width)) return false
  if (!compareMetric(a.metrics?.complexity, filters.complexity)) return false
  if (!compareMetric(a.metrics?.curvature, filters.curvature)) return false
  if (!compareMetric(a.metrics?.thickness, filters.thickness)) return false

  return true
}
