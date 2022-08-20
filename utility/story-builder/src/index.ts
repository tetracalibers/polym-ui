// テスト用（バンドル時はコメントアウト）
//import './dumpster/use-fs'
import { AllCssProps } from '../../styled-utility-first/lib/@types'
import * as cssStoryMetaJson from './data/css-prop-doc.json'
export const cssStoryMeta = JSON.parse(JSON.stringify(cssStoryMetaJson)) as {
  [k in AllCssProps]: {
    control: {
      type: 'select' | 'text' | 'color'
    }
    options?: string[]
    description: string
    defaultValue: {
      summary: string
    }
    table: {
      category: string
      subcategory: string
    }
  }
}
