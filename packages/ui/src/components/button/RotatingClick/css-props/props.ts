import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette, mixinBuilder } from 'styled-utility-first'

const conf = {
  borderWidth: Required<CSST.Property.BorderWidth>('1px'),
  borderStyle: Required<CSST.Property.BorderStyle>('solid'),
  borderColor: Required<CSST.Property.BorderColor>(ColorPalette.grayScale.dark),
  color: Required<CSST.Property.Color>(ColorPalette.grayScale.dark),
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.light
  ),
  transitionDuration: Required<number>(0.5),
  width: Required<CSST.Property.Width>('250px'),
  height: Required<CSST.Property.Height>('50px'),
  padding: Required<CSST.Property.Padding>('0'),
  borderRadius: Required<CSST.Property.BorderRadius>('0'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
export const styleMixin = mixinBuilder<StyleProps, Conf>(conf)
