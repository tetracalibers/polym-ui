import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  // 矢印の辺の長さ
  size: Required<CSST.Property.Width>('50px'),
  // 矢印の色
  color: Required<CSST.Property.Color>(ColorPalette.grayScale.dark),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
