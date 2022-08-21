import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
}
