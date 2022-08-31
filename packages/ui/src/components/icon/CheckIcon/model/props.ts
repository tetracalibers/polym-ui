import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  // 長辺の長さ
  sizeV: NotRequired<number>(33),
  sizeU: NotRequired<CssStyle.Unit.Length>('px'),
  // 太さ(px)
  thickness: NotRequired<number>(2),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
