import { A } from 'ts-toolbelt'
import _ from 'lodash'
import shell from 'shelljs'
const { cat, ShellString, test } = shell
import * as path from 'path'
const { extname, basename } = path
import date from 'date-and-time'

interface ComponentFile {
  path: string
  name: string
  extension: string
  subExtension?: string
  isStyled?: A.Equals<Pick<ComponentFile, 'subExtension'>, 'styled'>
}

class ComponentFile implements ComponentFile {
  constructor(path: string) {
    this.path = path
    this.extension = extname(this.path)
    this.name = basename(this.path)
  }

  set setSubExtension(__: string | undefined) {
    this.subExtension = _.chain(_.split(this.name, '.'))
      .dropRight()
      .last()
      .value()
  }

  get src(): string {
    if (test('-e', this.path)) {
      return cat(this.path).toString().replace(/\r?\n/g, '')
    } else {
      return ''
    }
  }

  // prettier-ignore
  get jsx(): string {
    const regexp =  /<(StylePatch)>(?<jsx>.*?)<\/\1>/
    const jsx = regexp.exec(this.src)?.groups?.jsx
    return jsx ? jsx.trim() : ''
  }

  get stylingFilePath(): string {
    return this.path.replace(
      this.name,
      `styp/${this.name.replace(this.extension, '')}_${date.format(
        new Date(),
        'YYYYMMDD-HHmmss'
      )}.styp.jsx`
    )
  }

  initStylingFile(): void {
    new ShellString(this.jsx).to(this.stylingFilePath)
  }
}

export default ComponentFile
