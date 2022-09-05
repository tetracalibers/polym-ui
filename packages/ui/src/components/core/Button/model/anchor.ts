import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

const conf = {
  href: Required<string>(),
  openInNewTab: NotRequired<boolean>(false),
}
type Conf = typeof conf

export type AnchorCharacterProps = getPropType<Conf>
export const defaultAnchorCharacterProps = {
  ...getDefaultProps<AnchorCharacterProps>(conf),
}
