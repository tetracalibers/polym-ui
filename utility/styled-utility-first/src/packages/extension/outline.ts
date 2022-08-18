import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { css } from 'styled-components'
import { getMixins } from './helper/mixinMaker'

const conf = {
  outlineColor: Required<CSST.Property.OutlineColor>(),
  outlineOffset: Required<CSST.Property.OutlineOffset>(),
  outlineStyle: Required<CSST.Property.OutlineStyle>(),
  outlineWidth: Required<CSST.Property.OutlineWidth>(),
}

export type OutlineProps = getPropType<typeof conf> & {
  outlineNone?: boolean
}

export const outlineMixin = css<OutlineProps>`
  ${getMixins<Omit<OutlineProps, 'outlineNone'>, typeof conf>(conf)}
  ${({ outlineNone }) => outlineNone && 'outline: none;'}
`
