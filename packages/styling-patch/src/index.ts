import { groupList } from 'mdn-data/css/definitions.json'
import { cssKeywordList } from './generator/cssKeywordList'
import { createJsonFile } from './util/forJson'
import alasql from 'alasql'

const mdnModuleGroupList = groupList.enum

//createJsonFile(cssKeywordList, 'dump/cssKeywordList')

const getMaxModuleCount = `
  SELECT MAX(moduleCount) AS maxModuleCount FROM ?
`
const maxModuleCount = alasql(getMaxModuleCount, [cssKeywordList])

console.log(maxModuleCount)