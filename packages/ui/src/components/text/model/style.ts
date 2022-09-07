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
  fontSizeV: NotRequired<number>(2),
  fontSizeU: NotRequired<CssStyle.Unit.Length>('rem'),
  lineHeight: NotRequired<number>(1.5),
}

export type TextBaseStyleProps = getPropType<typeof coreConf>
export const defaultTextBaseStyleProps = {
  ...getDefaultProps<TextBaseStyleProps>(coreConf),
}

/* glow --------------------------------------- */

const glowConf = {
  color: NotRequired<CSST.Property.Color>($.grayScale.light),
  duration: NotRequired<number>(1),
}

export type TextGlowStyleProps = TextBaseStyleProps &
  getPropType<typeof glowConf>
export const defaultTextGlowStyleProps = {
  ...defaultTextBaseStyleProps,
  ...getDefaultProps<TextGlowStyleProps>(glowConf),
}
