import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import type { IntrinsicElementsKeys } from 'styled-components'

export type HtmlTagType = IntrinsicElementsKeys

const conf = {
  as: Required<HtmlTagType>('button'),
}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
}
