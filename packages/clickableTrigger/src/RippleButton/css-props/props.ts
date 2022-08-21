import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { mixinBuilder } from 'styled-utility-first'

const conf = {
  /* Required ----------------------------------- */
  color: Required<CSST.Property.Color>('#fff'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#333'),
  /* Option ------------------------------------- */
  padding: NotRequired<CSST.Property.Padding>('.5rem 2rem'),
  borderRadius: NotRequired<CSST.Property.BorderRadius>('1rem'),
  /* -------------------------------------------- */
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
export const styleMixin = mixinBuilder<StyleProps, Conf>(conf)
