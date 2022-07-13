import { dumpUsefulCssKeywordList } from './dumpster/usefulSyntaxSelect'
import { dumpUsefulCssKeywordList_byModule } from './dumpster/groupingByModule'
;(async () => {
  const usefulCssKeywordList = await dumpUsefulCssKeywordList()
  dumpUsefulCssKeywordList_byModule(usefulCssKeywordList)
})()
