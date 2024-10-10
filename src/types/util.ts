import type { Category, Metric, Subset } from '../types/translations'

export type Filters = {
  name: string
  subset: Subset
  categories: Category[]
  width: Metric
  thickness: Metric
  complexity: Metric
  curvature: Metric
}
