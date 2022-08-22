// テスト用（バンドル時はコメントアウト）
//import './dumpster/use-fs'

import _ from 'lodash'
import {
  AllPseudoStyleProps,
  textDecorationProps,
  textReadableProps,
  writingModeProps,
} from 'styled-utility-first'
import * as CSST from 'csstype'
import * as cssStoryMetaJson from './data/css-prop-doc.json'

type ProvideCssPropNames = keyof CSST.Properties | AllPseudoStyleProps

export const cssStoryMeta = JSON.parse(JSON.stringify(cssStoryMetaJson)) as {
  [k in ProvideCssPropNames]: {
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
  (propName: ProvideCssPropNames) => {
    const defaultV = defaultProps[propName]
    return _.set(
      _.set(cssStoryMeta[propName], 'table.defaultValue.detail', null),
      'table.defaultValue.summary',
      defaultV
    )
  }
