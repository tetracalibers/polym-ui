import { getDefaultProps, getPropType } from 'react-tsx-props'

const conf = {}
type Conf = typeof conf

export type RippleCircleProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<RippleCircleProps>(conf),
}
