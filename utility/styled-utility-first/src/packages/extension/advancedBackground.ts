import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  backgroundClip: Required<CSST.Property.BackgroundClip>(),
}

type Conf = typeof conf

export type AdvancedBackgroundProps = getPropType<Conf>
export const advancedBackgroundMixin = mixinBuilder<
  AdvancedBackgroundProps,
  Conf
>(conf)
