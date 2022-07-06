import shell from 'shelljs'
import * as path from 'path'
import { packageDirectory } from 'pkg-dir'
const { ls, cat, ShellString } = shell

const JSX_EXTENTION = ['jsx', 'tsx']
const NODE_MODULES_DIR = 'node_modules'
const STYLED_JSX_SECOND_EXTENTION = 'styled'
const STYLE_XML_FILE_EXTENTION = '.style.xml'

;(async () => {
  const root = await packageDirectory()
  const filePaths = Array.from(ls('-RA', root))
  const jsxFilePaths = filePaths.filter(filePath => {
    const pathParts = filePath.split('/')
    const isNotNodeModules = pathParts[0] !== NODE_MODULES_DIR

    const fileName = path.basename(filePath)
    const fileNameParts = fileName.split('.')
    const extension = path.extname(filePath)
    const isJsx = JSX_EXTENTION.includes(extension)

    const [secondExtention] =
      fileNameParts.length > 2 ? fileNameParts.slice(-1).reverse() : ['']
    const isNotStyled = secondExtention !== STYLED_JSX_SECOND_EXTENTION

    return isNotNodeModules && isJsx && isNotStyled
  })

  jsxFilePaths.map(filePath => {
    const src = cat(filePath).toString()
    const jsx = src.split(/<\/?StylePatch>/)[1].trim()
    const fileExtension = path.extname(filePath)
    const styleFilePath = filePath.replace(
      fileExtension,
      STYLE_XML_FILE_EXTENTION
    )
    new ShellString(jsx).to(styleFilePath)
    return
  })
})()
