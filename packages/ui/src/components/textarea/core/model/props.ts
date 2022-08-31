import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  minRows: NotRequired<number>(5),
  maxRows: NotRequired<number>(10),
  hasError: NotRequired<boolean>(false),
  name: Required<HTMLTextAreaElement['name']>(''),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
