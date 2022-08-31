import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  fixed: NotRequired<boolean>(false),
  contain: NotRequired<boolean>(true),
  marginValue: NotRequired<number>(0),
  marginUnit: NotRequired<CssStyle.Unit.Length>('px'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
