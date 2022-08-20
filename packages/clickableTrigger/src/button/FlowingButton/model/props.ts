import { ButtonSubstyleProps, substyleDefaultProps } from '../css-props/props'
import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

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
}
type Conf = typeof conf

export type FlowingButtonProps = ButtonSubstyleProps & getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<FlowingButtonProps>(conf),
  ...substyleDefaultProps,
}
