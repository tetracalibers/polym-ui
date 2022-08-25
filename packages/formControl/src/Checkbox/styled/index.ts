import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const StyledInput = styled.input<CharacterProps>`
  /* 透明にして見えなくする */
  opacity: 0;
  /* 本来の配置から切り離す */
  position: absolute;

  /* focus時 */
`

export const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`

export const WithIcon = styled.span`
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
