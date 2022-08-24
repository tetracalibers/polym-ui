import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  // ハートの大きさ
  size: Required<CSST.Property.Width>('50px'),
  // ハートの色
  color: Required<CSST.Property.Color>(ColorPalette.pastel.pink),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
