import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CommonProps, commonDefaultProps } from '../../model/props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
}
