import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  justifyContent: NotRequired<CSST.Property.JustifyContent>('flex-start'),
  alignItems: NotRequired<CSST.Property.AlignItems>('flex-start'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
