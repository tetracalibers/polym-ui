import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const flipToOptions = [
  'bottom',
  'left',
  'right',
  'left-top',
  'right-top',
] as const
export type FlipToOptions = typeof flipToOptions[number]

const conf = {
  flipTo: Required<FlipToOptions>('bottom'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
