import _googleFonts from './fonts/_googleFonts.txt?raw'
import _systemFonts from './fonts/_systemFonts.txt?raw'

import type { Category, Subset } from './translations'

export interface FontFamily {
  family: string
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

const decodeFonts = (data: string) =>
  data.split('|').map((item) => {
    const [family, category, a, b, c, d, e, f, g] = item.split('/')

    const font: FontFamily = {
      family,
      category: category as Category,
      variants: a.split(','),
      subsets: b.split(',') as Subset[],
    }

    if (c) font.popularity = parseInt(c)
    if (d && e && f && g)
      font.metrics = {
        width: parseFloat(d),
        thickness: parseFloat(e),
        complexity: parseFloat(f),
        curvature: parseFloat(g),
      }

    return font
  })

export const googleFonts = decodeFonts(_googleFonts)
export const systemFonts = decodeFonts(_systemFonts)
