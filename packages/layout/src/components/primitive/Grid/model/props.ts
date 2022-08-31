import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import { commonDefaultProps, CommonProps } from '../../../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  columnMinWidthV: NotRequired<number>(250),
  columnMinWidthU: NotRequired<CssStyle.Unit.Length>('px'),
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CssStyle.Unit.Length>('rem'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
