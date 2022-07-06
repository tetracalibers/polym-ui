import * as shell from 'shelljs'

export const normalizedPath: Function = (path: string): string => {
  let clone = path
  clone = clone.slice(0, 1) === '/' ? clone.slice(1) : clone
  clone = clone.slice(-1) === '/' ? clone.slice(0, -1) : clone
  return clone
}

export const getDirRelativeDepth: Function = (dirPath: string): number => {
  return normalizedPath(dirPath).split('/').length
}

export const returnDir: Function = (movedDirPath: string): void => {
  const depth = getDirRelativeDepth(movedDirPath)
  const returnDirPath = depth < 0 ? '.' : new Array(depth).fill('..').join('/')
  shell.cd(returnDirPath)
}

export const doAfterMoveDir: Function = (
  path: string,
  func: Function,
  args = []
): void => {
  if (!shell.test('-e', path)) shell.mkdir('-p', path)
  shell.cd(path)
  func(...args)
  returnDir(path)
}

const _createFile: Function = (contents: string, fileName: string): void => {
  new shell.ShellString(contents).to(fileName)
}

const _appendFile: Function = (contents: string, fileName: string): void => {
  new shell.ShellString(contents).toEnd(fileName)
}

export const createFile: Function = (
  data: string | object,
  filePath: string,
  append = false
): void => {
  //const pathPartsList = normalizedPath(filePath).split('/')
  //const dirPath = [...pathPartsList].slice(0, -1).join('/')
  //const [fileName] = pathPartsList.reverse()
  const contents = typeof data === 'string' ? data : data.toString()
  //doAfterMoveDir(dirPath, append ? _appendFile : _createFile, [
  //  contents,
  //  fileName,
  //])
  if (append) {
    _appendFile(contents, filePath)
  } else {
    _createFile(contents, filePath)
  }
}
