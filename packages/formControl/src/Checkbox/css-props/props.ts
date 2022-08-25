import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  borderWidth: NotRequired<number>(1),
  borderColor: NotRequired<CSST.Property.BorderColor>(
    ColorPalette.pastel.purple
  ),
  borderRadius: NotRequired<number>(2),
  focusOutlineWidth: NotRequired<number>(1.5),
  focusOutlineColor: NotRequired<CSST.Property.OutlineColor>(
    ColorPalette.pastel.water
  ),
  checkIconColor: NotRequired<CSST.Property.Color>('#EC407A'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
