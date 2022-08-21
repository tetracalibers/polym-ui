import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const trigger = ['click', 'hover', 'infinite'] as const
export type Trigger = typeof trigger[number]

const conf = {
  trigger: Required<Trigger>('click'),
}
type Conf = typeof conf

export type RippleButtonProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<RippleButtonProps>(conf),
  ...styleDefaultProps,
}
