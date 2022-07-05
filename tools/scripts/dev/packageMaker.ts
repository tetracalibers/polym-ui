/** rootで実行 */

import { exec, cd } from 'shelljs'
import { packageDirectory } from 'pkg-dir'

export class PackageMaker {
  prefix: string
  packageNames: Array<string>
  cwd: string

  constructor(packageNames: Array<string>, prefix = '') {
    this.packageNames = packageNames
    this.prefix = prefix.length > 0 ? prefix + '/' : prefix
    this.cwd = process.cwd()
    cd('../..')
  }

  private returnEntryPoint: Function = (): Promise<boolean> => {
    cd(pkg.name)
    return new Promise<boolean>(resolve => resolve(true))
  }

  public makePackage: Function = (
    packageNames: Array<string>,
    prefix = ''
  ): Promise<boolean> => {
    packageNames.map((basename: string) => {
      const fullname = prefix.length > 0 ? `${prefix}/${basename}` : basename
      exec(`lerna create ${fullname} --yes`)
    })
    this.returnEntryPoint()
    return new Promise(resolve => resolve(true))
  }
}
