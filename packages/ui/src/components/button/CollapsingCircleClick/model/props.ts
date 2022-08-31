import { styleDefaultProps, StyleProps } from '../css-props/props'
import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
  ...commonDefaultProps,
}
