import { dumpCssKeywordList_bySyntax } from './dumpster/dumpGroupedBySyntax';
import { dumpCssKeywordList_byModule } from './dumpster/dumpCssKeywordList_byModule'
import { toJSON } from './util/forJson'
import * as shell from 'shelljs';
import alasql from 'alasql'

dumpCssKeywordList_bySyntax()
dumpCssKeywordList_byModule()