import * as CSST from 'csstype'
import { css } from 'styled-components'

export type TextDecorationProps = {
  /* textDecoration ----------------------------- */
  textDecoration: CSST.Property.TextDecoration
  textDecorationColor: CSST.Property.TextDecorationColor
  textDecorationLine: CSST.Property.TextDecorationLine
  textDecorationSkip: CSST.Property.TextDecorationSkip
  textDecorationSkipInk: CSST.Property.TextDecorationSkipInk
  textDecorationStyle: CSST.Property.TextDecorationStyle
  textDecorationThickness: CSST.Property.TextDecorationThickness
  /* textUnderline ------------------------------ */
  textUnderlineOffset: CSST.Property.TextUnderlineOffset
  textUnderlinePosition: CSST.Property.TextUnderlinePosition
}

export const textDecorationMixin = css<Partial<TextDecorationProps>>`
  /* textDecoration ----------------------------- */
  ${({ textDecoration }) =>
    textDecoration !== null && `text-decoration: ${textDecoration};`}
  ${({ textDecorationColor }) =>
    textDecorationColor !== null &&
    `text-decoration-color: ${textDecorationColor};`}
  ${({ textDecorationLine }) =>
    textDecorationLine !== null &&
    `text-decoration-line: ${textDecorationLine};`}
  ${({ textDecorationSkip }) =>
    textDecorationSkip !== null &&
    `text-decoration-skip: ${textDecorationSkip};`}
  ${({ textDecorationSkipInk }) =>
    textDecorationSkipInk !== null &&
    `text-decoration-skip-ink: ${textDecorationSkipInk};`}
  ${({ textDecorationStyle }) =>
    textDecorationStyle !== null &&
    `text-decoration-style: ${textDecorationStyle};`}
  ${({ textDecorationThickness }) =>
    textDecorationThickness !== null &&
    `text-decoration-thickness: ${textDecorationThickness};`}
  /* textUnderline ------------------------------ */
  ${({ textUnderlineOffset }) =>
    textUnderlineOffset !== null &&
    `text-underline-offset: ${textUnderlineOffset};`}
  ${({ textUnderlinePosition }) =>
    textUnderlinePosition !== null &&
    `text-underline-position: ${textUnderlinePosition};`}
`
