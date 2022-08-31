import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  disabled: NotRequired<boolean>(false),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
