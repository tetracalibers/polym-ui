import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

const conf = {
  animationDuration: Required<number>(1),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
