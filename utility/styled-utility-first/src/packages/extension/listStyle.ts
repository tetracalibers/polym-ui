import * as CSST from 'csstype'
import { css } from 'styled-components'

export type ListStyleProps = {
  listStyle: CSST.Property.ListStyle
  listStyleImage: CSST.Property.ListStyleImage
  listStylePosition: CSST.Property.ListStylePosition
  listStyleType: CSST.Property.ListStyleType
}

export const listStyleMixin = css<Partial<ListStyleProps>>`
  ${({ listStyle }) => listStyle !== null && `list-style: ${listStyle};`}
  ${({ listStyleImage }) =>
    listStyleImage !== null && `list-style-image: ${listStyleImage};`}
  ${({ listStylePosition }) =>
    listStylePosition !== null && `list-style-position: ${listStylePosition};`}
  ${({ listStyleType }) =>
    listStyleType !== null && `list-style-type: ${listStyleType};`}
`
