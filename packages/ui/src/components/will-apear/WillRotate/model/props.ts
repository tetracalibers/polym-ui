import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const rotateOptions = ['X', 'Y', 'Zleft', 'Zright'] as const
export type RotateOptions = typeof rotateOptions[number]

const conf = {
  rotate: Required<RotateOptions>('X'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
