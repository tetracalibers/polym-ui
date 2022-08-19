import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  filter: Required<CSST.Property.Filter>(),
}

type Conf = typeof conf

export type FilterEffectProps = getPropType<Conf>
export const filterEffectMixin = mixinBuilder<FilterEffectProps, Conf>(conf)
