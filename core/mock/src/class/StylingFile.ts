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
    const jsInAttribute = /<[\w]+(?<js>\s*\{.*?\}\s*).*?>/g.exec(this.jsx)
      ?.groups?.js
    if (jsInAttribute) this.jsx = this.jsx.replaceAll(jsInAttribute, '')
    const jsInChildren = />(?<js>\{.*?\})</g.exec(this.jsx)?.groups?.js
    if (jsInChildren) this.jsx = this.jsx.replaceAll(jsInChildren, '')
    return this
  }

  private formatAsXml(): StylingFile {
    return this.stylePatchWrap().deleteJsProgramString()
  }

  public format(): StylingFile {
    this.jsx = format(this.formatAsXml().jsx, {
      indentation: '  ',
    })
    return this
  }

  private init(): void {
    this.format().copyFile(this.path)
  }
}
