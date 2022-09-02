import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  /* css ---------------------------------------- */
  paddingYV: NotRequired<number>(1),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXV: NotRequired<number>(0.4),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>('rgb(240, 98, 146)'),
  color: NotRequired<CSST.Property.Color>('#fff'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
