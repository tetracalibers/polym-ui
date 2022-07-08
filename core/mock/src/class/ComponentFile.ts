import { A } from 'ts-toolbelt'
import _ from 'lodash'
import shell from 'shelljs'
const { cat, ShellString, test } = shell
import SuperExpressive from 'super-expressive'

interface ComponentFile {
  path: string
  name: string
  extension: 'tsx' | 'jsx'
  subExtension?: string
  isStyled?: A.Equals<Pick<ComponentFile, 'subExtension'>, 'styled'>
}

class ComponentFile implements ComponentFile {
  findSubExtension(): string | undefined {
    return _.chain(_.split(this.name, '.')).dropRight().last().value()
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
    // /<(StylePatch)>(?<jsx>.*?)<\/\1>/
    const regexp = SuperExpressive()
      .startOfInput
        .string('<StylePatch>')
        .namedCapture('jsx')
          .anyOf
            .word
            .nonWord
          .end()
        .end()
        .string('</StylePatch>')
      .endOfInput
      .toRegex()
    const jsx = regexp.exec(this.src)?.groups?.jsx
    return jsx ? jsx.trim() : ''
  }

  get stylingFilePath(): string {
    return this.path.replace(this.extension, '.styled' + this.extension)
  }

  copyFile(outFilePath: string): void {
    new ShellString(this.src).to(outFilePath)
  }
}

export default ComponentFile
