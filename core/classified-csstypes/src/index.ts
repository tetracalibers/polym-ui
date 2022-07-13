import { dumpUsefulCssKeywordList } from './dumpster/cssdata/usefulSyntaxSelect'
import { dumpUsefulCssKeywordList_byModule } from './dumpster/cssdata/groupingByModule'
;(async () => {
  const usefulCssKeywordList = await dumpUsefulCssKeywordList()
  dumpUsefulCssKeywordList_byModule(usefulCssKeywordList)
})()
