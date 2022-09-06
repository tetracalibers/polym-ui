import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

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

/* burglarize --------------------------------- */

export const burglarizeOffsetOptions = [3, 4, 5] as const
type OffsetOptions = typeof burglarizeOffsetOptions[number]

export const burglarizePushToOptions = ['bottom', 'left', 'right'] as const
export type BurglarizePushToOptions = typeof burglarizePushToOptions[number]

const burglarizeConf = {
  pushTo: NotRequired<BurglarizePushToOptions>('bottom'),
  color: NotRequired<CSST.Property.Color>(ColorPalette.grayScale.dark),
  backgroundColor: NotRequired<CSST.Property.BackgroundColor>(
    ColorPalette.grayScale.light
  ),
  borderRadius: NotRequired<CSST.Property.BorderRadius>('25px'),
  offset: NotRequired<OffsetOptions>(4),
  padding: NotRequired<CSST.Property.Padding>('10px 30px'),
}

export type BurglarizeStyleProps = getPropType<typeof burglarizeConf>
export const defaultBurglarizeStyleProps =
  getDefaultProps<BurglarizeStyleProps>(burglarizeConf)
