import { CssStyle } from 'ts-typedef-helper'
import _ from 'lodash'
import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { ReactNode } from 'react'

const props = {
  /* -------------------------------------------- */
  /* STYLING                                      */
  /* -------------------------------------------- */

  // Box間の間隔（margin-topの値）
  space: Required<CssStyle.Prop.Value.Space>('1.7rem'),

  // 入れ子要素に対しても再帰的にmargin挿入するか
  recursive: Required<boolean>(false),

  // これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
  separateFrom: NotRequired<number>(),

  /* -------------------------------------------- */
  /* ACCESSIBILITY                                */
  /* -------------------------------------------- */

  // ブラウザにリストとして解釈させるか
  isList: Required<boolean>(false),

  /* -------------------------------------------- */
} as const

type DesignProps = getPropType<typeof props>
const default_DesignProps = getDefaultProps<DesignProps>(props)

/* -------------------------------------------- */
/* REACT                                        */
/* -------------------------------------------- */

export type StackProps = {
  children: ReactNode
} & DesignProps

export const default_StackProps = {
  children: undefined,
  ...default_DesignProps,
}
