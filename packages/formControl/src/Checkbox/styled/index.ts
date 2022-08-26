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
`

export const StyledLabel = styled.label<{ disabled: boolean | undefined }>`
  cursor: pointer;
  user-select: none;

  ${({ disabled }) => {
    return Truthy(disabled).when(css`
      cursor: default;
    `)
  }}
`

export const Square = styled.span<CharacterProps>`
  --border-width: ${({ borderWidth }) => borderWidth}px;
  --border-color: ${({ borderColor }) => borderColor};
  --border-radius: ${({ borderRadius }) => borderRadius}px;
  --outline-width: ${({ focusOutlineWidth }) => focusOutlineWidth}px;
  --outline-color: ${({ focusOutlineColor }) => focusOutlineColor};

  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-width: var(--border-width);
  border-style: solid;
  border-color: var(--border-color);
  background-color: #fff;
  border-radius: var(--border-radius);

  ${StyledInput}:focus + * & {
    outline-width: var(--outline-width);
    outline-style: solid;
    outline-color: var(--outline-color);
  }

  ${StyledInput}:disabled + * & {
    border: none;
    padding: var(--border-width);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`

export const IconWrapper = styled.span`
  display: inline-block;
  padding-bottom: 50%;
  padding-left: 15%;

  ${StyledInput}:not(:checked) + * & {
    display: none;
  }
`
