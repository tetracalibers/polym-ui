import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.dark
  ),
  width: Required<CSST.Property.Width>('50px'),
  borderRadius: Required<CSST.Property.BorderRadius>('5px'),
  transitionDuration: Required<CSST.Property.TransitionDuration>('0.5s'),
  color: Required<CSST.Property.Color>('#fff'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
