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
  bgColor01: NotRequired<CSST.Property.BackgroundColor>('#5EFCE8 '),
  bgColor02: NotRequired<CSST.Property.BackgroundColor>('#736EFE'),
  slope: NotRequired<number>(90),
  borderRadiusV: NotRequired<number>(5),
  borderRadiusU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingYV: NotRequired<number>(1.5),
  paddingXV: NotRequired<number>(4),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
  duration: NotRequired<number>(0.3),
  hoverEffect: NotRequired<ScaleGradientHoverEffectOptions>('shrink'),
  scaleFactor: NotRequired<number>(0.05),
}

export type ScaleGradientStyleProps = getPropType<typeof scaleGradientConf>
export const defaultScaleGradientStyleProps = {
  ...getDefaultProps<ScaleGradientStyleProps>(scaleGradientConf),
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
