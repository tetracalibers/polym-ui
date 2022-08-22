import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { mixinBuilder } from 'styled-utility-first'

const conf = {
  borderWidth: Required<CSST.Property.BorderWidth>('1px'),
  borderStyle: Required<CSST.Property.BorderStyle>('solid'),
  borderColor: Required<CSST.Property.BorderColor>('#555'),
  color: Required<CSST.Property.Color>('#333'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#fff'),
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
