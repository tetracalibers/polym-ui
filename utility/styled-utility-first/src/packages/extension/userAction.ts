import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  cursor: Required<CSST.Property.Cursor>(),
  userSelect: Required<CSST.Property.UserSelect>(),
  pointerEvents: Required<CSST.Property.PointerEvents>(),
  touchAction: Required<CSST.Property.TouchAction>(),
}
type Conf = typeof conf

export type UserActionProps = getPropType<Conf>
export const userActionMixin = mixinBuilder<UserActionProps, Conf>(conf)
