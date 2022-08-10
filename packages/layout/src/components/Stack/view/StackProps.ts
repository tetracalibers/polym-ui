import { CssStyle, Default as D } from '@react-polyhex-ui-dev/utility-types'

export type StackProps = D.Def<{
  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   STYLING                                                                   │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default 1.7rem
   * @desc Box間の間隔（margin-topの値）
   */
  space: D.TypeAndDefault<CssStyle.Prop.Value.Space, '1.7rem'>

  /**
   * @default false
   * @desc 入れ子要素に対しても再帰的にmargin挿入するか
   */
  recursive: D.TypeAndDefault<boolean, false>

  /**
   * @default undefined
   * @desc これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
   */
  separateFrom: D.TypeAndDefault<number, undefined>

  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   ACCESSIBILITY                                                             │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default false
   * @desc ブラウザにリストとして解釈させるか
   */
  isList: D.TypeAndDefault<boolean, false>
}>
