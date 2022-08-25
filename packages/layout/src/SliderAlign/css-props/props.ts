import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  // 各項目（子要素）の幅
  itemWidth: NotRequired<CSST.Property.Width>('auto'),
  height: NotRequired<CSST.Property.Height>('auto'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
