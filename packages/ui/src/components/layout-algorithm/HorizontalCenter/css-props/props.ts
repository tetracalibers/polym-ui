import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  paddingX: NotRequired<CSST.Property.PaddingLeft>('0'),
  maxWidth: NotRequired<CSST.Property.MaxWidth>('60ch'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
