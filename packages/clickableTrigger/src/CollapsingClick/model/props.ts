import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'

export const pushToOptions = ['bottom', 'left', 'right'] as const
export type SelectablePushToOptions = typeof pushToOptions[number]

const conf = {
  pushTo: Required<SelectablePushToOptions>('bottom'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps
export const _defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
}
