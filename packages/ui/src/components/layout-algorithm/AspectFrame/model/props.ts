import { getDefaultProps, getPropType, Required } from 'react-tsx-props'

const conf = {
  ratioX: Required<number>(16),
  ratioY: Required<number>(9),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
