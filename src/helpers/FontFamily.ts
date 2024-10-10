import type { FamilyProps } from '../types/fonts'
import type { Category, Subset } from '../types/translations'

export interface FontFamily extends FamilyProps {}

export class FontFamily {
  constructor(family: FamilyProps) {
    Object.assign(this, family)
  }

  toString() {
    return this.name
  }

  getDefaultVariant() {
    const weights = Array.from(new Set(this.variants))
    return weights.toSorted((a, b) => {
      return Math.abs(parseInt(a) - 400) - Math.abs(parseInt(b) - 400)
    })[0]
  }

  // parse font family from compressed format
  static parse(raw: string) {
    const [name, cate, vari, subs, popu, widt, thic, comp, curv] = raw.split('/')

    const family = new FontFamily({
      name,
      category: cate as Category,
      variants: vari.split(','),
      subsets: subs.split(',') as Subset[],
    })

    if (popu) family.popularity = parseInt(popu)
    if (widt && thic && comp && curv)
      family.metrics = {
        width: parseFloat(widt),
        thickness: parseFloat(thic),
        complexity: parseFloat(comp),
        curvature: parseFloat(curv),
      }

    return family
  }
}
