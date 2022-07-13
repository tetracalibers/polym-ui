import { groupList } from 'mdn-data/css/definitions.json'
import alasql from 'alasql'
import { createJsonFile } from '@polyhex-utility/json'

const mdnModuleGroupList = groupList.enum

export const dumpUsefulCssKeywordList_byModule: Function = (
  usefulCssKeywordList: Array<object>
): void => {
  mdnModuleGroupList.map((moduleGroup: string) => {
    const moduleGroupNoSpaces = moduleGroup.replace(/\s/g, '')
    const getThisGroupKeywordList = `
      SELECT * FROM ? WHERE moduleGroup LIKE '${moduleGroup}'
    `
    const thisGroupKeywordList = alasql(getThisGroupKeywordList, [
      usefulCssKeywordList,
    ])
    if (thisGroupKeywordList.length > 0) {
      createJsonFile(
        thisGroupKeywordList,
        `lib/cssdata/byModule/${moduleGroupNoSpaces}`
      )
    }
  })
}
