import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { mixinBuilder } from 'styled-utility-first'
import { CSSObject } from 'styled-components'

const conf = {
  /* Required ----------------------------------- */
  color: Required<CSST.Property.Color>('#fff'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#333'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf> & {
  hoverStyle: CSSObject
}
export const styleDefaultProps = {
  ...getDefaultProps<StyleProps>(conf),
  hoverStyle: {
    filter: 'opacity(0.7)',
  },
}
export const styleMixin = mixinBuilder<StyleProps, Conf>(conf)
