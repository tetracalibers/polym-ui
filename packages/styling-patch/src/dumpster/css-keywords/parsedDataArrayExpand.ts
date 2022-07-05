import { cssKeywordList_usingArray } from './parseRowData'
import alasql from 'alasql'

const getMaxModuleCount = `
  SELECT MAX(moduleCount) AS maxModuleCount FROM ?
`
const [{ maxModuleCount }] = alasql(getMaxModuleCount, [
  cssKeywordList_usingArray,
])

const sequencial = [...Array(maxModuleCount)].map(
  (_: undefined, i: number) => i
)

const getExpandedArrayCssKeywordList = sequencial
  .map(
    (_: number, i: number) => `
  SELECT
    keyword, 
    keywordType,
    moduleGroup->(${i}) AS moduleGroup
  FROM ? WHERE moduleCount > ${i}
`
  )
  .join(' UNION ALL ')

export const cssKeywordList_arrayExpanded = alasql(
  getExpandedArrayCssKeywordList,
  Array(maxModuleCount).fill(cssKeywordList_usingArray)
)
