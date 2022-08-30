import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import { defaultEffectProps, EffectProps } from '../../model/props'

export const modeOptions = ['in', 'out']
type ModeOptions = typeof modeOptions[number]

export const scaleFactorRange = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
] as const
type ScaleFactorRange = typeof scaleFactorRange[number]

const conf = {
  zoom: NotRequired<ModeOptions>('out'),
  withRotate: NotRequired<boolean>(false),
  clockwise: NotRequired<boolean>(true),
  angle: NotRequired<number>(5),
  scaleFactor: NotRequired<ScaleFactorRange>(0.2),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & EffectProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...defaultEffectProps,
}
