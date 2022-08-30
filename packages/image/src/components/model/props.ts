import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

const conf = {
  src: Required<HTMLImageElement['src']>(),
  alt: NotRequired<HTMLImageElement['alt']>(''),
}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
}
