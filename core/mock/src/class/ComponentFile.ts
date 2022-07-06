import SourceFile from './SourceFile'

export default class ComponentFile extends SourceFile {
  private readonly STYLING_FILE_EXTENSION = '.style.jsx'
  private readonly STYLED_JSX_SECOND_EXTENSION = 'styled'
  private readonly ARROW_EXTENSION = ['tsx', 'jsx']
  private isStyled: boolean

  public constructor(filePath: string) {
    super(filePath)
    this.isStyled = this.subExtension === this.STYLED_JSX_SECOND_EXTENSION
  }

  public getJsx(): string {
    const regexp = /<(StylePatch)>(?<jsx>.*?)<\/\1>/
    const jsx = regexp.exec(this.src)?.groups?.jsx
    return jsx ? jsx.trim() : ''
  }

  public getStylingFilePath(): string {
    return this.path.replace(this.extension, this.STYLING_FILE_EXTENSION)
  }
}
