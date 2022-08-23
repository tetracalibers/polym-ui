import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  width: Required<CSST.Property.Width>('auto'),
  height: Required<CSST.Property.Height>('38px'),
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.pastel.water
  ),
  color: Required<CSST.Property.Color>('#fff'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
