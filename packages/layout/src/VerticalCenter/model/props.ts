import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'
import { ElementType } from 'react'

const conf = {
  spaceV: NotRequired<number>(1),
  spaceU: NotRequired<CssStyle.Unit.Length>('rem'),
  paddingV: NotRequired<number>(1),
  paddingU: NotRequired<CssStyle.Unit.Length>('rem'),
  minHeightV: NotRequired<number>(100),
  minHeightU: NotRequired<CssStyle.Unit.Length>('vh'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  StyleProps & {
    target?: number | ElementType
  }
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
  target: 1,
}
