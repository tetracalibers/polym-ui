import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  listStyle: Required<CSST.Property.ListStyle>(),
  listStyleImage: Required<CSST.Property.ListStyleImage>(),
  listStylePosition: Required<CSST.Property.ListStylePosition>(),
  listStyleType: Required<CSST.Property.ListStyleType>(),
}

export type ListStyleProps = getPropType<typeof conf>

export const listStyleMixin = mixinBuilder<ListStyleProps, typeof conf>(conf)
