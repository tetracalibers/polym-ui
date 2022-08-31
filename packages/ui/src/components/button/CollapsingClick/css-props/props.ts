import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

export const offsetOptions = [3, 4, 5] as const
type OffsetOptions = typeof offsetOptions[number]

const conf = {
  color: Required<CSST.Property.Color>(ColorPalette.grayScale.dark),
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.light
  ),
  borderRadius: Required<CSST.Property.BorderRadius>('25px'),
  offset: Required<OffsetOptions>(4),
  padding: Required<CSST.Property.Padding>('10px 30px'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
