import styled, { css } from 'styled-components'
import { space, color, typography, layout } from 'styled-system'
import type {
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
} from 'styled-system'

export const cssAsProps = {
  text: {
    /* -------------------------------------------- */
    // color, backgroundColor
    // @see https://styled-system.com/api#color
    color,
    /* -------------------------------------------- */
    // fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, and fontStyle.
    // @see https://styled-system.com/api#typography
    typography,
  },
  box: {
    /* -------------------------------------------- */
    // margin, padding
    // @see https://styled-system.com/api#space
    space,
    /* -------------------------------------------- */
    // width, height, display, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, overflowX, and overflowY
    // @see https://styled-system.com/api#layout
    layout,
    /* -------------------------------------------- */
  },
} as const

export type SelectLabelCssAsProps = keyof typeof cssAsProps

namespace provideCssProps {
  export const as = (kind: SelectLabelCssAsProps) => {
    return css`
      ${Object.values(cssAsProps[kind]).map(prop => prop)}
    `
  }
}

namespace CssProps {
  export type As<L extends SelectLabelCssAsProps> = L extends 'button'
    ? SpaceProps & ColorProps & TypographyProps & LayoutProps
    : never
}

/*

export type ButtonProps = CssProps.As<'block'>

export const Button = styled.button<ButtonProps>`
  ${provideCssProps.as('block')}
`

*/
