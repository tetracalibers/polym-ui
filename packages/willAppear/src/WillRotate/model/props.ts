import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const rotateToOptions = [
  'vertical',
  'horizontal',
  'left',
  'right',
] as const
export type RotateToOptions = typeof rotateToOptions[number]

const conf = {
  rotateTo: Required<RotateToOptions>('vertical'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
