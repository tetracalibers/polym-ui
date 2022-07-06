import shell from 'shelljs'
import { packageDirectory } from 'pkg-dir'
const { ls } = shell

export default class ReactProject {
  protected root?: string
  private static project: ReactProject
  private readonly NODE_MODULES_DIR = 'node_modules'

  private constructor() {}

  public static get instance(): ReactProject {
    return this.project || (this.project = new ReactProject())
  }

  private async findRoot(): Promise<string> {
    return (this.root = await packageDirectory())
  }

  private async files(dir: string): Promise<string[]> {
    return await Array.from(ls('-RA', dir))
  }

  private isInNodeModule(path: string): boolean {
    const pathParts = path.split('/')
    return pathParts[0] === this.NODE_MODULES_DIR
  }
}
