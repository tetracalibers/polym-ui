import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const gradientEffectTypeOptions = [
  'flow',
  'zoomIn',
  'zoomOut',
  'toFill',
] as const
type GradientEffectTypeOptions = typeof gradientEffectTypeOptions[number]

const gradientConf = {
  effectType: NotRequired<GradientEffectTypeOptions>('flow'),
}

export type GradientStyleProps = getPropType<typeof gradientConf>
export const defaultGradientStyleProps = {
  ...getDefaultProps<GradientStyleProps>(gradientConf),
}
