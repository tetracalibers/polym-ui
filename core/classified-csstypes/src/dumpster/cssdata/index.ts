import { dumpUsefulCssKeywordList } from './dump/usefulSyntaxSelect'
import { dumpUsefulCssKeywordList_byModule } from './dump/groupingByModule'
;(async () => {
  const usefulCssKeywordList = await dumpUsefulCssKeywordList()
  dumpUsefulCssKeywordList_byModule(usefulCssKeywordList)
})()
