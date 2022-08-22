import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette, mixinBuilder } from 'styled-utility-first'

const conf = {
  color: Required<CSST.Property.Color>(ColorPalette.grayScale.light),
  backgroundColor: Required<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.dark
  ),
  padding: Required<CSST.Property.Padding>('.5rem 2rem'),
  borderRadius: Required<CSST.Property.BorderRadius>('1rem'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
export const styleMixin = mixinBuilder<StyleProps, Conf>(conf)
