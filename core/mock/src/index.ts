import shell from 'shelljs'
import { packageDirectory } from 'pkg-dir'
import * as path from 'path'

const { ls, cat, ShellString } = shell

;(async () => {
  const root = await packageDirectory()
  const filePaths = Array.from(ls('-RA', root))
  filePaths.map(filePath => {
    const fileName = path.basename(filePath)
    const fileExtension = path.extname(filePath)
    console.log(fileName, fileExtension)
    //const fileNameParts = fileName.split('.')
    //const [extension] = fileNameParts.reverse()
    //const jsxExtention = ['jsx', 'tsx']
    //const isJsx = jsxExtention.includes(extension)
    //
    //const [secondExtention] =
    //  fileNameParts.length > 2 ? fileNameParts.slice(-1).reverse() : ['']
    //const isNotStyled = secondExtention !== 'styled'

    return
  })

  //jsxFilePaths.map(filePath => {
  //  const src = cat(filePath).toString()
  //  const jsx = src.split(/<\/?StylePatch>/)[1].trim()
  //  const fileExtension = path.extname(filePath)
  //  const styleFilePath = filePath.replace(fileExtension, '.style.xml')
  //  new ShellString(jsx).to(styleFilePath)
  //  return
  //})
})()
