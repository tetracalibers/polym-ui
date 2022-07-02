import { getCssKeywordList_arrayExpanded} from './parsedDataArrayExpand'
import { groupList} from 'mdn-data/css/definitions.json'
import alasql from 'alasql'
import { createJsonFile } from '../util/forJson'

const mdnModuleGroupList = groupList.enum

export const dumpCssKeywordList_byModule: Function = (): void => {
  mdnModuleGroupList.map((moduleGroup: string) => {
    const moduleGroupNoSpaces = moduleGroup.replace(/\s/g, '')
    const getThisGroupKeywordList = `
      SELECT * FROM ? WHERE moduleGroup LIKE '${moduleGroup}'
    `
    const thisGroupKeywordList = alasql(getThisGroupKeywordList, [getCssKeywordList_arrayExpanded])
    if (thisGroupKeywordList.length > 0) {
      createJsonFile(thisGroupKeywordList, `dump/css-keywords/byModule/${moduleGroupNoSpaces}`)
    }
  })
}