import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  outlineColor: Required<CSST.Property.OutlineColor>(),
  outlineOffset: Required<CSST.Property.OutlineOffset>(),
  outlineStyle: Required<CSST.Property.OutlineStyle>(),
  outlineWidth: Required<CSST.Property.OutlineWidth>(),
}

export type OutlineProps = getPropType<typeof conf> & {
  outlineNone?: boolean
}

export const outlineMixin = {
  ...mixinBuilder<OutlineProps, typeof conf>(conf),
  outlineNone: (props: OutlineProps) => props.outlineNone && 'outline: none;',
}
