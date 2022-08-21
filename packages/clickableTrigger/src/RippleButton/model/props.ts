import { getDefaultProps, getPropType } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type RippleButtonProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<RippleButtonProps>(conf),
  ...styleDefaultProps,
}
