import { getLernaRoot, returnDir, normalizedPath } from '@polyhex-utility/shell'
import shell from 'shelljs'
import * as Diff from 'diff'

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

const backToCwd = (pathChangeLog: strChangeLog) => {
  const [, { added, removed, value }] = pathChangeLog
  added ? shell.cd(value) : returnDir(removed)
}

export const packageMaker = (
  packageNames: Array<string>,
  prefix = ''
): void => {
  getLernaRoot()
    .then((root: string) => {
      shell.cd(root)
      return Diff.diffWords(root, process.cwd())
    })
    .then((moveLog: strChangeLog) => {
      packageNames.map((basename: string) => {
        const fullname = prefixFormatter(prefix) + basename
        shell.exec(`lerna create ${fullname} --yes`)
      })
      backToCwd(moveLog)
    })
}
