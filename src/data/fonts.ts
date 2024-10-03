import { FontFamily } from '../helpers/FontFamily'
import _googleFonts from './fonts/_googleFonts.txt?raw'
import _systemFonts from './fonts/_systemFonts.txt?raw'

export const googleFonts = _googleFonts.split('|').map(FontFamily.parse)
export const systemFonts = _systemFonts.split('|').map(FontFamily.parse)
