import type { Category, Subset } from './translations'

export interface FamilyProps {
  name: string
  variants: string[]
  category?: Category
  subsets?: Subset[]
  popularity?: number
  metrics?: {
    width: number
    thickness: number
    complexity: number
    curvature: number
  }
  url?: string
}

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
