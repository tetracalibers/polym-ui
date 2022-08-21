import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const rotateTo = ['front', 'back'] as const
export type RotateTo = typeof rotateTo[number]

const conf = {
  rotateTo: Required<RotateTo>('front'),
}
type Conf = typeof conf

export type RotatingButtonProps = getPropType<Conf> & StyleProps & CommonProps
export const defaultProps = {
  ...getDefaultProps<RotatingButtonProps>(conf),
  ...styleDefaultProps,
  ...commonDefaultProps,
}
