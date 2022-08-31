import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const directionOptions = ['up', 'down', 'left', 'right'] as const
export type DirectionOptions = typeof directionOptions[number]

const conf = {
  // 矢印の方向
  direction: NotRequired<DirectionOptions>('right'),
  // 矢印の太さ(px)
  thickness: NotRequired<number>(2),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
