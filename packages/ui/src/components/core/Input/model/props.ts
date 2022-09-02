import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

const conf = {}
type Conf = typeof conf

export type CoreProps = getPropType<Conf>
export const defaultInputCoreProps = {
  ...getDefaultProps<CoreProps>(conf),
}
