import { getDefaultProps, getPropType } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type RippleCircleProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<RippleCircleProps>(conf),
  ...styleDefaultProps,
}
