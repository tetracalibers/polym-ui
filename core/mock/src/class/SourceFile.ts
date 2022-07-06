import shell from 'shelljs'
import * as path from 'path'
const { cat, ShellString } = shell

export default class SourceFile {
  protected path: string
  private name: string
  protected extension: string
  protected subExtension?: string
  public readonly src: string

  public constructor(filePath: string) {
    this.path = filePath
    this.name = path.basename(this.path)
    this.extension = path.extname(this.path)
    this.subExtension = this.findSubExtension()
    this.src = cat(this.path).toString().replace(/\r?\n/g, '')
  }

  private findSubExtension(): string | undefined {
    const fileNameParts = this.name.split('.')
    const [subExtension] =
      fileNameParts.length > 2
        ? fileNameParts.slice(0, -1).reverse()
        : [undefined]
    return subExtension
  }

  protected copyFile(outFilePath: string): void {
    new ShellString(this.src).to(outFilePath)
  }
}
