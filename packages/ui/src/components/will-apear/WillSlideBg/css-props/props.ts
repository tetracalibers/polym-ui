import { ColorPalette } from 'styled-utility-first'
import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

const conf = {
  animationDuration: Required<number>(1),
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.dark
  ),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
