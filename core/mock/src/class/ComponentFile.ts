import SourceFile from './SourceFile'

export default class ComponentFile extends SourceFile {
  private readonly STYLING_FILE_EXTENSION = '.style.xml'
  private readonly STYLED_JSX_SECOND_EXTENSION = 'styled'
  private readonly ARROW_EXTENSION = ['tsx', 'jsx']
  private isStyled: boolean

  public constructor(filePath: string) {
    super(filePath)
    this.isStyled = this.subExtension === this.STYLED_JSX_SECOND_EXTENSION
  }

  private getJsx(src: string): string {
    return src.split(/<\/?StylePatch>/)[1].trim()
  }

  private getStylingFilePath(): string {
    return this.path.replace(this.extension, this.STYLING_FILE_EXTENSION)
  }
}
