import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'

const conf = {
  // Box間の間隔（margin-topの値）
  space: NotRequired<CSST.Property.MarginTop>('1.7rem'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
