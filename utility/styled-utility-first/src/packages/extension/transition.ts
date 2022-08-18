import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { getMixins } from './helper/mixinMaker'

const conf = {
  transitionDelay: Required<CSST.Property.TransitionDelay>(),
  transitionDuration: Required<CSST.Property.TransitionDuration>(),
  transitionProperty: Required<CSST.Property.TransitionProperty>(),
  transitionTimingFunction: Required<CSST.Property.TransitionTimingFunction>(),
}

export type TransitionProps = getPropType<typeof conf>
export const transitionMixin = getMixins<TransitionProps, typeof conf>(conf)
