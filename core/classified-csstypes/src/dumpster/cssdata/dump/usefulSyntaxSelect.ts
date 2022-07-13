import { cssKeywordList_arrayExpanded } from '../parse/parsedDataArrayExpand'
import { createJsonFile } from '@polyhex-utility/json'
import alasql from 'alasql'

const getLikeSelectQuery: Function = (like: string): string => {
  return `SELECT * FROM ? WHERE keyword LIKE '${like}'`
}

const getNotLikeSelectQuery: Function = (like: string): string => {
  return getLikeSelectQuery(like).replace('LIKE', 'NOT LIKE')
}

const runLikeSelectQuery: Function = (like: string): Function => {
  return (from: object): Function => {
    return (addNot = true): string => {
      return alasql(
        addNot ? getNotLikeSelectQuery(like) : getLikeSelectQuery(like),
        [from]
      )
    }
  }
}

const likeResultDump: Function = (like: string): Function => {
  return (from: object): Function => {
    const likeResult = runLikeSelectQuery(like)(from)(false)
    return (fileName: string): Array<string> => {
      if (likeResult.length > 0) {
        createJsonFile(likeResult, `lib/cssdata/bySyntax/${fileName}`)
      }
      return likeResult
    }
  }
}

const likeResultDumpLoop: Function = (
  likePatternList: Array<string>
): Function => {
  return (updateList: Array<object>): Function => {
    return (
      use = true
    ): {
      reminder: Array<object>
      match: Array<string>
    } => {
      let reminder = updateList
      let match: Array<string> = []
      likePatternList.map((like: string) => {
        let fileName = `s_${like}_e`
        fileName = use ? fileName : 'other/' + fileName
        match = [...match, ...likeResultDump(like)(reminder)(fileName)]
        reminder = runLikeSelectQuery(like)(reminder)(true)
      })
      return { reminder, match }
    }
  }
}

export const dumpUsefulCssKeywordList: Function = (): Array<object> => {
  const vendorPrefixList = ['-webkit-', '-moz-', '-ms-']
  const dumpLikePatterns = [
    //s_atmark
    ['@%'],
    //s_prefix
    vendorPrefixList.map((prefix: string) => `${prefix}%`),
    //s_doubleColon_prefix
    vendorPrefixList.map((prefix: string) => `::${prefix}%`),
    //s_colon_prefix
    vendorPrefixList.map((prefix: string) => `:${prefix}%`),
    //s_doubleColon
    ['::%'],
    //s_colon
    [':%'],
  ]
  const excludePatterns = [
    //space_suffix_e
    ['selectors', 'combinator'].map((suffix: string) => `% ${suffix}`),
    //s_Pseudo_hyphen
    ['Pseudo-%'],
    //staticExcludeWords
    ['Selector list', '--*'],
  ]

  let notMatchKeywords = cssKeywordList_arrayExpanded
  dumpLikePatterns.map((like: Array<string>) => {
    const { reminder } = likeResultDumpLoop(like)(notMatchKeywords)(true)
    notMatchKeywords = reminder
  })
  let otherKeywords: Array<object> = []
  excludePatterns.map((like: Array<string>) => {
    const { reminder, match } =
      likeResultDumpLoop(like)(notMatchKeywords)(false)
    notMatchKeywords = reminder
    otherKeywords = [...otherKeywords, ...match]
  })
  likeResultDumpLoop(['%'])(notMatchKeywords)(true)

  const useCssKeywordList = alasql(
    `
    SELECT * FROM ?
    WHERE keyword NOT IN (
      SELECT keyword FROM ?
    )
  `,
    [cssKeywordList_arrayExpanded, otherKeywords]
  )
  createJsonFile(useCssKeywordList, `lib/cssdata/all`)

  return useCssKeywordList
}
