import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

const conf = {
  animationDuration: Required<number>(0.5),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
