// テスト用（バンドル時はコメントアウト）
//import './dumpster/use-fs'

import _ from 'lodash'
import {
  AllCssProps,
  AllPseudoStyleProps,
  textDecorationProps,
  textReadableProps,
  writingModeProps,
} from 'styled-utility-first'
import * as cssStoryMetaJson from './data/css-prop-doc.json'

export const cssStoryMeta = JSON.parse(JSON.stringify(cssStoryMetaJson)) as {
  [k in AllCssProps | AllPseudoStyleProps]: {
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

export const cssStoryMetaOf = {
  textDecoration: _.pick(cssStoryMeta, textDecorationProps),
  textReadable: _.pick(cssStoryMeta, textReadableProps),
  writingMode: _.pick(cssStoryMeta, writingModeProps),
}

export const useSetDefaultAs =
  (defaultProps: Record<string, unknown>) =>
  (propName: AllCssProps | AllPseudoStyleProps) => {
    const defaultV = defaultProps[propName]
    return _.set(
      _.set(cssStoryMeta[propName], 'table.defaultValue.detail', null),
      'table.defaultValue.summary',
      defaultV
    )
  }
