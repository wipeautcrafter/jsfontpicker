import fontData from './_fonts'

export interface GoogleFont {
  family: string
  category: string
  variants: string[]
  subsets: string[]
  popularity: number
  metrics: {
    thickness: number
    density: number
    complexity: number
    curvature: number
  }
}

export const googleFonts: GoogleFont[] = fontData.split('|').map((item) => {
  const [family, category, a, b, c, d, e, f, g] = item.split('/')
  return {
    family,
    category,
    variants: a.split(','),
    subsets: b.split(','),
    popularity: parseInt(c),
    metrics: {
      thickness: parseFloat(d),
      density: parseFloat(e),
      complexity: parseFloat(f),
      curvature: parseFloat(g),
    },
  }
})
