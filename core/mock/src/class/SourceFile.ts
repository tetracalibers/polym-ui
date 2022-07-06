import shell from 'shelljs'
import * as path from 'path'
const { cat, ShellString, test } = shell

export default class SourceFile {
  protected path: string
  private name: string
  protected extension: string
  protected subExtension?: string
  protected src: string

  public constructor(filePath: string) {
    this.path = filePath
    this.name = path.basename(this.path)
    this.extension = path.extname(this.path)
    this.subExtension = this.findSubExtension()
    this.src = this.getSrc()
  }

  private getSrc(): string {
    if (test('-e', this.path)) {
      return cat(this.path).toString().replace(/\r?\n/g, '')
    } else {
      return ''
    }
  }

  private findSubExtension(): string | undefined {
    const fileNameParts = this.name.split('.')
    if (fileNameParts.length > 2) {
      const [subExtension] = fileNameParts.slice(0, -1).reverse()
      return subExtension
    } else {
      return undefined
    }
  }

  protected copyFile(outFilePath: string): void {
    new ShellString(this.src).to(outFilePath)
  }
}
