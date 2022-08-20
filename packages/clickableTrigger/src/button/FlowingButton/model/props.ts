import { ButtonSubstyleProps } from './../../substyle/props'
import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

export const presets = [
  'from-left',
  'from-right',
  'up',
  'down',
  'center-to-horizontal',
  'center-to-vertical',
  'center-to-corner',
  'diagonal',
] as const
export type Preset = typeof presets[number]

const conf = {
  preset: Required<Preset>('from-left'),
  borderWidth: Required<CSST.Property.BorderWidth>('1px'),
  borderStyle: Required<CSST.Property.BorderStyle>('solid'),
  borderColor: Required<CSST.Property.BorderColor>('#555'),
  color: Required<CSST.Property.Color>('#333'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#fff'),
  transitionDuration: Required<CSST.Property.TransitionDuration>('0.4s'),
}
type Conf = typeof conf

export type FlowingButtonProps = ButtonSubstyleProps & getPropType<Conf>
export const defaultProps = getDefaultProps<FlowingButtonProps>(conf)
