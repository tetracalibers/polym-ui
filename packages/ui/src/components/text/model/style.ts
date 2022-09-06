import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $ } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

/* core --------------------------------------- */

const coreConf = {
  color: NotRequired<CSST.Property.Color>($.grayScale.dark),
  fontSizeV: NotRequired<number>(1),
  fontSizeU: NotRequired<CssStyle.Unit.Length>('rem'),
  lineHeightV: NotRequired<number>(1),
  lineHeightU: NotRequired<CssStyle.Unit.Length>('rem'),
}

export type TextBaseStyleProps = getPropType<typeof coreConf>
export const defaultTextBaseStyleProps = {
  ...getDefaultProps<TextBaseStyleProps>(coreConf),
}
