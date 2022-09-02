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
  paddingLeftV: NotRequired<number>(0.375),
  paddingLeftU: NotRequired<CssStyle.Unit.Length>('em'),
  lineThicknessV: NotRequired<number>(0.25),
  lineThicknessU: NotRequired<CssStyle.Unit.Length>('ch'),
  lineColor: NotRequired<CSST.Property.BorderColor>('rgb(240, 98, 146)'),
  color: NotRequired<CSST.Property.Color>($.grayScale.dark),
  lineStyle: NotRequired<CSST.Property.BorderStyle>('solid'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
