import { css } from 'mdn-data'
import { groupList } from 'mdn-data/css/definitions.json'
import alasql from 'alasql'
import { createJsonFile, toJSON } from './util/forJson'

const mdnModuleGroupList = groupList.enum
const { atRules, selectors, properties } = css

//console.log(mdnModuleGroupList)
//console.log(atRules)
//console.log(selectors)
//console.log(properties)

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

type keywordModuleObjList = {
  keyword: string
  module: Array<string>
}

function createKeywordModuleObjList(data: cssDataByMdnList, keywordKind: string): keywordModuleObjList {
  const flatObjList: Array<CssDataByMdn> = alasql("SELECT * FROM ?", [data])
  const query = `
      SELECT 
        data._->(0) AS keyword, 
        data._->(1)->groups AS module,
        static.kind AS kind
      FROM ? AS data, (SELECT '${keywordKind}' AS kind) AS static
  `
  const cssModuleList: keywordModuleObjList = alasql(query, [flatObjList, keywordKind])
  return cssModuleList
}

const keywordModuleObjList_atRules = createKeywordModuleObjList(atRules, 'at-rule')
const keywordModuleObjList_selectors = createKeywordModuleObjList(selectors, 'selector')
const keywordModuleObjList_properties = createKeywordModuleObjList(properties, 'property')

//console.log(toJSON(keywordModuleObjList_atRules))
//console.log(toJSON(keywordModuleObjList_selectors))
//console.log(toJSON(keywordModuleObjList_properties))