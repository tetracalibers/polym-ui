import { getLernaRoot, returnDir, normalizedPath } from '@polyhex-utility/shell'
import shell from 'shelljs'
import * as Diff from 'diff'
import rimraf from 'rimraf'

const { cd, rm, mkdir, exec, cp, touch, cat, ShellString } = shell

type beforeStr = {
  count: number
  value: string
}

type afterStr = {
  count: number
  added: boolean | undefined
  removed: boolean | undefined
  value: string
}

type strChangeLog = [beforeStr, afterStr]

const prefixFormatter = (prefix: string): string => {
  return normalizedPath(prefix).length > 0 ? prefix + '/' : ''
}

export const backToCwd = (pathChangeLog: strChangeLog) => {
  const [, { added, removed, value }] = pathChangeLog
  added ? cd(value) : returnDir(removed)
}

export const packageMaker = (
  packageNames: Array<string>,
  prefix = ''
): Promise<strChangeLog> => {
  return getLernaRoot()
    .then((root: string) => {
      cd(root)
      return Diff.diffWords(root, process.cwd())
    })
    .then((moveLog: strChangeLog) => {
      packageNames.map((basename: string) => {
        const fullname = prefixFormatter(prefix) + basename
        exec(`lerna create ${fullname} --yes`)
      })
      return moveLog
    })
}

const batch = (root: string, packageName: string, modelDirName: string) => {
  cd(root + '/packages/' + packageName)
  exec('yarn add -D rimraf')
  exec('rimraf __tests__')
  exec('rimraf lib')
  mkdir('src')
  cd('src')
  touch('index.ts')
  cd('../')
  const copyConfig = ['tsconfig.json', 'rollup.config.js', 'package.json']
  copyConfig.map((config: string) => {
    cp(`../${modelDirName}/${config}`, '.')
  })
  const pkg = cat('./package.json').toString()
  new ShellString(pkg.replace(modelDirName, packageName)).to('./package.json')
}

export const packageInitializer = (packageNames: Array<string>) => {
  getLernaRoot().then((root: string) => {
    packageNames.map((name: string) => batch(root, name, 'layout'))
  })
}
