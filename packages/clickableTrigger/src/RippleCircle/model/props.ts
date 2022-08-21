import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type RippleCircleProps = getPropType<Conf> & StyleProps & CommonProps
export const defaultProps = {
  ...getDefaultProps<RippleCircleProps>(conf),
  ...styleDefaultProps,
  ...commonDefaultProps,
}