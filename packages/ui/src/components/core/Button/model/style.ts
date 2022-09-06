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
  color: NotRequired<CSST.Property.Color>('#ffffff'),
  bgColor01: NotRequired<CSST.Property.BackgroundColor>('#3bade3'),
  bgColor02: NotRequired<CSST.Property.BackgroundColor>('#576fe6'),
  bgColor03: NotRequired<CSST.Property.BackgroundColor>('#9844b7'),
  bgColor04: NotRequired<CSST.Property.BackgroundColor>('#ff357f'),
  slope: NotRequired<number>(270),
}

export type FlowGradientStyleProps = getPropType<typeof flowGradientConf>
export const defaultFlowGradientStyleProps = {
  ...getDefaultProps<FlowGradientStyleProps>(flowGradientConf),
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
