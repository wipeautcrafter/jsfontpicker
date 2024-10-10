import type { Category, Subset } from './translations'

export interface FamilyProps {
  name: string
  category: Category
  variants: string[]
  subsets: Subset[]
  popularity?: number
  metrics?: {
    width: number
    thickness: number
    complexity: number
    curvature: number
  }
}

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
