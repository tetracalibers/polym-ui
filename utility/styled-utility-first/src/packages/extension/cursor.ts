import * as CSST from 'csstype'
import { css } from 'styled-components'

export type CursorProps = {
  cursor: CSST.Property.Cursor
}

export const cursorMixin = css<Partial<CursorProps>>`
  ${({ cursor }) => cursor !== null && `cursor: ${cursor}`}
`
