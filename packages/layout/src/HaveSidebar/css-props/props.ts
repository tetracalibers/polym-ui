import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  // サイドバーとメインコンテンツとの間の隙間
  spaceBetween: Required<CSST.Property.MarginLeft>('1.7rem'),
  // 垂直方向配置におけるサイドバーの最大幅
  sideMaxWidth: Required<CSST.Property.MaxWidth>('100%'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
