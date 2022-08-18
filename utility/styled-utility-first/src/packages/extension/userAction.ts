import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { getMixins } from './helper/mixinMaker'

const conf = {
  cursor: Required<CSST.Property.Cursor>(),
  userSelect: Required<CSST.Property.UserSelect>(),
  pointerEvents: Required<CSST.Property.PointerEvents>(),
}
type Conf = typeof conf

export type UserActionProps = getPropType<Conf>
export const userActionMixin = getMixins<UserActionProps, Conf>(conf)
