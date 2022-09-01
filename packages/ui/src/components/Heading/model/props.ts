import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const levelOptions = [1, 2, 3, 4, 5, 6] as const
type LevelOptions = typeof levelOptions[number]

const conf = {
  level: NotRequired<LevelOptions>(2),
}
type Conf = typeof conf

export type CoreProps = getPropType<Conf>
export const defaultHeadingCoreProps = {
  ...getDefaultProps<CoreProps>(conf),
}
