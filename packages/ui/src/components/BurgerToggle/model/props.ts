import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const designOptions = [
  'JumpToCross',
  'SpinToCross',
  'RotateToCross',
  'SlideToAline',
  'Rotate3dToCross',
] as const
export type DesignOptions = typeof designOptions[number]

const conf = {
  design: Required<DesignOptions>('RotateToCross'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
