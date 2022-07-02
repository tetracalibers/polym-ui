import { css } from 'mdn-data'
import { groupList } from 'mdn-data/css/definitions.json'
import alasql from 'alasql'

const mdnModuleGroupList = groupList.enum
const { atRules, selectors, properties } = css

//console.log(mdnModuleGroupList)
//console.log(atRules)
//console.log(selectors)
//console.log(properties)

let query = "SELECT * FROM ?"
let result = alasql(query, [atRules])

console.log(result)