import shell from 'shelljs'
import * as path from 'path'
const { cat } = shell

export default class SourceFile {
  protected path: string
  private name: string
  protected extension: string
  protected subExtension?: string

  public constructor(filePath: string) {
    this.path = filePath
    this.name = path.basename(this.path)
    this.extension = path.extname(this.path)
    this.subExtension = this.findSubExtension()
  }

  public get src(): string {
    return cat(this.path).toString()
  }

  private findSubExtension(): string | undefined {
    const fileNameParts = this.name.split('.')
    const [subExtension] =
      fileNameParts.length > 2 ? fileNameParts.slice(-1).reverse() : [undefined]
    return subExtension
  }
}
