import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'

namespace provideCssProps {
  export const cssAsProps = {
    block: css`
      // margin & padding
      // @see https://styled-system.com/api#space
      ${space}

      // @see https://styled-system.com/api#color
      ${color}
    `,
  } as const

  export type SelectLabelCssAsProps = keyof typeof cssAsProps

  export const as = (kind: SelectLabelCssAsProps) => {
    return cssAsProps[kind]
  }
}

export const Button = styled.button`
  ${provideCssProps.as('block')}
`
