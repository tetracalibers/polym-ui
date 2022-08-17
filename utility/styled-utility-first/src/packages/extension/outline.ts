import * as CSST from 'csstype'
import { css } from 'styled-components'

export type OutlineProps = {
  outline: CSST.Property.Outline
  outlineColor: CSST.Property.OutlineColor
  outlineOffset: CSST.Property.OutlineOffset
  outlineStyle: CSST.Property.OutlineStyle
  outlineWidth: CSST.Property.OutlineWidth
}

export const outlineMixin = css<Partial<OutlineProps>>`
  ${({ outline }) => outline !== null && `outline: ${outline};`}
  ${({ outlineColor }) =>
    outlineColor !== null && `outline-color: ${outlineColor};`}
  ${({ outlineOffset }) =>
    outlineOffset !== null && `outline-offset: ${outlineOffset};`}
  ${({ outlineStyle }) =>
    outlineStyle !== null && `outline-style: ${outlineStyle};`}
  ${({ outlineWidth }) =>
    outlineWidth !== null && `outline-width: ${outlineWidth};`}
`
