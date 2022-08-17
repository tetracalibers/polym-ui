import * as CSST from 'csstype'
import { css } from 'styled-components'

export type BoxModelProps = {
  boxSizing: CSST.Property.BoxSizing
}

export const boxModelMixin = css<Partial<BoxModelProps>>`
  ${({ boxSizing }) => boxSizing !== null && `font-size: ${boxSizing};`}
`
