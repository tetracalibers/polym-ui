import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  fill: Required<CSST.Property.Fill>(),
}

type Conf = typeof conf

export type SvgProps = getPropType<Conf>
export const svgMixin = mixinBuilder<SvgProps, Conf>(conf)
