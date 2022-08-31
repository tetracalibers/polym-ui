import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import { commonDefaultProps, CommonProps } from '../../../../common/props'

const conf = {
  // 水平方向レイアウトで並ぶことができる最大の項目数
  limit: NotRequired<number>(4),
  // Box間の間隔
  spaceV: NotRequired<number>(1.7),
  spaceU: NotRequired<CssStyle.Unit.Length>('rem'),
  // コンテナのブレイクポイント
  breakpointV: NotRequired<number>(30),
  breakpointU: NotRequired<CssStyle.Unit.Length>('rem'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
}
