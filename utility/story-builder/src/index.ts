// テスト用（バンドル時はコメントアウト）
//import './dumpster/use-fs'

import * as cssStoryMetaJson from './data/css-prop-doc.json'
export const cssStoryMeta = JSON.parse(JSON.stringify(cssStoryMetaJson))
