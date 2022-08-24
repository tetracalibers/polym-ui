import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const StyledElement = styled.div<CharacterProps>`
  && {
    ${({ byContentWidth }) => {
      return Truthy(byContentWidth).when(css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `)
    }}

    ${({ textCenter }) => {
      return Truthy(textCenter).when(css`
        text-align: center;
      `)
    }}
    
    box-sizing: border-box;
    padding-left: ${({ paddingX }) => paddingX};
    padding-right: ${({ paddingX }) => paddingX};
  }

  && > * {
    /* paddingを幅の計算から除外 */
    box-sizing: content-box;
    max-width: ${({ maxWidth }) => maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`
