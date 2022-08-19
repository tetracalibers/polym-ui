import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  appearance: Required<CSST.Property.Appearance>(),
}

type Conf = typeof conf

export type FormInterfaceProps = getPropType<Conf>
export const formInterfaceMixin = mixinBuilder<FormInterfaceProps, Conf>(conf)
