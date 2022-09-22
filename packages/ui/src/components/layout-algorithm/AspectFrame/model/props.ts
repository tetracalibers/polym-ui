import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'

const conf = {
  ratioX: NotRequired<number>(16),
  ratioY: NotRequired<number>(9),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
