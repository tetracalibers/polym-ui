import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  transform: Required<CSST.Property.Transform>(),
}

type Conf = typeof conf

export type TransformProps = getPropType<Conf>
export const transformMixin = mixinBuilder<TransformProps, Conf>(conf)
