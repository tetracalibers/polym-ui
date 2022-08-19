import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  transform: Required<CSST.Property.Transform>(),
  backfaceVisibility: Required<CSST.Property.BackfaceVisibility>(),
}

type Conf = typeof conf

export type TransformProps = getPropType<Conf>
export const transformMixin = mixinBuilder<TransformProps, Conf>(conf)
