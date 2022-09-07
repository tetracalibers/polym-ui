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
  lineHeight: NotRequired<number>(1.5),
}

export type TextBaseStyleProps = getPropType<typeof coreConf>
export const defaultTextBaseStyleProps = {
  ...getDefaultProps<TextBaseStyleProps>(coreConf),
}

/* solid line --------------------------------- */

const solidlineConf = {
  ...coreConf,
  lineColor: NotRequired<CSST.Property.Color>('#EA005E'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>('#ffffff'),
  underOffsetV: NotRequired<number>(0.1),
  underOffsetU: NotRequired<CssStyle.Unit.Length>('em'),
  thicknessV: NotRequired<number>(1.5),
  thicknessU: NotRequired<CssStyle.Unit.Length>('px'),
}

export type TextSolidlineStyleProps = getPropType<typeof solidlineConf>
export const defaultTextSolidlineStyleProps = {
  ...getDefaultProps<TextSolidlineStyleProps>(solidlineConf),
}

/* dashed line -------------------------------- */

const dashedLineConf = {
  ...coreConf,
  ...solidlineConf,
}

export type TextDashedLineStyleProps = getPropType<typeof dashedLineConf>
export const defaultTextDashedLineStyleProps = {
  ...getDefaultProps<TextDashedLineStyleProps>(dashedLineConf),
}

/* wavy line ---------------------------------- */

const wavyLineConf = {
  ...coreConf,
  lineColor: NotRequired<CSST.Property.Color>('#EA005E'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>('#ffffff'),
  underOffsetV: NotRequired<number>(0.05),
  underOffsetU: NotRequired<CssStyle.Unit.Length>('em'),
}

export type TextWavyLineStyleProps = getPropType<typeof wavyLineConf>
export const defaultTextWavyLineStyleProps = {
  ...getDefaultProps<TextWavyLineStyleProps>(wavyLineConf),
}

/* glow --------------------------------------- */

const glowConf = {
  ...coreConf,
  color: NotRequired<CSST.Property.Color>($.grayScale.light),
  duration: NotRequired<number>(1),
}

export type TextGlowStyleProps = getPropType<typeof glowConf>
export const defaultTextGlowStyleProps = {
  ...getDefaultProps<TextGlowStyleProps>(glowConf),
}

/* cloud -------------------------------------- */

const cloudConf = {
  ...coreConf,
  duration: NotRequired<number>(1),
}

export type TextCloudStyleProps = getPropType<typeof cloudConf>
export const defaultTextCloudStyleProps = {
  ...getDefaultProps<TextCloudStyleProps>(cloudConf),
}
