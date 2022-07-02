import { css } from 'mdn-data'
import { groupList } from 'mdn-data/css/definitions.json'
import alasql from 'alasql'
import { createJsonFile, toJSON } from './util/forJson'

const mdnModuleGroupList = groupList.enum
const { atRules, selectors, properties } = css

//console.log(mdnModuleGroupList)

interface CssDataByMdn {
  syntax: string
  groups: Array<string>
  status: string
  mdn_url: string
  [k: string]: string | object | Array<string>
}

type cssDataByMdnList = {
  [key: string]: CssDataByMdn
}

type cssKeyword = {
  keyword: string
  keywordType: string
  moduleGroup: Array<string>
}

type cssKeywordList = Array<cssKeyword>

function createCssKeywordList(data: cssDataByMdnList, keywordKind: string): cssKeywordList {
  const flatObjList: Array<CssDataByMdn> = alasql("SELECT * FROM ?", [data])
  const query = `
      SELECT 
        data._->(0) AS keyword, 
        static.keywordType AS keywordType,
        data._->(1)->groups AS moduleGroup
      FROM ? AS data, (SELECT '${keywordKind}' AS keywordType) AS static
  `
  const cssModuleList: cssKeywordList = alasql(query, [flatObjList])
  return cssModuleList
}

const cssKeywordList_atRules = createCssKeywordList(atRules, 'at-rule')
const cssKeywordList_selectors = createCssKeywordList(selectors, 'selector')
const cssKeywordList_properties = createCssKeywordList(properties, 'property')

const cssKeywordList = [...cssKeywordList_atRules, ...cssKeywordList_selectors, ...cssKeywordList_properties]

createJsonFile(cssKeywordList, 'tmp/cssKeywordList')