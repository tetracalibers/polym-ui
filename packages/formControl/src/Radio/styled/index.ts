import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'
import { CircleIcon } from '@polym-ui/symbol'

export const Label = styled.label<{ disabled: boolean | undefined }>`
  cursor: pointer;
  user-select: none;

  ${({ disabled }) => {
    return Truthy(disabled).when(css`
      cursor: default;
    `)
  }}
`
export const Input = styled.input<CharacterProps>`
  /* 透明にして見えなくする */
  opacity: 0;
  /* 本来の配置から切り離す */
  position: absolute;
`

export const Circle = styled.span<CharacterProps>`
  --border-width: ${({ borderWidth }) => borderWidth}px;
  --border-color: ${({ borderColor }) => borderColor};
  --outline-width: ${({ focusOutlineWidth }) => focusOutlineWidth}px;
  --outline-color: ${({ focusOutlineColor }) => focusOutlineColor};

  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-width: 50%;
  border-style: solid;
  border-color: var(--border-color);
  background-color: #fff;
  border-radius: 50%;

  ${Input}:focus + * & {
    outline-width: var(--outline-width);
    outline-style: solid;
    outline-color: var(--outline-color);
  }

  ${Input}:disabled + * & {
    border: none;
    padding: var(--border-width);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`
