import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'

const conf = {
  width: Required<CSST.Property.Width>('auto'),
  height: Required<CSST.Property.Height>('38px'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
