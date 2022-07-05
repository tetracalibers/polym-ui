import shell from 'shelljs'
import { packageDirectory } from 'pkg-dir'

const checkIsLernaRoot: Function = (): Promise<boolean> =>
  packageDirectory()
    .then((dir: string) => dir + '/package.json')
    .then((filePath: string) => shell.cat(filePath).toString())
    .then((content: string) => JSON.parse(content))
    .then((json: object) => Object.keys(json).includes('workspaces'))

export const getLernaRoot: Function = async (): Promise<string> =>
  checkIsLernaRoot().then((isRoot: boolean) => {
    if (isRoot) {
      return shell.pwd().toString()
    } else {
      shell.cd('..')
      return getLernaRoot()
    }
  })
