import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  willChange: Required<CSST.Property.WillChange>(),
}

type Conf = typeof conf

export type WillChangeProps = getPropType<Conf>
export const willChangeMixin = mixinBuilder<WillChangeProps, Conf>(conf)
