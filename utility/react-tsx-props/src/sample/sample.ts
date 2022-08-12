import { CssStyle } from 'ts-typedef-helper'
import { Required, NotRequired } from '../api/set'

export const sampleP = {
  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   STYLING                                                                   │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default 1.7rem
   * @desc Box間の間隔（margin-topの値）
   */
  space: Required<CssStyle.Prop.Value.Space>('1.7rem'),

  /**
   * @default false
   * @desc 入れ子要素に対しても再帰的にmargin挿入するか
   */
  recursive: Required<boolean>(false),

  /**
   * @default undefined
   * @desc これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
   */
  separateFrom: NotRequired<number>(),

  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   ACCESSIBILITY                                                             │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default false
   * @desc ブラウザにリストとして解釈させるか
   */
  isList: Required<boolean>(false),
} as const

export type SampleT = typeof sampleP
