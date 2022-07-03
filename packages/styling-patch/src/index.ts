import { dumpUsefulCssKeywordList } from './dumpster/usefulSyntaxSelect';
import { dumpUsefulCssKeywordList_byModule } from './dumpster/groupingByModule'
import { toJSON } from './util/forJson'
import * as shell from 'shelljs';
import alasql from 'alasql'

const usefulCssKeywordList = dumpUsefulCssKeywordList()
dumpUsefulCssKeywordList_byModule(usefulCssKeywordList)