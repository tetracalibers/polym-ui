import { getDefaultProps, getPropType } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
} as Record<string, unknown>
