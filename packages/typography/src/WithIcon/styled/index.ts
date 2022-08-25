import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const Wrapper = styled.span<CharacterProps>`
  && {
    /* スペース文字を削除 */
    display: inline-flex;
    align-items: baseline;
  }

  /* icon */
  & :first-child {
    margin-inline-end: 0.75em;
  }
`
