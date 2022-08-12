import { CssStyle } from '@react-polyhex-ui-dev/utility-types'
import _ from 'lodash'
import {
  setDefault,
  setNullable,
  getDefaultProps,
  getPropTypes,
} from './DefProps'

const options = {
  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   STYLING                                                                   │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default 1.7rem
   * @desc Box間の間隔（margin-topの値）
   */
  space: setDefault<CssStyle.Prop.Value.Space>('1.7rem'),

  /**
   * @default false
   * @desc 入れ子要素に対しても再帰的にmargin挿入するか
   */
  recursive: setDefault<boolean>(false),

  /**
   * @default undefined
   * @desc これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
   */
  separateFrom: setNullable<number>(undefined),

  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   ACCESSIBILITY                                                             │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default false
   * @desc ブラウザにリストとして解釈させるか
   */
  isList: setDefault<boolean>(false),
} as const

export type StackProps = getPropTypes<typeof options>
export const StackDefaultProps = getDefaultProps(options)
