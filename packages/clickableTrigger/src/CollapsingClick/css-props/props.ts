import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'

export const offsetOptions = [3, 4, 5] as const
type OffsetOptions = typeof offsetOptions[number]

const conf = {
  color: Required<CSST.Property.Color>('#333'),
  backgroundColor: Required<CSST.Property.BackgroundColor>('#fff'),
  borderRadius: Required<CSST.Property.BorderRadius>('25px'),
  offset: Required<OffsetOptions>(4),
  padding: Required<CSST.Property.Padding>('10px 30px'),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
