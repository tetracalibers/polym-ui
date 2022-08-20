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
  borderWidth: Required<CSST.Property.BorderWidth>('1px'),
  borderStyle: Required<CSST.Property.BorderStyle>('solid'),
  borderColor: Required<CSST.Property.BorderColor>('#555'),
  color: Required<CSST.Property.Color>('#333'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#fff'),
  transitionDuration: Required<CSST.Property.TransitionDuration>('0.4s'),
  /* Option ------------------------------------- */
  padding: NotRequired<CSST.Property.Padding>('.5rem 1rem'),
  borderRadius: NotRequired<CSST.Property.BorderRadius>('1rem'),
  /* -------------------------------------------- */
}
type Conf = typeof conf

export type ButtonSubstyleProps = getPropType<Conf>
export const substyleDefaultProps = getDefaultProps<ButtonSubstyleProps>(conf)
export const buttonSubStyle = mixinBuilder<ButtonSubstyleProps, Conf>(conf)
