import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  // 矢印の辺の長さ
  sizeV: NotRequired<number>(50),
  sizeU: NotRequired<CssStyle.Unit.Length>('px'),
  // 矢印の色
  color: NotRequired<CSST.Property.Color>(ColorPalette.grayScale.dark),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
