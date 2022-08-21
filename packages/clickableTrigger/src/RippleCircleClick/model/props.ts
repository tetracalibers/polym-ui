import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps & CommonProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
  ...commonDefaultProps,
}
