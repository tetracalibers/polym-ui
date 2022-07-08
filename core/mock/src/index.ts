import ComponentFile from './class/ComponentFile'

const path = 'src/components/atoms/Balloon/index.tsx'
const tsxFile = new ComponentFile(path)

console.log(tsxFile.jsx)
console.log(tsxFile.stylingFilePath)
console.log(tsxFile.isStyled)
