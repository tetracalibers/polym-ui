import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const zoomOptions = ['in', 'out'] as const
export type ZoomOptions = typeof zoomOptions[number]

const conf = {
  zoom: Required<ZoomOptions>('in'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
