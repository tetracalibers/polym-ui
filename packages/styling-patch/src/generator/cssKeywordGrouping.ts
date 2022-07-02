import { groupList } from 'mdn-data/css/definitions.json'
import { cssKeywordList } from './cssKeywordList'
import { createJsonFile } from '../util/forJson'
import alasql from 'alasql'

const mdnModuleGroupList = groupList.enum

const getMaxModuleCount = `
  SELECT MAX(moduleCount) AS maxModuleCount FROM ?
`
const [{ maxModuleCount }] = alasql(getMaxModuleCount, [cssKeywordList])

const sequencial = [...Array(maxModuleCount)].map((_: undefined, i: number) => i)

const getFlatedMultiModuleKeywordList = sequencial.map((_: number, i: number) => `
  SELECT
    keyword, 
    keywordType,
    moduleGroup->(${i}) AS moduleGroup
  FROM ? WHERE moduleCount > ${i}
`).join(' UNION ALL ')

const flatedMultiModuleKeywordList = alasql(getFlatedMultiModuleKeywordList, [cssKeywordList, cssKeywordList, cssKeywordList])

mdnModuleGroupList.map((moduleGroup: string) => {
  const moduleGroupNoSpaces = moduleGroup.replace(/\s/g, '')
  const getThisGroupKeywordList = `
    SELECT * FROM ? WHERE moduleGroup LIKE '${moduleGroup}'
  `
  const thisGroupKeywordList = alasql(getThisGroupKeywordList, [flatedMultiModuleKeywordList])
  if (thisGroupKeywordList.length > 0) {
    createJsonFile(thisGroupKeywordList, `dump/css-keywords/${moduleGroupNoSpaces}`)
  }
})