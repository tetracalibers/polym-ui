import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { ButtonSubstyleProps } from '../../substyle/props'

export const rotateTo = ['front', 'back'] as const
export type RotateTo = typeof rotateTo[number]

const conf = {
  rotateTo: Required<RotateTo>('front'),
}
type Conf = typeof conf

export type RotatingButtonProps = getPropType<Conf> & ButtonSubstyleProps
export const rotatingButtonDefaultProps =
  getDefaultProps<RotatingButtonProps>(conf)
