import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

export const scaleFactorRange = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
] as const
type ScaleFactorRange = typeof scaleFactorRange[number]

const conf = {
  animationDuration: Required<number>(0.5),
  scaleFactor: Required<ScaleFactorRange>(0.6),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
