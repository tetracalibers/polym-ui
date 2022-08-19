import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  transition: Required<CSST.Property.Transition>(),
  transitionDelay: Required<CSST.Property.TransitionDelay>(),
  transitionDuration: Required<CSST.Property.TransitionDuration>(),
  transitionProperty: Required<CSST.Property.TransitionProperty>(),
  transitionTimingFunction: Required<CSST.Property.TransitionTimingFunction>(),
}

export type TransitionProps = getPropType<typeof conf>
export const transitionMixin = mixinBuilder<TransitionProps, typeof conf>(conf)
