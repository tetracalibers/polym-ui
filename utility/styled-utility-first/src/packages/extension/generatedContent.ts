import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  content: Required<CSST.Property.Content>(),
}

type Conf = typeof conf

export type GeneratedContentProps = getPropType<Conf>
export const generatedContentMixin = mixinBuilder<GeneratedContentProps, Conf>(
  conf
)
