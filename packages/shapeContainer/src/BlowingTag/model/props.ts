import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const tailPosOptions = ['top', 'bottom', 'left', 'right'] as const
export type TailPosOptions = typeof tailPosOptions[number]

const conf = {
  tailPos: Required<TailPosOptions>('bottom'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
