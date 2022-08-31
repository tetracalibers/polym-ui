import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const slideFromOptions = ['left', 'right', 'top', 'bottom'] as const
export type SlideFromOptions = typeof slideFromOptions[number]

const conf = {
  slideFrom: Required<SlideFromOptions>('left'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
