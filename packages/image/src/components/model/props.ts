import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'

const conf = {
  src: Required<HTMLImageElement['src']>(),
  alt: NotRequired<HTMLImageElement['alt']>(''),
  width: NotRequired<CSST.Property.Width>('300px'),
  height: NotRequired<CSST.Property.Height>('auto'),
}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = getDefaultProps<CommonProps>(conf)
