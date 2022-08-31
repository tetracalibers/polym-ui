import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  spaceV: NotRequired<number>(0.5),
  spaceU: NotRequired<CssStyle.Unit.Length>('rem'),
  barHeightV: NotRequired<number>(1),
  barHeightU: NotRequired<CssStyle.Unit.Length>('rem'),
  hideScrollBar: NotRequired<boolean>(false),
  paddingV: NotRequired<number>(0.75),
  paddingU: NotRequired<CssStyle.Unit.Length>('rem'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
