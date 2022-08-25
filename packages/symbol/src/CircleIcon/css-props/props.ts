import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  color: NotRequired<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.dark
  ),
  borderWidth: NotRequired<number>(0),
  borderColor: NotRequired<CSST.Property.BorderColor>(
    ColorPalette.pastel.purple
  ),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
