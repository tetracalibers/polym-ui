import { getDefaultProps, getPropType } from 'react-tsx-props'

const conf = {}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
}
