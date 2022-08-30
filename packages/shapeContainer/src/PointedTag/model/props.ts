import { getDefaultProps, getPropType } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
} as Record<string, unknown>