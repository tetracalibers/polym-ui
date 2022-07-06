import StylingFile from './class/StylingFile'
import ComponentFile from './class/ComponentFile'

const path = 'src/components/atoms/Balloon/index.tsx'
const tsxFile = new ComponentFile(path)
const styleXmlFile = new StylingFile(
  tsxFile.getStylingFilePath(),
  tsxFile.getJsx()
).format()
console.log(styleXmlFile.jsx)
