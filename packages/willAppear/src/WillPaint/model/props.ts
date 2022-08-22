import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const extendFromOptions = ['left', 'right', 'top', 'bottom'] as const
export type ExtendFromOptions = typeof extendFromOptions[number]

const conf = {
  extendFrom: Required<ExtendFromOptions>('left'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
