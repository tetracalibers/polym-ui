import SourceFile from './SourceFile'
import format from 'xml-formatter'

export default class StylingFile extends SourceFile {
  public jsx: string

  public constructor(filePath: string, jsx: string) {
    super(filePath)
    this.jsx = jsx
  }

  private stylePatchWrap(): StylingFile {
    this.jsx = `<StylePatch>${this.jsx}</StylePatch>`
    return this
  }

  private deleteJsProgramString(): StylingFile {
    const invalidRegExps = [
      /<[\w]+(?<js>\s*\{.*?\}\s*).*?>/g,
      />(?<js>\{.*?\})</g,
    ]
    invalidRegExps.map(regExp => {
      const js = regExp.exec(this.jsx)?.groups?.js
      if (js) this.jsx = this.jsx.replaceAll(js, '')
    })
    return this
  }

  private formatAsXml(): StylingFile {
    return this.stylePatchWrap().deleteJsProgramString()
  }

  public format(): string {
    return format(this.formatAsXml().jsx, {
      indentation: '  ',
    })
  }

  public init(): void {
    const jsx = this.format()
    if (jsx !== this.src) {
      this.src = jsx
    }
    this.copyFile(this.path)
  }
}
