import SourceFile from './SourceFile'
import format from 'xml-formatter'
import convert from 'xml-js'
import unquote from 'unquote'
import { createJsonFile, toJSON } from '@polyhex-utility/json'

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

  private toJson(): string {
    const source = this.src.replaceAll('{{', '').replaceAll('}}', '')
    const jsonString = convert.xml2json(source, {
      compact: true,
      spaces: 2,
      nativeType: true,
      trim: true,
    })
    return JSON.parse(jsonString, (key, value) => {
      if (key === '_text') {
        const parts = value.split(',')
        console.log(parts)
        type cssSet = Map<string, string>
        let inNest = false
        const css = parts.reduce((prevState: cssSet, line: string) => {
          //if (!inNest) return

          const unspacedLine = line.trim()

          const validCssRegExp = /(?<property>[_\w]+?):\s*(?<value>.+)/g.exec(
            unspacedLine
          )
          if (validCssRegExp) {
            const grouping = validCssRegExp.groups
            const property = grouping?.property
            const value = grouping?.value
            //const isNestStart = value && /\{/g.test(value)
            //if (isNestStart) return (inNest = false)
            if (property && value) prevState.set(property, unquote(value))
          } else {
            const prevLine = [...prevState].pop()
            if (prevLine) {
              const [prevProperty, prevValue] = prevLine
              prevState.set(prevProperty, `${prevValue},${unquote(line)}`)
            }
          }
          return prevState
        }, new Map())
        console.log(Object.fromEntries(css))
      }
    })
  }

  public dumpJson(): void {
    //createJsonFile(this.toJson(), this.path.replace('.jsx', ''))
    this.toJson()
  }
}
