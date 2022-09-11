import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  borderRadius: NotRequired<CSST.Property.BorderRadius>('10px'),
  backgroundColor: NotRequired<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.dark
  ),
  width: NotRequired<number>(50),
  height: NotRequired<number>(33),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
