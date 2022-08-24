import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const typeOptions = [
  'text',
  'url',
  'email',
  'search',
  'tel',
  'number',
  'password',
  'date',
  'time',
] as const
export type TypeOptions = typeof typeOptions[number]

const conf = {
  type: Required<TypeOptions>('text'),
  label: Required<string>(''),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
