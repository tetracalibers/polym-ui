import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  src: Required<HTMLImageElement['src']>(),
  alt: NotRequired<HTMLImageElement['alt']>(''),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
