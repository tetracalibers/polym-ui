import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type RippleButtonProps = getPropType<Conf> & StyleProps & CommonProps
export const defaultProps = {
  ...getDefaultProps<RippleButtonProps>(conf),
  ...styleDefaultProps,
  ...commonDefaultProps,
}
