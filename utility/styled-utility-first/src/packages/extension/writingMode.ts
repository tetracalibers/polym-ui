import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  direction: Required<CSST.Property.Direction>(),
}

type Conf = typeof conf

export type WritingModeProps = getPropType<Conf>
export const writingModeMixin = mixinBuilder<WritingModeProps, Conf>(conf)
