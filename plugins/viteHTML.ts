export default function viteHTML() {
  return {
    name: 'minify-html',
    transform(code: string, id: string) {
      if (/\.html.raw?$/.test(id)) {
        return {
          code: code
            .replace(/<!--.+?-->/gs, '') // comments
            .replace(/\\n/g, '') // newlines
            .replace(/\s\s+/g, ' ') // multiple spaces
            .replace(/\s*<\s*/g, '<') // space between elements
            .replace(/\s*>\s*/g, '>') // space between elements
            .trim(),
          map: null,
        }
      }
    },
  }
}
