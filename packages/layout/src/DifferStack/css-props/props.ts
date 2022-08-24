import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  space: Required<CSST.Property.Gap>('1rem'),
  justifyContent: Required<CSST.Property.JustifyContent>('flex-start'),
  alignItems: Required<CSST.Property.AlignItems>('flex-start'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
