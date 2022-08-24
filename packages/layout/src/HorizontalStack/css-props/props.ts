import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  // Box間の間隔
  space: Required<CSST.Property.Gap>('1.7rem'),
  // コンテナのブレイクポイント
  breakpoint: Required<CSST.Property.Width>('30rem'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
