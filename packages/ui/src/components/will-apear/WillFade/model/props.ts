import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const fadeFromOptions = [
  'here',
  'left',
  'right',
  'bottom',
  'top',
] as const
export type FadeFromOptions = typeof fadeFromOptions[number]

const conf = {
  fadeFrom: Required<FadeFromOptions>('here'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
