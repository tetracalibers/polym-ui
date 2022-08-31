import { getDefaultProps, getPropType } from 'react-tsx-props'

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
