import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'

export const presets = ['add-shadow', 'spread-shadow', 'up-shadow'] as const
export type Presets = typeof presets[number]

const conf = {
  preset: Required<Presets>('add-shadow'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
}
