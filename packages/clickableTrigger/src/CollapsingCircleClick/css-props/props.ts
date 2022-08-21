import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { mixinBuilder } from 'styled-utility-first'

const conf = {
  /* Required ----------------------------------- */
  color: Required<CSST.Property.Color>('#fff'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#333'),
  width: Required<CSST.Property.Width>('100px'),
  borderWidth: Required<CSST.Property.BorderWidth>('2px'),
  borderStyle: Required<CSST.Property.BorderStyle>('solid'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
export const styleMixin = mixinBuilder<StyleProps, Conf>(conf)
