import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

/* gradient ----------------------------------- */

export const gradientEffectTypeOptions = [
  'flow',
  'shrink',
  'expand',
  'toFill',
] as const
type GradientEffectTypeOptions = typeof gradientEffectTypeOptions[number]

const gradientConf = {
  hoverEffect: NotRequired<GradientEffectTypeOptions>('flow'),
}

export type GradientStyleProps = getPropType<typeof gradientConf>
export const defaultGradientStyleProps = {
  ...getDefaultProps<GradientStyleProps>(gradientConf),
}

/* flowGradient ------------------------------- */

const flowGradientConf = {
  bgColor01: NotRequired<CSST.Property.BackgroundColor>('#45b6eb'),
  bgColor02: NotRequired<CSST.Property.BackgroundColor>('#576fe6'),
  bgColor03: NotRequired<CSST.Property.BackgroundColor>('#bd33ef'),
  bgColor04: NotRequired<CSST.Property.BackgroundColor>('#E3008C'),
  slope: NotRequired<number>(270),
  borderRadiusV: NotRequired<number>(5),
  borderRadiusU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingYV: NotRequired<number>(1.5),
  paddingXV: NotRequired<number>(4),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
  duration: NotRequired<number>(0.3),
}

export type FlowGradientStyleProps = getPropType<typeof flowGradientConf>
export const defaultFlowGradientStyleProps = {
  ...getDefaultProps<FlowGradientStyleProps>(flowGradientConf),
}

/* scale gradient ----------------------------- */

export const scaleGradientHoverEffectOptions = ['shrink', 'expand'] as const
export type ScaleGradientHoverEffectOptions =
  typeof scaleGradientHoverEffectOptions[number]

const scaleGradientConf = {
  /* gradient ----------------------------------- */
  bgColor01: NotRequired<CSST.Property.BackgroundColor>('#ee5af6 '),
  bgColor02: NotRequired<CSST.Property.BackgroundColor>('#736EFE'),
  slope: NotRequired<number>(90),
  /* box ---------------------------------------- */
  borderRadiusV: NotRequired<number>(5),
  borderRadiusU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingYV: NotRequired<number>(1.5),
  paddingXV: NotRequired<number>(4),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
  /* effect ------------------------------------- */
  duration: NotRequired<number>(0.3),
  hoverEffect: NotRequired<ScaleGradientHoverEffectOptions>('shrink'),
  scaleFactor: NotRequired<number>(0.05),
  /* shadow ------------------------------------- */
  shadowOffsetXV: NotRequired<number>(0),
  shadowOffsetYV: NotRequired<number>(15),
  shadowOffsetXU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowOffsetYU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowBlurV: NotRequired<number>(15),
  shadowBlurU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowColor: NotRequired<CSST.Property.Color>('#f5cbff'),
}

export type ScaleGradientStyleProps = getPropType<typeof scaleGradientConf>
export const defaultScaleGradientStyleProps = {
  ...getDefaultProps<ScaleGradientStyleProps>(scaleGradientConf),
}

/* to fill gradient --------------------------- */

const toFillGradientConf = {
  /* gradient ----------------------------------- */
  bgColor01: NotRequired<CSST.Property.BackgroundColor>('#ffa8a8'),
  bgColor02: NotRequired<CSST.Property.BackgroundColor>('#fcff00'),
  bgColor03: NotRequired<CSST.Property.BackgroundColor>('#c9ffbf'),
  slope: NotRequired<number>(270),
  /* box ---------------------------------------- */
  borderRadiusV: NotRequired<number>(5),
  borderRadiusU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingYV: NotRequired<number>(1.5),
  paddingXV: NotRequired<number>(4),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
  /* effect ------------------------------------- */
  duration: NotRequired<number>(0.4),
  /* shadow ------------------------------------- */
  shadowOffsetXV: NotRequired<number>(0),
  shadowOffsetYV: NotRequired<number>(5),
  shadowOffsetXU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowOffsetYU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowBlurV: NotRequired<number>(10),
  shadowBlurU: NotRequired<CssStyle.Unit.Length>('px'),
  shadowColor: NotRequired<CSST.Property.Color>('rgb(230, 238, 156)'),
  /* border ------------------------------------- */
  borderWidthV: NotRequired<number>(1),
  borderWidthU: NotRequired<CssStyle.Unit.Length>('px'),
  borderStyle: NotRequired<CSST.Property.BorderStyle>('solid'),
  borderColor: NotRequired<CSST.Property.BorderColor>('#fa6c9f'),
}

export type ToFillGradientStyleProps = getPropType<typeof toFillGradientConf>
export const defaultToFillGradientStyleProps = {
  ...getDefaultProps<ToFillGradientStyleProps>(toFillGradientConf),
}

/* burglarize --------------------------------- */

export const burglarizePushToOptions = ['bottom', 'left', 'right'] as const
export type BurglarizePushToOptions = typeof burglarizePushToOptions[number]

const burglarizeConf = {
  pushTo: NotRequired<BurglarizePushToOptions>('bottom'),
  color: NotRequired<CSST.Property.Color>(ColorPalette.grayScale.dark),
  bgColor: NotRequired<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.light
  ),
  borderRadiusV: NotRequired<number>(25),
  borderRadiusU: NotRequired<CssStyle.Unit.Length>('px'),
  offset: NotRequired<number>(4),
  paddingYV: NotRequired<number>(10),
  paddingXV: NotRequired<number>(30),
  paddingYU: NotRequired<CssStyle.Unit.Length>('px'),
  paddingXU: NotRequired<CssStyle.Unit.Length>('px'),
  duration: NotRequired<number>(0.3),
}

export type BurglarizeStyleProps = getPropType<typeof burglarizeConf>
export const defaultBurglarizeStyleProps =
  getDefaultProps<BurglarizeStyleProps>(burglarizeConf)
