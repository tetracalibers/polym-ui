import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

type ScaleFactorRange = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9

const conf = {
  animationDuration: Required<CSST.Property.AnimationDuration>('0.5s'),
  scaleFactor: Required<ScaleFactorRange>(0.6),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
