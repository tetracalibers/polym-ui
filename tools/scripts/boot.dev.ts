import { PackageMaker } from './dev/packageMaker'
import { pwd } from 'shelljs'

const prefix = '@react-polyhex-ui'

const addPackages = [
  // components
  'animation',
  'background',
  'block',
  'atomic',
  'navigation',
  'form',
  'media',
  'link',
  'button',
  'content',
  'feedback',
  'modal',
  'graph',
  'table',
  'counter',
  // templates
  'crud',
  'editor',
  'form-builder',
  'spreadsheet',
  'operational-list',
  'search-function',
  'filtering',
  'management-system',
]

//const maker = new PackageMaker(addPackages, prefix)
//maker.makePackage()

console.log(pwd().toString())
