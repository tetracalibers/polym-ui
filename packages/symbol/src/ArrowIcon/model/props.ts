import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const directionOptions = ['top', 'bottom', 'left', 'right'] as const
export type DirectionOptions = typeof directionOptions[number]

const conf = {
  // 矢印の方向
  direction: Required<DirectionOptions>('right'),
  // 矢印の太さ(px)
  thickness: Required<number>(2),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
