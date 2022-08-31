import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

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
  id: Required<string>('text'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
