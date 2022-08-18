import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  boxSizing: Required<CSST.Property.BoxSizing>(),
}

type Conf = typeof conf

export type BoxModelProps = getPropType<Conf>

export const boxModelMixin = mixinBuilder<BoxModelProps, Conf>(conf)
/* 
{
  boxSizing: (props: BoxModelProps) =>
    props.boxSizing !== null && `box-sizing: ${props.boxSizing};`,
}
*/
